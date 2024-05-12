'use client';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const browse_podcast = () => {
  const [swiperRef, setSwiperRef] = useState();

  const [podcastList, setPodcastList] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);

  const fetchPodcastData = async () => {
    const res = await fetch("http://localhost:5000/podcast/getall");
    console.log(res.status);

    const data = await res.json();
    console.log(data);

    setPodcastList(data);
  }

  const fetchTrendingSeries = async () => {
    const res = await fetch("http://localhost:5000/series/get-trending");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setTrendingSeries(data);
  }

  useEffect(() => {
    fetchPodcastData();
    fetchTrendingSeries();
  }, [])

  const displayTrending = () => {
    return trendingSeries.map(series => (
      <div className='flex md:block space-x-3 md:space-x-0'>
        <div className='relative'>
          <Link href={'/viewPodcast/'+series._id}>
            <div className='h-28 w-28 md:h-48 md:w-48 inline-block relative flex-shrink-0 rounded-lg'>
              <img 
              alt='Podcast | ' 
              loading='lazy' 
              decoding='async' 
              data-nimg='fill' 
              className='rounded-lg contain' 
              sizes='100vw' 
              srcSet='' />
            </div>
          </Link>
        </div>
        <Link href={'/viewPodcast/'+series._id}>
          <div className='mr-2 w-52 md:w-44 truncate !text-clip md:overflow-visible md:whitespace-normal md:mb-2 md:text-base font-semibold md:font-normal '>{series.name}</div>
          <div className='block md:hidden'>
            <div className='flex flex-wrap gap-1 items-center'>
              <div className='bg-[#228b22] rounded-full p-0.5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
              </div>
              <div className='font-semibold text-xs'>4.7</div>
              <div className='text-xs'>(66 Lakh+ listens)</div>
              <span className='bg-gray-700 rounded-full h-[6px] w-[6px]'></span>
              <div className='text-xs'>15 hr 10 min</div>
            </div>
            <div className='h-16 w-56 overflow-hidden text-gray-500 text-sm'>
              "Dhruv ko apni girlfriend Jasmine ko chhote gifts bhi dilane se pehle 100 baar sochna padta hai. Par ek din use pata chalta hai ki uski girlfried usi ki class ke bigde ameerzade 'Playboy Kartik' ke sath kai raat guzar chuki hai. Yahi nahi, Kartik ke sath mil kar Jasmine online stripping bhi kar chuki hai. Dhruv ko bada jhatka lagta hai. Par Dhruv ki zindagi usdin badal jaati hai jisdin use pata chalta hai ki wo ek billionnaire ka beta hai. Kya in paison se Dhruv le payega Jasmine ke dhokhe ka badla? Ya inhi paison se wo banayega ek nayi kahani?"
            </div>
          </div>
        </Link>
      </div>
    ))
  }


  return (
    <>

      <div className='flex overflow-x-scroll m-5 justify-between scrollbar-style'>
        <div className='relative mx-2 rounded-xl'>
          <a href=''>
            <div className='h-72 w-72  inline-block relative flex-shrink-0 rounded-lg'>
              <img alt='Rich Dad Poor Dad | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/06c81664f3114a7c9020f4a17be85bd4.jpeg' />
            </div>
          </a>
          <div className='my-2 text-sm flex justify-between items-end w-72'>
            <a className='self-center' href=''>
              <p className='px-2 font-sm font-medium'>The Kerala girl</p>
            </a>
            <button className='h-10 w-10 rounded-full bg-[#ab21c6] hover:bg-[#ab21c6] flex justify-center items-center flex-shrink-0' href=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>
            </button>
          </div>
        </div>

        <div className='relative mx-2 rounded-xl'>
          <a href=''>
            <div className='h-72 w-72  inline-block relative flex-shrink-0 rounded-lg'>
              <img alt='Rich Dad Poor Dad | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/12faae0f14ed4c83bb4d67cfe4d5f09b.png' />
            </div>
          </a>
          <div className='my-2 text-sm flex justify-between items-end w-72'>
            <a className='self-center' href=''>
              <p className='px-2 font-sm font-medium'>Shrimad Bhagwat Geeta</p>
            </a>
            <button className='h-10 w-10 rounded-full bg-[#ab21c6] hover:bg-[#ab21c6] flex justify-center items-center flex-shrink-0' href=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>
            </button>
          </div>
        </div>

        <div className='relative mx-2 rounded-xl'>
          <a href=''>
            <div className='h-72 w-72  inline-block relative flex-shrink-0 rounded-lg'>
              <img alt='Rich Dad Poor Dad | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/bd00aeeec68b4bd48ea5e10bb8549977.jpeg' />
            </div>
          </a>
          <div className='my-2 text-sm flex justify-between items-end w-72'>
            <a className='self-center' href=''>
              <p className='px-2 font-sm font-medium'>Child Killer</p>
            </a>
            <button className='h-10 w-10 rounded-full bg-[#ab21c6] hover:bg-[#ab21c6] flex justify-center items-center flex-shrink-0' href=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>
            </button>
          </div>
        </div>

        <div className='relative mx-2 rounded-xl'>
          <a href=''>
            <div className='h-72 w-72  inline-block relative flex-shrink-0 rounded-lg'>
              <img alt='Rich Dad Poor Dad | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/222a258d5e0f4121ab0ceaa5026982da.png' />
            </div>
          </a>
          <div className='my-2 text-sm flex justify-between items-end w-72'>
            <a className='self-center' href=''>
              <p className='px-2 font-sm font-medium'>Rich Dad Poor Dad</p>
            </a>
            <button className='h-10 w-10 rounded-full bg-[#ab21c6] hover:bg-[#ab21c6] flex justify-center items-center flex-shrink-0' href=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>
            </button>
          </div>
        </div>

        <div className='relative mx-2 rounded-xl'>
          <a href=''>
            <div className='h-72 w-72  inline-block relative flex-shrink-0 rounded-lg'>
              <img alt='Rich Dad Poor Dad | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:350/f:webp/q:100/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3a918e2cbd544ded91f365406ecb6145.png' />
            </div>
          </a>
          <div className='my-2 text-sm flex justify-between items-end w-72'>
            <a className='self-center' href=''>
              <p className='px-2 font-sm font-medium'>Secret Billionaire</p>
            </a>
            <button className='h-10 w-10 rounded-full bg-[#ab21c6] hover:bg-[#ab21c6] flex justify-center items-center flex-shrink-0' href=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 4v16l13 -8z" /></svg>
            </button>
          </div>
        </div>
      </div>



 {/* Top 10 in India */}
      <div>
        <div className='px-5'>
          <header className='flex justify-between md:justify-start items-center py-3'>
            <div className='flex'>
              <h2 className='text-base font-semibold md:truncate m1-1'>Top 10 in India</h2>
            </div>
          </header>
          <div className='flex overflow-x-scroll
                      !p-0 scrollbar-style space-x-4'>
            <div className='relative'>
              <a href=''>
                <div className='h-28 w-28 md:h-48 md:w-48 inline-block relative flex-shrink-0 rounded-lg'>
                  <img alt='Rich Dad Poor Dad | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png' />
                </div>
              </a>
              <div className='absolute bottom-[6px] block md:hidden'>
                <div className='text-6x1 font-bold text-white'>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>




{/* trending */}
      <div>
        <div className='px-5'>
          <Link href='/show/trending'>
            <header className='flex justify-between md:justify-start items-center py-3'>
              <div className='flex'>
                <div className='block md:hidden mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                </div>
                <h2 className='text-base font-semibold md:truncate m1-1'>Trending</h2>
              </div>
              <div className='block flex md:hidden'>
                <div className='flex'>
                  <span className='mr-1'>See all</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='text-blue-400 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
            </header>
          </Link>
          <div className='flex flex-wrap md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style'>
            {
              displayTrending()
            }
          </div>
        </div>
      </div>





{/* motivational */}
      <div>
        <div className='px-5'>
          <Link href='/show/motivational'>
            <header className='flex justify-between md:justify-start items-center py-3'>
              <div className='flex'>
                <div className='block md:hidden mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                </div>
                <h2 className='text-base font-semibold md:truncate m1-1'>Best in Motivation</h2>
              </div>
              <div className='block flex md:hidden'>
                <div className='flex'>
                  <span className='mr-1'>See all</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='text-blue-400 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
            </header>
          </Link>
          <div className='flex flex-wrap md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style'>
            <div className='flex md:block space-x-3 md:space-x-0'>
              <div className='relative'>
                <a href=''>
                  <div className='h-28 w-28 md:h-48 md:w-48 inline-block relative flex-shrink-0 rounded-lg'>
                    <img alt='Secret Billionaire | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/99bab09ffcd64e1386819813e37cbe20.png' />
                  </div>
                </a>
              </div>
              <a href=''>
                <div className='mr-2 w-52 md:w-44 truncate !text-clip md:overflow-visible md:whitespace-normal md:mb-2 md:text-base font-semibold md:font-normal '>Empower Your Journey</div>
                <div className='block md:hidden'>
                  <div className='flex flex-wrap gap-1 items-center'>
                    <div className='bg-[#228b22] rounded-full p-0.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </div>
                    <div className='font-semibold text-xs'>4.9</div>
                    <div className='text-xs'>(16 K+ listens)</div>
                    <span className='bg-gray-700 rounded-full h-[6px] w-[6px]'></span>
                    <div className='text-xs'>1 hr 40 min</div>
                  </div>
                  <div className='h-16 w-56 overflow-hidden text-gray-500 text-sm'>
                    "Kya aap apni destiny khud shape karna chahte hain? Agar haan, Toh abhi is book ka explanation suniye. Kyunki Ismein author James Allen ne batayein hain aise secrets jo aapke thougts ko badal denge aur dikhaayenge raste apne dreams tak pahunchne ke. Isiliye apni inner power ko unlock karo aur ban jao apni life ke master."
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>



{/* romance
 */}
      <div>
        <div className='px-5'>
          <Link href='/show/Romance'>
            <header className='flex justify-between md:justify-start items-center py-3'>
              <div className='flex'>
                <div className='block md:hidden mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </div>
                <h2 className='text-base font-semibold md:truncate m1-1'>Best in Romance</h2>
              </div>
              <div className='block flex md:hidden'>
                <div className='flex'>
                  <span className='mr-1'>See all</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='text-blue-400 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
            </header>
          </Link>
          <div className='flex flex-wrap md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style'>
            <div className='flex md:block space-x-3 md:space-x-0'>
              <div className='relative'>
                <a href=''>
                  <div className='h-28 w-28 md:h-48 md:w-48 inline-block relative flex-shrink-0 rounded-lg'>
                    <img alt='Secret Billionaire | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/352101ae4a58462da340d55ffc8c31c3.png' />
                  </div>
                </a>
              </div>
              <a href=''>
                <div className='mr-2 w-52 md:w-44 truncate !text-clip md:overflow-visible md:whitespace-normal md:mb-2 md:text-base font-semibold md:font-normal '>The Unwanted Bride</div>
                <div className='block md:hidden'>
                  <div className='flex flex-wrap gap-1 items-center'>
                    <div className='bg-[#228b22] rounded-full p-0.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </div>
                    <div className='font-semibold text-xs'>4.8</div>
                    <div className='text-xs'>(45 K+ listens)</div>
                    <span className='bg-gray-700 rounded-full h-[6px] w-[6px]'></span>
                    <div className='text-xs'>1 hr 5 min</div>
                  </div>
                  <div className='h-16 w-56 overflow-hidden text-gray-500 text-sm'>
                    "Coma se jaag kar Prisha khud ko Rajasthan ke ek gaanv ke parivar ke beech paati hai. Uska chehra jyon ka tyon hai lekin sab ushe yahan unke parivar ki Nandini maan rahe hain. Asal dikkat tab aati hai jab uski shaadi zabardasti ek criminal se kar di jaati hai... Aakhir kya karegi Prisha? Kya hamesha ushe rahna hoga Nandini ban kar or vo vaapas laut paayegi apni zindgi me?"
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>







{/* religion
 */}
      <div>
        <div className='px-5'>
          <Link href='/show/religion'>
            <header className='flex justify-between md:justify-start items-center py-3'>
              <div className='flex'>
                <div className='block md:hidden mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                </div>
                <h2 className='text-base font-semibold md:truncate m1-1'>Best in Religion</h2>
              </div>
              <div className='block flex md:hidden'>
                <div className='flex'>
                  <span className='mr-1'>See all</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='text-blue-400 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
            </header>
          </Link>
          <div className='flex flex-wrap md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style'>
            <div className='flex md:block space-x-3 md:space-x-0'>
              <div className='relative'>
                <a href=''>
                  <div className='h-28 w-28 md:h-48 md:w-48 inline-block relative flex-shrink-0 rounded-lg'>
                    <img alt='Secret Billionaire | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/3a4cd3d180a4435794ef467428e3f848.png' />
                  </div>
                </a>
              </div>
              <a href=''>
                <div className='mr-2 w-52 md:w-44 truncate !text-clip md:overflow-visible md:whitespace-normal md:mb-2 md:text-base font-semibold md:font-normal '>Shri Ram</div>
                <div className='block md:hidden'>
                  <div className='flex flex-wrap gap-1 items-center'>
                    <div className='bg-[#228b22] rounded-full p-0.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </div>
                    <div className='font-semibold text-xs'>4.8</div>
                    <div className='text-xs'>(2.5 Lakh+ listens)</div>
                    <span className='bg-gray-700 rounded-full h-[6px] w-[6px]'></span>
                    <div className='text-xs'>1 hr 45 min</div>
                  </div>
                  <div className='h-16 w-56 overflow-hidden text-gray-500 text-sm'>
                    "Tretayug mein sampann hui ramayan aaj kalyug mein hindu dharma ki neev hai. Shri Ram, Laxman aur mata Sita ke vanvaas ki kahani bhale hi sab log jaante ho lekin ramayan ke kayi patra aur vanvaas ke dauran ghatne wali kayi ghatnaaon se hum aaj bhi vanchhit hain. Is audiobook mein aap shri ram ke jeevan aur ramayan ki sampoorna katha ko jaan payenge aur shri ram se jude har patra aur unki kahani ko bhi samajh sakenge. Chaliye shuru karte hain maryada purushottamshri ram ki sampoorna katha."
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='px-5'>
          <Link href='/show/horror'>
            <header className='flex justify-between md:justify-start items-center py-3'>
              <div className='flex'>
                <div className='block md:hidden mt-0.5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                </div>
                <h2 className='text-base font-semibold md:truncate m1-1'>Best in Horror</h2>
              </div>
              <div className='block flex md:hidden'>
                <div className='flex'>
                  <span className='mr-1'>See all</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='text-blue-400 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                </div>
              </div>
            </header>
          </Link>
          <div className='flex flex-wrap md:flex-nowrap md:overflow-x-scroll w-full md:space-x-4 space-y-3 md:space-y-0 scrollbar-style'>
            <div className='flex md:block space-x-3 md:space-x-0'>
              <div className='relative'>
                <a href=''>
                  <div className='h-28 w-28 md:h-48 md:w-48 inline-block relative flex-shrink-0 rounded-lg'>
                    <img alt='Secret Billionaire | ' loading='lazy' decoding='async' data-nimg='fill' className='rounded-lg contain' sizes='100vw' srcSet='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3f783e04873245aa8767cf733893b9c9.png' />
                  </div>
                </a>
              </div>
              <a href=''>
                <div className='mr-2 w-52 md:w-44 truncate !text-clip md:overflow-visible md:whitespace-normal md:mb-2 md:text-base font-semibold md:font-normal '>13 Khoon Maaf</div>
                <div className='block md:hidden'>
                  <div className='flex flex-wrap gap-1 items-center'>
                    <div className='bg-[#228b22] rounded-full p-0.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </div>
                    <div className='font-semibold text-xs'>5.0</div>
                    <div className='text-xs'>(96 K+ listens)</div>
                    <span className='bg-gray-700 rounded-full h-[6px] w-[6px]'></span>
                    <div className='text-xs'>4 hr 5 min</div>
                  </div>
                  <div className='h-16 w-56 overflow-hidden text-gray-500 text-sm'>
                    "Goa me bachelor party banane ke baad hua Yug ka accident. Jahan Nark me pahunchne ke baad uski mulakat hui Demon Shaswat se. Yug ki aatma us demon ke kaid me thi jise wapas paane ke liye Yug ne kia us demon se apni rooh ka sauda. Ek aisa sauda jisme apni aatma ke badle Demon ko 13 aatmayein deni thi. Matlab 13 khoon. Kya Yug, demon ko 13 aatmayein de payega? Kaise karega wo us demon se apni aatma hasil? Janne ke liye sunein 13 Khoon Maaf. India's premier 3D horror audio show. "
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>



      


    </>
  )
}

export default browse_podcast;