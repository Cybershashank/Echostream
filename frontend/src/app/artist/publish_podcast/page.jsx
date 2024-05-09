"use client"
import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import toast from 'react-hot-toast';

const publish_podcast = () => {

  const audioRef = useRef();

  const [podcastList, setPodcastList] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('artist')));
  const [selPodcast, setSelPodcast] = useState(null);

  const [selFile, setSelFile] = useState('');

  const fetchPodcastData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/getbyartist`, {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPodcastList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchPodcastData();
  }, []);

  const uploadFile = (file) => {
    const fd = new FormData();
    fd.append("myfile", file);
    fd.append("originalname", file.originalname); // Add originalname to the FormData
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success('File Uploaded!!');
        setSelFile(file.name)
        // updatePodcast({ published: true, record: file.name });
      }
    });
  };

  const uploadPodcastFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        setSelFile(file.name)
        // updatePodcast({ published: true, record: file.name });
        toast.success('File Uploaded!!');
      }
    });
  };

  const PublishForm = useFormik({
    initialValues: {
      record: "",
    },
    onSubmit: async (values) => {

      console.log(values);

      const res = await fetch("http://localhost:5000/podcast/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.status);

      if (res.status === 200) {
        toast.success("Publish Successfully");
        router.push('/artist/browse_podcast');
      } else if (res.status === 400) {
        toast.error("Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    },
  });
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder
  } = useAudioRecorder();

  const blobToFile = (theBlob, fileName) => {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    theBlob.originalname = fileName;
    return theBlob;
  }

  useEffect(() => {
    if (!recordingBlob) return;


    // recordingBlob will be present at this point after 'stopRecording' has been called
  }, [recordingBlob])

  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    // const audio = document.createElement("audio");
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
    console.log(blob);
    audioRef.current.src = url;
    // const file = blobToFile(blob, generateRandomName());
    const updatedBlob = updateBlobMetadata(blob, 'audio/mpeg', generateRandomName());
    console.log(updatedBlob);
    uploadFile(updatedBlob);
  };
  const generateRandomName = () => {
    const timestamp = Date.now();
    return `audio_${timestamp}.mp3`;
  };
  const updateBlobMetadata = (blob, newType, newName) => {
    // Create a new Blob from the old Blob's data with the new type
    const newBlob = new Blob([blob], { type: newType });

    // Create a new File from the new Blob with the new name
    const newFile = new File([newBlob], newName, { type: newType });

    return newFile;
  };

  const updatePodcast = (data) => {
    console.log(data);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/update/${selPodcast}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'x-auth-token': currentUser.token
      }
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Podcast updated successfully");
        } else {
          toast.error("Something went wrong");
        }
      })
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-gray-300 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Select Series</h2>
          <br />
          <select className="form-select" onChange={
            (e) => {
              setSelPodcast(e.target.value);
            }
          }>
            <option value="">Select Podcast</option>
            {podcastList.map((podcast) => (
              <option key={podcast._id} value={podcast._id}>{podcast.title}</option>
            ))}
          </select>
        </div>





        <div className="bg-gray-00 rounded-lg shadow-md p-6">
        <h1 className="text-lg font-semibold mb-2"> Podcast Recorder</h1>
        <br/>
          {
            selPodcast !== null && (
              <div className="container-fluid  flex rounded-2xl justify-center ">
                {/* <form onSubmit={PublishForm.handleSubmit}> */}
                <div className="mb-2  px-24 py-4  bg-purple-600  rounded-xl">

                  <AudioRecorder type="file" id='record'
                    value={PublishForm.values.record}
                    onChange={PublishForm.handleChange}
                    onRecordingComplete={(blob) => addAudioElement(blob)}
                    recorderControls={recorderControls}
                    canvasHeight={50}
                    canvasWidth={300}
                  />
                  <button type='submit' onClick={recorderControls.stopRecording} className='btn btn-danger mt-3'>Stop recording
                  </button>
                </div>
                {/* </form> */}
                {
                  audioRef.current !== null && (
                    <audio ref={audioRef} controls></audio>
                  )
                }
              </div>
            )
          }

          <button className="bg-purple-700 text-white block mx-auto px-6 py-1 rounded-lg"
            onClick={e => updatePodcast({ published: true, record: selFile })}
          >Publish</button>
        </div>

        <div className="bg-gray-00 rounded-lg shadow-md p-6">
          <label className="text-lg font-semibold mb-2">Upload Podcast</label>
          <br/>
          <input type="file" onChange={uploadPodcastFile} />
        </div>
      </div>


    </>
  )
}

export default publish_podcast;