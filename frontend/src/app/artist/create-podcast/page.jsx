'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import toast from 'react-hot-toast';


const CreatePodcast = () => {
  const [selFile, setSelFile] = useState("");

  const createPodcastValidationSchema = Yup.object().shape({
    title: Yup.string().required('title is Required'),
    genre: Yup.string().required('genre is Required'),
    category: Yup.string().required('category is Required'),
    language: Yup.string().required('language is Required'),
    discription: Yup.string().required('discription is Required'),

  });

  const podcastForm = useFormik({
    initialValues: {
      title: '',
      genre: '',
      category: '',
      language: '',
      discription: '',
      image: ''
    },
    onSubmit: (values) => {
      console.log(values);

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('Podcast Created successfully')
          } else {
            toast.error('Error creating podcast')
          }
        }).catch((err) => {
          toast.error('Error creating podcast')
          console.log(err);
        });

    },
    validationSchema: createPodcastValidationSchema
  })



  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
        method: 'POST',
        body: fd
    })
    console.log(res.status);
}

  return (

    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">PODCAST DETAILS</h6>
              </div>
            </div>


            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={podcastForm.handleSubmit}>
{/* 
                <div className="col-span-full">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Cover Image
                  </h6>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                           id="file-upload"
                            name="image"
                            type="file"
                            className="sr-only"
                            onChange={uploadFile}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div> */}


                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Podcast Form
                </h6>
                <div className="flex flex-wrap">

                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">
                        podcast name
                      </label>
                      <input
                        type="text"
                        id="title"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.title}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name" />
                    </div>
                  </div>


                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">
                        genre
                      </label>
                      <input
                        type="text"
                        id="genre"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.genre}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Comedy, Mystery, Sci-fi, etc..." />
                    </div>
                  </div>


                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">
                        category
                      </label>
                      <input
                        type="text"
                        id="category"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.category}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Novals, Biopics, etc..." />
                    </div>
                  </div>


                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">
                        language
                      </label>
                      <input
                        type="text"
                        id="language"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.language}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Hindi, English, etc..." />
                    </div>
                  </div>
                </div>


                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Discription
                </h6>


                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <textarea
                        type="text"
                        id="comment"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.comment}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows={4}
                        placeholder={
                          "Write the discription here."
                        }
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >Submit</button>

              </form>
            </div>
          </div>
        </div >
      </section >
    </>

  )

}


export default CreatePodcast;






