'use client';
import usePlayerContext from '@/Context/PlayerContext';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewPodcast = () => {

  const { id } = useParams();
  const [series, setseries] = useState([]);
  const [podcastList, setPodcastList] = useState([]);

  const { playerAction } = usePlayerContext();

  const fetchSeriesData = async () => {
    const res = await fetch("http://localhost:5000/series/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setseries(data)
  }

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/podcast/getbyseries/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setPodcastList(data)
  }

  useEffect(() => {
    fetchPodcastData();
    fetchSeriesData();
  }, [])


  const displayPodcastEpisodes = () => {
    if (podcastList.length > 0) {
      return podcastList.map((podcast) => {
        return (
          <div key={podcast.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-60 mx-auto block h-60">
              <img src={`${process.env.NEXT_PUBLIC_API_URL}/${podcast.image}`}
                alt={podcast.name}
                className="object-cover " />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-center">{podcast.name}</h2>
              {/* play button */}
              <button type='button' onClick={() => playerAction(podcast, 'play')} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Play</button>
              <p className="text-gray-700 text-center">{podcast.likes}</p>
              <p className="text-gray-700 text-center">{podcast.comments}</p>
            </div>
          </div>
        )
      })
    } else {
      return <p>No podcast episodes found</p>
    }
  }


  return (
    <>
      {series != null ? (

        <div className='flex justify-center'>



          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

            <div className="flex items-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01AoMSHEgLhMe1a1v1aqMhATZ4C3B6h9PdCsAw8y38g&s"
                alt="Podcast Series Image"
                className="w-24 h-24 mr-4 rounded-lg"
              />
              <div>
                <h2 className="text-sm font-medium">Playlist</h2>
                <h1 className="text-xl font-bold">Village Story</h1>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 4v16l15-8L5 4z"
                  />
                </svg>
              </button>
              <p className="text-gray-600 text-sm">Play latest episode</p>
            </div>

            <div className="grid grid-cols-12 gap-4">

              <div className="font-bold col-span-1">#</div>
              <div className="font-bold col-span-4">Title</div>
              <div className="font-bold col-span-3">Album</div>
              <div className="font-bold col-span-2">Date Added</div>
              <div className="font-bold col-span-2">Time Duration</div>

              <div className='col-span-1'>1</div>
              <div className='col-span-4'>The Lion King part 1</div>
              <div className='col-span-3'>Album 1</div>
              <div className='col-span-2'>April 12, 2024</div>
              <div className='col-span-2'>30:00</div>

              <div className='col-span-1'>1</div>
              <div className='col-span-4'>The Lion King part 1</div>
              <div className='col-span-3'>Album 1</div>
              <div className='col-span-2'>April 12, 2024</div>
              <div className='col-span-2'>30:00</div>

              <div className='col-span-1'>1</div>
              <div className='col-span-4'>The Lion King part 1</div>
              <div className='col-span-3'>Album 1</div>
              <div className='col-span-2'>April 12, 2024</div>
              <div className='col-span-2'>30:00</div>

              <div className='col-span-1'>1</div>
              <div className='col-span-4'>The Lion King part 1</div>
              <div className='col-span-3'>Album 1</div>
              <div className='col-span-2'>April 12, 2024</div>
              <div className='col-span-2'>30:00</div>

            </div>
          </div>



          <div key={series.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-60 mx-auto block h-60">
              <img src={"http://localhost:5000/" + series.cover}
                alt={series.name}
                className="object-cover " />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2 text-center">{series.name}</h2>
            <p className="text-gray-700 text-center">{series.likes}</p>
            <p className="text-gray-700 text-center">{series.comments}</p>
          </div>





          {displayPodcastEpisodes()}
        </div>

      ) : (
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>

      )}


    </>
  )
}

export default viewPodcast