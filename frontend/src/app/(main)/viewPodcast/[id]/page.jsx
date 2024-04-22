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
      if(podcastList.length > 0){
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
      }else{
        return <p>No podcast episodes found</p>
      }
  }


  return (
    <>
      {series != null ? (

        <div className="container mx-auto px-4 py-8">


          <div key={series.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-60 mx-auto block h-60">
              <img src={"http://localhost:5000/" + series.cover}
                alt={series.name}
                className="object-cover " />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 text-center">{series.name}</h2>
              <p className="text-gray-700 text-center">{series.likes}</p>
              <p className="text-gray-700 text-center">{series.comments}</p>
            </div>
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