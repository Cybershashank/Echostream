'use client';
import React from 'react'

const UserProfile = () => {
  return (
    <>
      <>





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
                  src="https://pagedone.io/asset/uploads/1705471668.png"
                  alt="user-avatar-image"
                  className="border-4 border-solid border-white rounded-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                <div className="block">
                  <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
                    Emma Smith
                  </h3>
                  <p className="font-normal text-base leading-7 text-gray-500">
                    Los Anbeles, California
                  </p>
                </div>
                <button className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3011 8.69881L8.17808 11.8219M8.62402 12.5906L8.79264 12.8819C10.3882 15.6378 11.1859 17.0157 12.2575 16.9066C13.3291 16.7974 13.8326 15.2869 14.8397 12.2658L16.2842 7.93214C17.2041 5.17249 17.6641 3.79266 16.9357 3.0643C16.2073 2.33594 14.8275 2.79588 12.0679 3.71577L7.73416 5.16033C4.71311 6.16735 3.20259 6.67086 3.09342 7.74246C2.98425 8.81406 4.36221 9.61183 7.11813 11.2074L7.40938 11.376C7.79182 11.5974 7.98303 11.7081 8.13747 11.8625C8.29191 12.017 8.40261 12.2082 8.62402 12.5906Z"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="px-2 font-semibold text-base leading-7 text-white">
                    Send Message
                  </span>
                </button>

              </div>
              <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
                <div className="flex items-center gap-4">
                  <a href="http://localhost:3000/user/editprofile"><button className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">
                    Edit Profile
                  </button></a>
                  <button className="py-3.5 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c 
  <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div className="rounded-t-lg h-32 overflow-hidden">
      <img
        className="object-cover object-top w-full"
        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="Mountain"
      />
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
      <img
        className="object-cover object-center h-32"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="Woman looking front"
      />
    </div>
    <div className="text-center mt-2">
      <h2 className="font-semibold">Sarah Smith</h2>
      <p className="text-gray-500">Storyteller</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
      <li className="flex flex-col items-center justify-around">
        <svg
          className="w-4 fill-current text-blue-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
        <div>2k</div>
      </li>
      <li className="flex flex-col items-center justify-between">
        <svg
          className="w-4 fill-current text-blue-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
        </svg>
        <div>10k</div>
      </li>
      <li className="flex flex-col items-center justify-around">
        <svg
          className="w-4 fill-current text-blue-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
        </svg>
        <div>15</div>
      </li>
    </ul>
    <div className="p-4 border-t mx-8 mt-2">
      <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
        Follow
      </button>
    </div>
  </div>*/}
        </>


      </>
    </>
  )
}

export default UserProfile;