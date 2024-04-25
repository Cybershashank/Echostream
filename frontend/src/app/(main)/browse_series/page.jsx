'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const browse_series = () => {

  const [podcastList, setPodcastList] = useState([]);

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/series/getall");
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
      <div className="bg-gray-100 h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Podcast Series</h1>
          <div className="grid grid-cols-4 gap-6  flex-warp md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style">
            {podcastList.map(episode => (
              <Link href={`/viewPodcast/${episode._id}`}>
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