'use client';
import useVoiceContext from '@/Context/voiceContext';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const browse_series = () => {


  const [filterList, setfilterList] = useState([])
  const [podcastList, setPodcastList] = useState([]);

  const { performActionUsingVoice, finalTranscript, fillInputUsingVoice, resetTranscript } = useVoiceContext();

  useEffect(() => {

    if(finalTranscript.toLowerCase().includes('search series ')){
      const searchTerm = finalTranscript.split('search series ').at(-1);
      console.log(searchTerm);
      setPodcastList(filterList.filter((pod) => {
        return (pod.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }))
      resetTranscript();
    }

    else if(finalTranscript.toLowerCase().includes('show all series')){
      fetchPodcastData();
      resetTranscript();
    }

    else if(finalTranscript.toLowerCase().includes('open podcast ')){
      const view = finalTranscript.split('open podcast ').at(-1);
      window.location.href = `/viewPodcast/${podcastList[view]._id}`
     
      resetTranscript();
    }
  }, [finalTranscript]);

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/series/getall");
    console.log(res.status);

    const data = await res.json();
    console.log(data);
setfilterList(data)
    setPodcastList(data);
  }
  useEffect(() => {
    fetchPodcastData();
  }, [])

  
  const filterSeries = (e) => {
    const value = e.target.value;
    setPodcastList(filterList.filter((pod) => {
      return (pod.name.toLowerCase().includes(value.toLowerCase()))
    }))
  }



  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Podcast Series</h1>

          <form className="max-w-md mx-auto p-8">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Podcast Series..."
                required=""
                onChange={filterSeries}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Search
              </button>
            </div>
          </form>


          <div className="grid grid-cols-4 gap-6  flex-warp md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style">
            {podcastList.map((episode, index) => (
              <Link href={`/viewPodcast/${episode._id}`}>
                <p>{index+1}</p>
                <div key={episode.id} className="border-2 flex md:block">
                  <div className="relative ">
                    <img src={"http://localhost:5000/" + episode.cover}
                      alt={episode.name}
                      className="h-84 w-full object-contain md:h-96 inline-block relative flex-shrink-0 rounded-lg" />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{episode.name}</h2>
                    <p className="text-gray-900">{episode.artist.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>


    </>
  )
}

export default browse_series;