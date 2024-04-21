"use client"
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const publish_podcast = () => {

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

  useEffect(() => {
    if (!recordingBlob) return;


    // recordingBlob will be present at this point after 'stopRecording' has been called
  }, [recordingBlob])

  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);



  };

  return (
    <>

      <div className="container-fluid flex rounded-2xl justify-center ">

        <form onSubmit={PublishForm.handleSubmit}>
          <div className="mb-2  px-24 py-4  bg-purple-600 mt-5 rounded-xl">

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
      </div>

    </>
  )
}

export default publish_podcast;