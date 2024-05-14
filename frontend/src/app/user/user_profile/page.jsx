'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const UserProfile = () => {

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
  });

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


  return (
    <>


      <section className="relative pt-40 pb-24">
        <img
          src="https://pagedone.io/asset/uploads/1705473378.png"
          alt="cover-image"
          className="w-full absolute top-0 left-0 z-0 h-60"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <img
              src={currentUser.avatar && `${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
              alt="user-avatar-image"
              className="border-4 border-solid border-white rounded-full"
            />
            <div className="w-full lg:w-4/12 px-4 lg:order-3  lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <label className='btn bg-white border hover:bg-slate-200' htmlFor='upload-image'>
                  {" "} <i className='fas fa-pen'>&nbsp;Change</i>
                </label>
                <input type="file" hidden onChange={uploadProfileImage} id="upload-image" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row max-sm:gap-5 mt-24 items-center justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
                {currentUser.name}
              </h3>
              <p className="font-normal text-base leading-7 text-gray-500">
                {currentUser.email}
              </p>
            </div>
            <Link href="http://localhost:3000/user/editprofile"><button className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">
              Edit Profile
            </button></Link>

          </div>

        </div>
      </section>


    </>



  )
}

export default UserProfile;