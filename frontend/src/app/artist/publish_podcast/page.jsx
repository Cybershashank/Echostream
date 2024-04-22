"use client"
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import toast from 'react-hot-toast';

const publish_podcast = () => {

  const audioRef = useRef();

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
    const updatedBlob = updateBlobMetadata(blob, 'audio/mpeg', 'newName.mp3');
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

  return (
    <>

      <div className="container-fluid h-screen flex rounded-2xl justify-center ">

        <form onSubmit={PublishForm.handleSubmit}>
          <div className="mb-2  px-24 py-4  bg-purple-600  rounded-xl">

            <AudioRecorder type="file" id='record'
              value={PublishForm.values.record}
              onChange={PublishForm.handleChange}
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
            <button type='submit' onClick={recorderControls.stopRecording} className='btn btn-danger mt-3'>Stop recording</button>
          


          </div>
          <button className="bg-purple-700 text-white block mx-auto px-4 py-1 rounded-lg">Publish</button>

        </form>
        {
          audioRef.current !==null && (
            <audio ref={audioRef} controls></audio>
          )
        }
      </div>

    </>
  )
}

export default publish_podcast;