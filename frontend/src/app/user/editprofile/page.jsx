import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Editprofile = () => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const useForm = useFormik({
    initialValues: currentUser,
    onSubmit: async (data) => {
      console.log(data);
      const res = await fetch(url + '/user/update/' + currentUser._id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      const userData = await res.json();
      console.log(userData);
      setCurrentUser(userData);
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
  })

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(`http://localhost:3000/util/uploadfile`, {
      method: 'POST',
      body: fd,
    }).then(res => {
      if (res.status === 200) {
        toast.success('Profile Image Updated');
        updateProfile({ avatar: file.name });
      }
    });
  }
  const updateProfile = (data) => {
    fetch(`http://localhost:3000/user/update/${currentUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log(res.status);
        return res.json();
      })
      .then(data => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
  }

  const deleteAccount = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/user/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {


    }
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
            <div className="p-2 md:p-4">
              <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                      src={
                        currentUser.avatar &&
                        `http://localhost:3000/${currentUser.avatar}`}
                      alt="Bordered avatar"
                    />
                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <div className="text-center my-2">
                        <label
                          className="py-3 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200"
                          htmlFor="upload-image"
                        >
                          {" "}
                          <i className="fas fa-pen"></i>&nbsp;Edit{" "}
                        </label>
                        <input
                          type="file"
                          hidden
                          onChange={uploadProfileImage}
                          id="upload-image"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                        >
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          onChange={useForm.handleChange}
                          value={useForm.values.name}
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                          placeholder="Your first name"
                          defaultValue=""
                          required=""
                        />
                      </div>

                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={useForm.handleChange}
                        value={useForm.values.email}
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="your.email@mail.com"
                        required=""
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Bio
                      </label>
                      <textarea
                        id="message"
                        onChange={useForm.handleChange}
                        value={useForm.values.bio}
                        rows={4}
                        className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                        placeholder="Write your bio here..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-2 px-4 bg-red-500 text-white rounded mx-3 "
                        onClick={deleteAccount()}
                      >
                        Delete
                      </button>
                      <button
                        type="submit"
                        className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>

    </>
  )
}

export default Editprofile;