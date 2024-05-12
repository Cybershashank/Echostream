'use client';
import { Formik, useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const editPofile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))


  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file)
    fetch(`http://localhost:5000/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then(res => {
      if (res.status === 200) {
        toast.success('Profile image uploaded successfully')
        updateProfile({ avatar: file.name })
      }
    })
  }

  const updateProfile = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${currentUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res.status)
        return res.json()
      })
      .then(data => {
        console.log(data),
          setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    body {\n        font-family: 'Plus Jakarta Sans', sans-serif;\n    }\n"
          }}
        />
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">

          <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          {
                    <Formik initialValues={currentUser} onSubmit={updateProfile}>
                      {(updateProfile) => (
            <div className="p-2 md:p-4">
                  <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                      alt="..."
                      src={currentUser.avatar && `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <div className="text-center my-4">
                        <label className='btn bg-white border hover:bg-slate-200' htmlFor='upload-image'>
                          {" "} <i className='fas fa-pen'>&nbsp;Edit </i>
                        </label>
                        <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />
                      </div>
                      <button
                        type="button"
                        className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                      >
                        Delete picture
                      </button>
                    </div>
                  </div>
                

                        <div className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                              Name*
                            </label>
                            <input
                              type='text'
                              id="name"
                              value={updateProfile.values.name}
                              onChange={updateProfile.handleChange}
                              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="last-name"
                              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                              Address*
                            </label>
                            <input
                              type="text"
                              id="address"
                              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                              onChange={updateProfile.handleChange}
                              value={updateProfile.values.address}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                              Email*
                            </label>
                            <input
                              type='text'
                              id="email"
                              value={updateProfile.values.email}
                              onChange={updateProfile.handleChange}
                              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="last-name"
                              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                              Phone No.*
                            </label>
                            <input
                              type='text'
                              id="phone"
                              value={updateProfile.values.phone}
                              onChange={updateProfile.handleChange}
                              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor="message"
                              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                              Bio*
                            </label>
                            <textarea
                              name="message"
                              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                              defaultValue={""}
                            />
                          </div>
                          <div className="flex items-center justify-between sm:col-span-2">
                            <button type="submit" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                              Update
                            </button>

                          </div>

                        </div>
                 
                </div>
  
              </div>
            </div>
          )}
          </Formik>
        }
          </main>
        </div>
      </>

    </>
  )
}

export default editPofile;