'use client';
import React, { useEffect, useState } from 'react'
import Navbar from './(main)/navbar'
import Link from 'next/link';

import classes from './page.module.css';


const Home = () => {

  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = 100; // Adjust this value to define the scroll position

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;
    setScrolled(currentScrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div>
        <div className='bg-[#191B1F]'>
          <div className='md:sticky flex z-51 top-0 md:h-28 h-20 transition-all duration-500'>
            <nav className={`${scrolled ? 'bg-[#191b1f]' : 'bg-transparent'} z-50 hidden w-full md:flex items-center text-white justify-between py-8 px-16 z-50 relative`}>
              <div className='flex-shrink-0 flex-1'>
                <Link
                  href="http://localhost:3000/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png"
                    className="h-8"
                    alt="Podcast Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Echostream
                  </span>
                </Link>
              </div>
              <div className='flex items-center space-x-12'>
                <div className>
                  <div className='hover:bg-[#3E434C] hover:scale-110 transition ease-in-out group relative cursor-pointer rounded-2x1'>
                    <div className='flex items-center px-3 py-2'>
                      <div className='menu-hover text-white text-lg font-normal'>Genres</div>
                      <span className='m1-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                      </span>
                    </div>
                    <div className='pt-4 invisible absolute flex shadow-xl group-hover:visible w-full rounded-sm'>
                      <div className='bg-zinc-800 text-white rounded-sm w-auto'>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3e434c]' href='/show/religion'>
                          <div className='text-white-text-lg font-normal capitalize'>Religion</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3e434c]' href='/show/trending'>
                          <div className='text-white-text-lg font-normal capitalize'>Trending</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href='/show/Romance'>
                          <div className='text-white-text-lg font-normal capitalize'>Romance</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href='/show/motivational'>
                          <div className='text-white-text-lg font-normal capitalize'>Motivational</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href='/show/horror'>
                          <div className='text-white-text-lg font-normal capitalize'>Horror</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className>
                  <div className='hover:bg-[#3E434C] hover:scale-110 transition ease-in-out group relative cursor-pointer rounded-2x1'>
                    <div className='flex items-center px-3 py-2'>
                      <div className='menu-hover text-white text-lg font-normal'>Language</div>
                      <span className='m1-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                      </span>
                    </div>
                    <div className='pt-4 invisible absolute flex shadow-xl group-hover:visible w-full rounded-sm'>
                      <div className='bg-zinc-800 text-white rounded-sm w-auto'>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>English</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>Hindi</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>Tamil</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>telgu</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>bengali</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>Malayalam</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>Kannada</div>
                        </a>
                        <a className='py-4 px-5 w-full block whitespace-nowrap hover:bg-[#3E434C]' href=''>
                          <div className='text-white-text-lg font-normal capitalize'>Marathi</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href='/about'>
                  <div className='text-white text-lg font-normal hover:scale-110 hover:bg-[#3E434C] transition ease-in-out px-3 py-2 rounded-xl'>About</div>
                </Link>
              </div>
              <div className='flex items-center space-x-6 flex-1 justify-end'>
                <Link className='w-[156px] h-[50px] flex justify-center items-center text-white text-base font-bold rounded-[10px] border border-white' target='_blank' href='/login' rel='noreferrer'>Login</Link>
                <Link className='inline-flex justify-center items-center bg-purple-500 rounded-md text-white text-base font-bold px-5 py-3' href='/browse_podcast'>
                  <div className='font-bold text-xs md:text-lg'>Explore</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </Link>
              </div>

            </nav>
          </div>


          <div style={{ backgroundImage: 'url(https://www.finding-rhythms.co.uk/wp-content/uploads/2021/03/finding-rhythms-hero-podcast-b-and-w-1600x900.jpg)' }} className='bg-cover'>

            <div className="flex h-screen justify-center items-center dark:bg-slate-800">
              <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
                <div className="text-center ">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">


                    <div className='text-center lg:space-x-4 space-x-2 my-12'>
                      <span className='text-white font bold'>Create</span>
                      <span className='text-purple-500 font-bold'>amazing</span>
                      <div className='lg:my-5 my'></div>
                      <span className='text-purple-500 font-bold'>podcast</span>
                      <span className='text-white font bold'>show</span>

                    </div>

                  </h1>
                  <h1 className='text-lg lg:text-2x1'>
                    <div className="text-center text-[#FFFFFF] font-normal">
                      Weekly conversations with forward thinkers at the
                      <br />
                      forefront of this Podcast industry.
                    </div>
                  </h1>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                    <div className="rounded-md shadow">
                      <Link
                        className="inline-flex justify-center items-center bg-purple-500 rounded-md text-white text-base font-bold px-5 py-3"
                        href="/browse_podcast"
                      >
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l14 0" />
                          <path d="M13 18l6 -6" />
                          <path d="M13 6l6 6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="w-full lg:px-24 pointer-events-none">
            <div className="bg-[#272A30] rounded-xl w-full lg:p-12 py-5">
              
                <h1 className='text-base text-sm '>
                  <div className='text-center mb-5 lg:mb-12 text-white'>
                    <div className='text-4xl font-normal'>
                      "Listen to Audiobooks in"
                    </div>
                    <div className='text-4xl font-bold mt-2'>
                      Multiple Languages
                    </div>
                  </div>
                </h1>
                <div className='flex justify-center flex-wrap gap-6'>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-xl flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-normal'>हि</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Hindi</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>Aa</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>English</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>த</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Tamil</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>తె</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Telugu</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>മ</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Malayalam</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>ಕನ್</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Kannada</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>বে</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Bangla</div>
                    </div>
                  </Link>
                  <Link className=' group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-lg flex justify-center items-center hover:bg-[#22C55E]' href='/browse_series'>
                    <div>
                      <div className='text-white text-x1 md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-bold'>मै</div>
                      <div className='text-white text-base md:text-xl font-normal md:mt-4 mt-2'>Marathi</div>
                    </div>
                  </Link>
                </div>
              
            </div>
          </div>






          <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                      Features
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      ECHOSTREAM
                    </p>

                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Easy to use.
                        </dt>
                        <dd className="inline">
                          The main Features is to provide user-friendly interface by using voice command.

                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          All in one Platform.
                        </dt>
                        <dd className="inline">
                          Our platform also provides inbuilt recording and publishing option for artist.

                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                            <path
                              fillRule="evenodd"
                              d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Diversity.
                        </dt>
                        <dd className="inline">
                          Making it more accessible, engaging, and impactful for diverse audiences.

                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <img
                  src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/6470607db5ddc9c102ef4a14_How-to-Start-a-Podcast-(1).jpeg"
                  alt="Product screenshot"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={2432}
                  height={1442}
                />
              </div>
            </div>
          </div>







          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
                <div className="w-full lg:w-1/2">
                  <img
                    src="https://st4.depositphotos.com/13193658/27297/i/450/depositphotos_272975200-stock-photo-cheerful-radio-host-gesturing-while.jpg"
                    alt="FAQ tailwind section"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="lg:max-w-xl">
                    <div className="mb-6 lg:mb-16">
                      <h6 className="text-lg text-center font-medium text-purple-600 mb-2 lg:text-left">
                        Frequently asked questions
                      </h6>
                      <h2 className="text-4xl text-center font-bold text-white leading-[3.25rem] mb-5 lg:text-left">
                        Looking for answers?
                      </h2>
                    </div>
                    <div className="accordion-group" data-accordion="default-accordion">
                      <div
                        className="accordion pb-8 border-b border-solid border-gray-200 active"
                        id="basic-heading-one-with-arrow-always-open"
                      >
                        <button
                          className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-white w-full transition duration-500 hover:text-purple-600 accordion-active:text-purple-600 accordion-active:font-medium always-open"
                          aria-controls="basic-collapse-one-with-arrow-always-open"
                        >
                          <h5>How to create an account?</h5>
                          <svg
                            className="text-white transition duration-500 group-hover:text-purple-600 accordion-active:text-purple-600 accordion-active:rotate-180"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          id="basic-collapse-one-with-arrow-always-open"
                          className="accordion-content w-full px-0 overflow-hidden pr-4 active"
                          style={{ maxHeight: 100 }}
                          aria-labelledby="basic-heading-one-with-arrow-always-open"
                        >
                          <p className="text-base font-normal text-white ">
                            To create an account, find the 'Sign up' or 'Create account'
                            button, fill out the registration form with your personal
                            information, and click 'Create account' or 'Sign up.' Verify
                            your email address if needed, and then log in to start using
                            the platform.
                          </p>
                        </div>
                      </div>
                      <div
                        className="accordion py-8 border-b border-solid border-gray-200 "
                        id="basic-heading-two-with-arrow-always-open"
                      >
                        <button
                          className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-white w-full transition duration-500 hover:text-purple-600 accordion-active:text-purple-600 accordion-active:font-medium"
                          aria-controls="basic-collapse-two-with-arrow-always-open"
                        >
                          <h5>Have any trust issue?</h5>
                          <svg
                            className="text-white transition duration-500 group-hover:text-purple-600 accordion-active:text-purple-600 accordion-active:rotate-180"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          id="basic-collapse-two-with-arrow-always-open"
                          className="accordion-content w-full px-0 overflow-hidden pr-4"
                          aria-labelledby="basic-heading-two-with-arrow-always-open"
                          style={{}}
                        >
                          <p className="text-base text-white font-normal">
                            Our focus on providing robust and user-friendly content
                            management capabilities ensures that you can manage your
                            content with confidence, and achieve your content marketing
                            goals with ease.
                          </p>
                        </div>
                      </div>
                      <div
                        className="accordion py-8 border-b border-solid border-gray-200"
                        id="basic-heading-three-with-arrow-always-open"
                      >
                        <button
                          className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-white w-full transition duration-500 hover:text-purple-600 accordion-active:font-medium accordion-active:text-purple-600"
                          aria-controls="basic-collapse-three-with-arrow-always-open"
                        >
                          <h5>How can I reset my password?</h5>
                          <svg
                            className="text-white transition duration-500 group-hover:text-purple-600 accordion-active:text-purple-600 accordion-active:rotate-180"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          id="basic-collapse-three-with-arrow-always-open"
                          className="accordion-content w-full px-0 overflow-hidden pr-4"
                          aria-labelledby="basic-heading-three-with-arrow-always-open"
                        >
                          <p className="text-base text-white font-normal">
                            Our focus on providing robust and user-friendly content
                            management capabilities ensures that you can manage your
                            content with confidence, and achieve your content marketing
                            goals with ease.
                          </p>
                        </div>
                      </div>
                      <div
                        className="accordion py-8 "
                        id="basic-heading-four-with-arrow-always-open"
                      >
                        <button
                          className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-white w-full transition duration-500 hover:text-purple-600 accordion-active:font-medium accordion-active:text-purple-600"
                          aria-controls="basic-collapse-four-with-arrow-always-open"
                        >
                          <h5>What is the payment process?</h5>
                          <svg
                            className="text-white transition duration-500 group-hover:text-purple-600 accordion-active:text-Purple accordion-active:rotate-180"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          id="basic-collapse-four-with-arrow-always-open"
                          className="accordion-content w-full px-0 overflow-hidden pr-4"
                          aria-labelledby="basic-heading-four-with-arrow-always-open"
                        >
                          <p className="text-base text-white font-normal">
                            Our focus on providing robust and user-friendly content
                            management capabilities ensures that you can manage your
                            content with confidence, and achieve your content marketing
                            goals with ease.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>







          <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Subscribe to our newsletter.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
                    velit quis. Duis tempor incididunt dolore.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required=""
                      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                    </div>
                    <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                      Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                      cupidatat duis commodo amet.
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                        />
                      </svg>
                    </div>
                    <dt className="mt-4 font-semibold text-white">No spam</dt>
                    <dd className="mt-2 leading-7 text-gray-400">
                      Officia excepteur ullamco ut sint duis proident non adipisicing.
                      Voluptate incididunt anim.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
              />
            </div>
          </div>



          <div className='lg:pt-[150px] pt-[50px]'>
            <div className='bg-[#272A30] rounded-lg md:flex justify-between lg:mx-24 mx-5'>
              <div className='text-white flex items-center justify-center w-full'>
                <h1 className='text-base text-sm md:text-4x1'>
                  <div className='caption relative text-white p-5'>
                    <span>Make Every Moment Count</span>
                    <div className='relative'>
                      "Listen While"
                      <div className='text-box absolute inline-block ml-1 md:ml-2'>
                        <div className='left-0 absolute font-bold inline-block text-brand-500'>Cooking</div>
                        <div className='left-0 absolute font-bold inline-block text-brand-500'>Commuting</div>
                        <div className='left-0 absolute font-bold inline-block text-brand-500'>Exrcising</div>
                        <div className='left-0 absolute font-bold inline-block text-brand-500'>Relaxing</div>
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
              <div className='md:w-[500px] w-full md:h-[300px] h-[178px] flex-shrink-0'>
                <div className='image-wrapper h-full w-full z-40'>
                  <div className='h-full w-full relative'>
                    <img alt='Echostream | Driving'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='h-full w-full false rounded-lg'
                      sizes='100vw'
                      style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bottom: 0, right: 0, color: 'transparent' }}
                      src='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_exersice.png'
                    />
                  </div>
                  {/* <div className='h-full w-full relative'>
                  <img alt='Echostream | Driving'
                    loading='lazy'
                    decoding='async'
                    data-nimg='fill'
                    className='h-full w-full false rounded-lg'
                    sizes='100vw'
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bottom: 0, right: 0, color: 'transparent' }}
                    src='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_cook.png'
                  />
                </div>
                <div className='h-full w-full relative'>
                  <img alt='Echostream | Driving'
                    loading='lazy'
                    decoding='async'
                    data-nimg='fill'
                    className='h-full w-full false rounded-lg'
                    sizes='100vw'
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bottom: 0, right: 0, color: 'transparent' }}
                    src='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/d_relax.png'
                  />
                </div>
                <div className='h-full w-full relative'>
                  <img alt='Echostream | Driving'
                    loading='lazy'
                    decoding='async'
                    data-nimg='fill'
                    className='h-full w-full false rounded-lg'
                    sizes='100vw'
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bottom: 0, right: 0, color: 'transparent' }}
                    src='https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/d_commute.png'
                  />
                </div> */}
                </div>
              </div>
            </div>
          </div>








          <div className='lg:pt-[100px] py-[100px]'>
            <div className='lg:px-24 px-5'>
              <div>
                <h1 className='text-base text-sm md:text-4x1'>
                  <div className='text-center text-dark mb-5 lg:mb-12'>
                    <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-center">
                      Reviews
                    </h2>
                  </div>
                </h1>
              </div>
            </div>



            {/* 1 */}
            <div className='flex overflow-x-scroll space-x-6'>
              <div className='p-3 space-x-4 md:space-x-0 flex md:block md:text-center relative flex-shrink-0 items-stretch w-full md:w-1/2 lg:w-1/3 rounded-lg border border-[#3E434C]'>
                <img
                  alt="Echostream | Drive, exercise, or sleep"
                  loading='lazy'
                  width="96"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  className="h-24 w-24 md:md-4 object rounded-lg m-auto"
                  backgroundColor="transparent"
                  src="https://pagedone.io/asset/uploads/1701928910.jpg"
                />
                <div className='space-y-2 md:space-y-4 w-full h-auto'>
                  <div className='text-white lg:text-x1 font-normal'>"Drive, exercise, or sleep"</div>
                  <div className='text-white lg:text-x1 font-normal'>"I listen to it while travelling because you can download and listen offline"</div>
                  <div className='text-white lg:text-x1 font-bold'>"Amit"</div>
                </div>
              </div>


              {/* 2 */}
              <div className='p-3 space-x-4 md:space-x-0 flex md:block md:text-center relative flex-shrink-0 items-stretch w-full md:w-1/2 lg:w-1/3 rounded-lg border border-[#3E434C]'>
                <img
                  alt="Echostream | Listen when feeling low"
                  loading='lazy'
                  width="96"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  className="h-24 w-24 md:md-4 object rounded-lg m-auto"
                  backgroundColor="transparent"
                  src="https://pagedone.io/asset/uploads/1701928898.jpg"
                />
                <div className='space-y-2 md:space-y-4 w-full h-auto'>
                  <div className='text-white lg:text-x1 font-normal'>"Listen when feeling low"</div>
                  <div className='text-white lg:text-x1 font-normal'>"Everyone should try this when feeling low!"</div>
                  <div className='text-white lg:text-x1 font-bold'>"Durga"</div>
                </div>
              </div>


              {/* 3 */}
              <div className='p-3 space-x-4 md:space-x-0 flex md:block md:text-center relative flex-shrink-0 items-stretch w-full md:w-1/2 lg:w-1/3 rounded-lg border border-[#3E434C]'>
                <img
                  alt="Echostream | Best companion for gym"
                  loading='lazy'
                  width="96"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  className="h-24 w-24 md:md-4 object rounded-lg m-auto"
                  backgroundColor="transparent"
                  src="https://pagedone.io/asset/uploads/1703590007.png"
                />
                <div className='space-y-2 md:space-y-4 w-full h-auto'>
                  <div className='text-white lg:text-x1 font-normal'>"Best companion for gym"</div>
                  <div className='text-white lg:text-x1 font-normal'>"I listen during gym sessions, walks, and other daily routines"</div>
                  <div className='text-white lg:text-x1 font-bold'>"Ritesh"</div>

                </div>
              </div>



              {/* 4 */}
              <div className='p-3 space-x-4 md:space-x-0 flex md:block md:text-center relative flex-shrink-0 items-stretch w-full md:w-1/2 lg:w-1/3 rounded-lg border border-[#3E434C]'>
                <img
                  alt="Echostream | Drive, exercise, or sleep"
                  loading='lazy'
                  width="96"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  className="h-24 w-24 md:md-4 object rounded-lg m-auto"
                  backgroundColor="transparent"
                  src="https://pagedone.io/asset/uploads/1696229969.png"
                />
                <div className='space-y-2 md:space-y-4 w-full h-auto'>
                  <div className='text-white lg:text-x1 font-normal'>"I listen while cooking"</div>
                  <div className='text-white lg:text-x1 font-normal'>"As housewife this is my best partner. I don't feel lonely in the kitchen anymore"</div>
                  <div className='text-white lg:text-x1 font-bold'>"Amita"</div>
                </div>
              </div>
              {/* 5 */}
              <div className='p-3 space-x-4 md:space-x-0 flex md:block md:text-center relative flex-shrink-0 items-stretch w-full md:w-1/2 lg:w-1/3 rounded-lg border border-[#3E434C]'>
                <img
                  alt="Echostream | Drive, exercise, or sleep"
                  loading='lazy'
                  width="96"
                  height="96"
                  decoding="async"
                  data-nimg="1"
                  className="h-24 w-24 md:md-4 object rounded-lg m-auto"
                  backgroundColor="transparent"

                  src="https://pagedone.io/asset/uploads/1696230027.png"
                />
                <div className='space-y-2 md:space-y-4 w-full h-auto'>
                  <div className='text-white lg:text-x1 font-normal'>"Good app to learn"</div>
                  <div className='text-white lg:text-x1 font-normal'>"Excellent explanation of books. You will learn a lot"</div>
                  <div className='text-white lg:text-x1 font-bold'>"Rajesh"</div>
                </div>
              </div>
            </div>
          </div>























          <footer className="bg-gray-800 text-white ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <a href="http://localhost:3000/" className="flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png"
                      className="h-8 me-3"
                      alt="podcast Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Echostream
                    </span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 className="mb-6 text-white font-semibold text-gray-900 uppercase dark:text-white">
                      Resources
                    </h2>
                    <ul className="text-white dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link
                          href="/about" className="hover:underline">
                          Echostream
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact" className="hover:underline">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-white font-semibold text-gray-900 uppercase dark:text-white">
                      Follow us
                    </h2>
                    <ul className="text-white dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link
                          href="#"
                          className="hover:underline "
                        >
                          Facebook
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:underline"
                        >
                          Instagram
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-6 text-white font-semibold text-gray-900 uppercase dark:text-white">
                      Legal
                    </h2>
                    <ul className="text-white dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link
                          href="/privacyPolicy" className="hover:underline">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/terms&conditions" className="hover:underline">
                          Terms &amp; Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-white text-gray-500 sm:text-center dark:text-gray-400">
                  © 2024{" "}
                  <Link
                    href="http://localhost:3000/" className="hover:underline">
                    Echostream™
                  </Link>
                  . All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <a
                    href="#"
                    className="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 17"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Dribbble account</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>


        </div>
      </div >




    </>


  )
}

export default Home;
