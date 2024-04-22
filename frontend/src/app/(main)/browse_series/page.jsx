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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {podcastList.map(episode => (
             <Link href={`/viewPodcast/${episode._id}`}> <div key={episode.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full aspect-w-1 aspect-h-1">
                <img src={"http://localhost:5000/" + episode.cover}
                  alt={episode.name} 
                  className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                <p className="text-gray-700">{episode.artist}</p>
                  <h2 className="text-lg font-bold mb-2">{episode.name}</h2>
                </div>
              </div></Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default browse_series;