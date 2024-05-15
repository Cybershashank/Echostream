'use client'
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'



const editProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))



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
        if (res.status === 200) {
          toast.success('Profile image uploaded successfully')
        }
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
    <div>
      <>
        {/* component */}

        <main className="profile-page">

          <section className="relative  bg-blueGray-200">

            <div className="bg-white   py-12 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                  <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Update Profile
                  </h2>

                </div>
                {/* text - end */}
                {/* form - start */}
                {
                  <Formik initialValues={currentUser} onSubmit={updateProfile}>
                    {(updateProfile) => (


                      <form onSubmit={updateProfile.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
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

                      </form>
                    )}
                  </Formik>
                }
                {/* form - end */}
              </div>
            </div>





          </section>
        </main>
      </>


    </div>
  )
}

export default editProfile;