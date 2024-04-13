'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';


const CreatePodcast = () => {

  const podcastForm = useFormik({
    initialValues: {
      series: '',
      artist: '',
      title: '',
      type: '',
      discription: '',
      icon: ''
    },
    onSubmit: (values) => {

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success('Podcast Created successfully')
          } else {
            toast.error('Error creating podcast')
          }
        }).catch((err) => {
          toast.error('Error creating podcast')
          console.log(err);
        });

    }
  })

  return (
    <>


      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Podcast Detail</h6>


              </div>
            </div>


            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={podcastForm.handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Podcast Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Podcast name
                      </label>
                      <input
                        type="text"
                        id="title"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.title}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Podcast Name"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Genre
                      </label>
                      <input
                        type="text"
                        id="genre"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.genre}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Comedy, Crime, Fantasy, History, Sci-Fi..."
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.category}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Series, Novel, Biopic..."
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Language
                      </label>
                      <input
                        type="text"
                        id="language"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.language}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Hindi, English, Tamil, Telugu, Marathi..."
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Artist Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Artist Name
                      </label>
                      <input
                        type="text"
                        id="artistname"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.artistname}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Name"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Contact Detail
                      </label>
                      <input
                        type="email"
                        id="contact"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.contact}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="email/social media link"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Nationality
                      </label>
                      <input
                        type="text"
                        id="country"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.country}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="India"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Creator Type
                      </label>
                      <input
                        type="text"
                        id="creator"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.creator}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Celebrity, Influencer, Student, Author..."
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Podcast Discription
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">

                      <textarea
                        type="text"
                        id="discription"
                        onChange={podcastForm.handleChange}
                        value={podcastForm.values.discription}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows={4}
                        defaultValue={
                          "Enter the discription here."
                        }
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"

                >Create</button>

              </form>
            </div>
          </div>
        </div >
      </section >





    </>
  )
}


export default CreatePodcast;