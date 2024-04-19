'use client';
import React, { useEffect, useState } from 'react'


const browse_podcast = () => {

  const [podcastList, setPodcastList] = useState([]);

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/podcast/getall");
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setPodcastList(data);
  }
  useEffect(() => {
    fetchPodcastData();
  }, [])



  return (
    <>

      <div className="grid grid-rows-3 grid-cols-6 h-full">
        {/* <nav className="col-span-1 row-span-3 bg-gray-700 pt-6">
          <div className="px-6 mb-6">
            <svg viewBox="0 0 1134 340" className="w-auto h-10 text-white">
              <title>Echostream</title>
            </svg>
          </div>
          <div className="px-2 mb-6">
            <div className=" flex font-medium items-center px-4 py-2 rounded text-sm text-white">
              <svg
                className="h-6 mr-4"
                viewBox="0 0 512 512"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
                  fill="currentColor"
                />
              </svg>
              Home
            </div>
            <div className="flex font-medium items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white">
              <svg
                className="h-6 mr-4"
                viewBox="0 0 512 512"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              Search
            </div>
            <div className="flex font-medium items-center px-4 py-2 rounded text-sm text-gray-100 hover:text-white">
              <svg
                className="h-6 mr-4"
                viewBox="0 0 512 512"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                  fill="currentColor"
                />
              </svg>
              Your Library
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-100 uppercase text-white px-6 tracking-widest font-light mb-4">
              Playlists
            </h3>
            <div className="mb-3">
              <div className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100">
                <svg
                  className="bg-white fill-current h-8 mr-4 p-1 text-black w-8"
                  shapeRendering="crispEdges"
                  viewBox="0 0 36 36"
                >
                  <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" />
                </svg>
                Create Playlist
              </div>
              <div className="px-6 py-1 flex items-center text-sm text-white opacity-50 hover:opacity-100">
                <svg
                  className="bg-liked-songs fill-current h-8 mr-4 p-2 w-8"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
                Liked Songs
              </div>
            </div>
            <hr className="border-gray-200 mx-6 mb-3" />
            <div>
              <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
                Liked from Radio
              </div>
              <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
                Discover Weekly
              </div>
            </div>
          </div>
        </nav> */}
        <main className="col-span-5 row-span-3 overflow-auto">
          {/* <header className="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center">
              <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed">
                <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
                  />
                </svg>
              </button>
              <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex">
                <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
                  />
                </svg>
              </button>
            </div>
            <div>
              <button className="text-xs text-white bg-gray-500 rounded-full p-px pr-3">
                <img
                  src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-1/p320x320/65515608_2532995250044876_5026016977987043328_n.jpg?_nc_cat=107&_nc_sid=0c64ff&_nc_ohc=o9OLXY2wcysAX9HP-OL&_nc_ht=scontent-hkg4-1.xx&_nc_tp=6&oh=3692e7babdda377f38099d7603d11f92&oe=5EAD96FA"
                  className="w-7 h-7 inline-block rounded-full mr-2"
                />
                Jedidiah Avelino
              </button>
            </div>
          </header> */}
          <section className="px-6 grid gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-2xl text-white">
                  <a
                    className="border-b border-transparent hover:border-white"
                    href=""
                  >
                    Recently played
                  </a>
                </h3>
              </div>
              <div>
                <a
                  className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                  href=""
                >
                  See all
                </a>
              </div>
            </div>

          </section>
          <section className="px-6 grid gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-2xl text-white"></h3>
              </div>
            </div>
            {
              podcastList.map((pod) => {


                return <div className="grid grid-cols-6 gap-4">
                 <div className="">
                  <div className="bg-gray-200 rounded-lg p-5">
                    <div className="relative pt-full mb-4">
                      <img src={"http://localhost:5000/" + pod.image} alt="" className='h-auto w-screen' style={{ height: "10rem" }} />

                    </div>
                    <div className="text-sm text-black text-line-clamp-1 mb-1 block">
                      {pod.title}
                    </div>
                    <div className="relative pb-5">
                      <span className="text-s text-purple-700 text-line-clamp-1">
                        {pod.category}
                      </span>
                    </div>
                  </div>
                  </div>
              </div>
              })
            }
    </section>
          <section className="px-6 grid gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-2xl text-white">
                  <a
                    className="border-b border-transparent hover:border-white"
                    href=""
                  >
                    Made for Jedidiah
                  </a>
                </h3>
              </div>
              <div>
                <a
                  className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                  href=""
                >
                  See all
                </a>
              </div>
            </div>

          </section>
        </main>
        <footer className="bg-gray-800 col-span-6  p-4 grid fixed w-full sticky bottom-0 grid-cols-3 gap-6">
          <div className="flex items-center bg-black">
            <img
              className="h-14 w-14 mr-4 flex-shrink-0"
              src="https://picsum.photos/56.webp?random=10"
              alt=""
            />
            <div className="mr-4">
              <div className="text-sm text-white text-line-clamp-1 font-light">
                Heaven
              </div>
              <div className="text-xs text-gray-100 text-line-clamp-1">
                <span>Ludwig van Beethoven</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-green-200 p-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
              </button>
              <button className="text-gray-100 p-2">
                <svg
                  className="w-4 h-4"
                  width={16}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor" fillRule="evenodd">
                    <path
                      d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                      fillRule="nonzero"
                    />
                    <path d="M10 8h4v3h-4z" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-3">
              <button className="w-5 h-5 text-gray-100 mr-6">
                <svg
                  className="fill-current w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                </svg>
              </button>
              <button className="w-5 h-5 text-gray-100 mr-6">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                </svg>
              </button>
              <button className="w-8 h-8 border border-gray-300 rounded-full flex text-gray-100 mr-6">
                <svg
                  className="fill-current h-5 w-5 m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                </svg>
              </button>
              <button className="w-5 h-5 text-gray-100 mr-6">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                </svg>
              </button>
              <button className="w-5 h-5 text-gray-100">
                <svg
                  className="fill-current w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-100 font-light">4:18</span>
              <div className="overflow-hidden relative flex-1 mx-2 rounded">
                <div className="border-b-4 border-gray-400 rounded" />
                <div className="absolute inset-x-0 top-0 -translate-x-48 border-b-4 border-gray-100 rounded transform hover:border-green-200" />
              </div>
              <span className="text-xs text-gray-100 font-light">5:13</span>
            </div>
          </div>
        </footer>
      </div>


    </>
  )
}

export default browse_podcast;