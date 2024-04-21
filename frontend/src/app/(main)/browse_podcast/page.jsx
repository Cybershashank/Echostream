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

      <div className="grid  h-screen w-screen  ">
    
        <main className="col-span-5 row-span-3 overflow-auto">

          <section className="px-6 grid gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-2xl text-white"></h3>
              </div>
            </div>
            {
              podcastList.map((pod) => {


                return <div className="grid grid-cols-6  gap-4">
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
        
        </main>
     
      </div>


    </>
  )
}

export default browse_podcast;