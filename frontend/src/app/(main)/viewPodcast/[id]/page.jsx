'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const viewPodcast = () => {

    const { id } = useParams();
 const [series, setseries] = useState([])

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/series/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
setseries(data)
  }



  useEffect(() => {
    fetchPodcastData();
  }, [])

  

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