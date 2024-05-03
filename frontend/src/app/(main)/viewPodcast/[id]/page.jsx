'use client';
import usePlayerContext from '@/Context/PlayerContext';
import { IconPlayerPause, IconPlayerPlayFilled } from '@tabler/icons-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewPodcast = () => {

  const { id } = useParams();
  const [series, setseries] = useState([]);
  const [podcastList, setPodcastList] = useState([]);

  const { playerAction, isSongPlaying, songStatus } = usePlayerContext();

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

  const displayIcon = (podcast) => {
    if (isSongPlaying(podcast) && (songStatus === 'playing')) {
      return <IconPlayerPause
        onClick={() => playerAction(podcast, 'pause')}
        size={30} className='text-purple-500 hover:text-purple-600' />
    } else if (!isSongPlaying(podcast)) {
      return <IconPlayerPlayFilled
        onClick={() => playerAction(podcast, 'play')}
        size={30} className='text-purple-500 hover:text-purple-600' />
    } else if(isSongPlaying(podcast) && (songStatus === 'paused')) {
      return <IconPlayerPlayFilled
        onClick={() => playerAction(podcast, 'play')}
        size={30} className='text-purple-500 hover:text-purple-600' />
    }
  }

  const displayPodcastEpisodes = () => {
    if (podcastList.length > 0) {
      return podcastList.map((podcast, index) => (
        <>
          <div key={podcast._id} className='col-span-1'>
            {
              displayIcon(podcast)
            }
          </div>
          <div className='col-span-5'>
            <div className='flex items-center gap-x-5'>
              <img style={{ height: 50 }} className='h-48' src={`${process.env.NEXT_PUBLIC_API_URL}/${podcast.image}`} alt="" />
              <p>{podcast.title}</p>
            </div>
          </div>
          <div className='col-span-4'>{new Date(podcast.createdAt).toLocaleDateString()}</div>
          <div className='col-span-2'>30:00</div>
        </>
      ))
    } else {
      return <p>No podcast episodes found</p>
    }
  }


  return (
    <>
      {series != null ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full min-h-screen">
          <div className="flex items-center mb-4">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${series.cover}`}
              alt={series.name}
              className="w-24 h-24 mr-4 rounded-lg"
            />
            <div>
              <h2 className="text-sm font-medium">Playlist</h2>
              <h1 className="text-xl font-bold">{series.name}</h1>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mr-4"
              onClick={() => playerAction(podcastList[0], 'play')}
            >
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

          <div className="grid grid-cols-12 gap-4 items-center">

            <div className="font-bold col-span-2"></div>
            <div className="font-bold col-span-4">Title</div>
            <div className="font-bold col-span-4">Date Added</div>
            <div className="font-bold col-span-2">Time Duration</div>

            {
              displayPodcastEpisodes()
            }

          </div>
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