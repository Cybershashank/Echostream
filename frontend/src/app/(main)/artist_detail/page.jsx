'use client';
import React from 'react'
import Link from 'next/link';


const artist_detail = () => {

  const episodes = [
    { id: 1, title: 'Series 1', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png', description: 'Chanakya Niti' },
    { id: 2, title: 'Series 2', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fc78ad106ab4edcbb381fdf2d7032d2.jpeg', description: 'Zindagi Apne Liye Jiye Dusro Ke Liye Nahi' },
    { id: 3, title: 'Series 3', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1af40f46ab054de9bdf9e6ee932c3577.jpg', description: 'Slice of Life' },
    { id: 4, title: 'Series 4', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/f3e4b2eddeb84bff8eab839b4c4b588e.png', description: 'Think Like a Monk' },
    { id: 5, title: 'Series 5', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fbf1a3423274426a718ef0fa91cbf85.jpeg', description: 'Real Life Baazigar' },
    { id: 6, title: 'Series 6', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/2b563e6fa6df48248e7fad454d0b0cbd.png', description: 'Natin Gadkari- Expressway Man of India' },
    { id: 7, title: 'Series 7', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/25de0706d4df426a9b8c1f54f0aec66d.png', description: 'Power of Awareness' },
    { id: 8, title: 'Series 8', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/65d456eda7f645eaae2d870406194c88.png', description: 'THe Power of Influence' },
    { id: 9, title: 'Series 9', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/a460f6b6c37348e288d5be916684a9b3.png', description: 'Unlock your Life with inner Greatness' },
    { id: 10, title: 'Series 10', thumbnail: 'https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/917f376cdf9f4c96a65b74e5e4d6176a.png', description: 'Swami Vivekanand' },
  ];

  return (
    <>


      <div className="bg-[#c2abc5] min-h-screen">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://pagedone.io/asset/uploads/1705471668.png" // Replace with actual image URL
                  alt="Artist"
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h1 className="text-3xl font-bold mb-2 text-center">Gaurav</h1>
              <p className="text-gray-600 text-center">Category: Educational and Motivational</p>

              <button className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                  
                  <span className="px-2 font-semibold text-base leading-7 text-white text-center">
                    Follow
                  </span>
                </button>

              <div className="flex items-center justify-center gap-5">

                {/*  Add your social media links here */}
                <Link
                  href=""
                  className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700"
                 >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1115_412)">
                      <path
                        className="fill-blue-400 transition-all duration-500 group-hover:fill-white"
                        d="M20 10.2391C20 9.56523 19.9333 8.86958 19.8222 8.21741H10.2V12.0652H15.7111C15.4889 13.3044 14.7556 14.3913 13.6667 15.087L16.9556 17.587C18.8889 15.8261 20 13.2609 20 10.2391Z"
                        fill=""
                      />
                      <path
                        className="fill-green-400 transition-all duration-500 group-hover:fill-white"
                        d="M10.2 19.9783C12.9556 19.9783 15.2667 19.087 16.9556 17.5652L13.6667 15.087C12.7556 15.6957 11.5778 16.0435 10.2 16.0435C7.53337 16.0435 5.28893 14.2826 4.46671 11.9348L1.08893 14.4783C2.82226 17.8479 6.33337 19.9783 10.2 19.9783Z"
                        fill="#34A353"
                      />
                      <path
                        className="fill-yellow-400 transition-all duration-500 group-hover:fill-white"
                        d="M4.46673 11.913C4.0445 10.6739 4.0445 9.32608 4.46673 8.08695L1.08895 5.52173C-0.355496 8.34782 -0.355496 11.6739 1.08895 14.4783L4.46673 11.913Z"
                        fill="#F6B704"
                      />
                      <path
                        className="fill-red-400 transition-all duration-500 group-hover:fill-white"
                        d="M10.2 3.97827C11.6445 3.95653 13.0667 4.5 14.1112 5.47827L17.0223 2.6087C15.1778 0.913046 12.7334 2.58834e-06 10.2 0.0217417C6.33337 0.0217417 2.82226 2.15218 1.08893 5.52174L4.46671 8.08696C5.28893 5.7174 7.53337 3.97827 10.2 3.97827Z"
                        fill="#E54335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1115_412">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>



                {/*  Add your social media links here */}
                <Link
                  href=""
                  className="p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1115_52)">
                      <path
                        className="fill-indigo-600 transition-all duration-500 group-hover:fill-white"
                        d="M10.0001 20C15.523 20 20.0001 15.5228 20.0001 10C20.0001 4.47715 15.523 0 10.0001 0C4.47727 0 0.00012207 4.47715 0.00012207 10C0.00012207 15.5228 4.47727 20 10.0001 20Z"
                        fill=""
                      />
                      <path
                        className="fill-white transition-all duration-500 group-hover:fill-indigo-700"
                        d="M13.2516 3.06946H11.0364C9.72179 3.06946 8.25958 3.62236 8.25958 5.52793C8.266 6.1919 8.25958 6.82779 8.25958 7.54345H6.73877V9.96352H8.30665V16.9305H11.1877V9.91754H13.0893L13.2613 7.53666H11.1381C11.1381 7.53666 11.1428 6.47754 11.1381 6.16997C11.1381 5.41693 11.9216 5.46005 11.9688 5.46005C12.3416 5.46005 13.0666 5.46114 13.2527 5.46005V3.06946H13.2516V3.06946Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1115_52">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>


                {/*  Add your social media links here */}
                 <Link
                  href=""
                  className="p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700"
                >
                  <svg
                    className="stroke-red-600 transition-all duration-500 group-hover:stroke-white"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1667 5.83333V5.875M9.16673 17.5H10.8334C13.9761 17.5 15.5474 17.5 16.5237 16.5237C17.5001 15.5474 17.5001 13.976 17.5001 10.8333V9.16667C17.5001 6.02397 17.5001 4.45262 16.5237 3.47631C15.5474 2.5 13.9761 2.5 10.8334 2.5H9.16673C6.02403 2.5 4.45268 2.5 3.47637 3.47631C2.50006 4.45262 2.50006 6.02397 2.50006 9.16667V10.8333C2.50006 13.976 2.50006 15.5474 3.47637 16.5237C4.45268 17.5 6.02403 17.5 9.16673 17.5ZM13.3334 10C13.3334 11.8409 11.841 13.3333 10.0001 13.3333C8.15911 13.3333 6.66673 11.8409 6.66673 10C6.66673 8.15905 8.15911 6.66667 10.0001 6.66667C11.841 6.66667 13.3334 8.15905 13.3334 10Z"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>


                {/*  Add your social media links here */}
                <Link
                  href=""
                  className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-red-600 transition-all duration-500 group-hover:fill-white"
                      d="M1.40288 6.21319C1.48321 4.97646 2.47753 4.00723 3.71535 3.9459C5.5078 3.8571 8.06973 3.75 10.0001 3.75C11.9304 3.75 14.4923 3.8571 16.2848 3.9459C17.5226 4.00723 18.5169 4.97646 18.5972 6.21319C18.6742 7.39808 18.7501 8.85604 18.7501 10C18.7501 11.144 18.6742 12.6019 18.5972 13.7868C18.5169 15.0235 17.5226 15.9928 16.2848 16.0541C14.4923 16.1429 11.9304 16.25 10.0001 16.25C8.06973 16.25 5.5078 16.1429 3.71535 16.0541C2.47753 15.9928 1.48321 15.0235 1.40288 13.7868C1.32591 12.6019 1.25006 11.144 1.25006 10C1.25006 8.85604 1.32591 7.39808 1.40288 6.21319Z"
                      fill="#FC0D1B"
                    />
                    <path
                      className="fill-white transition-all duration-500 group-hover:fill-indigo-700"
                      d="M8.12506 7.5V12.5L13.1251 10L8.12506 7.5Z"
                      fill="white"
                    />
                  </svg>
                </Link>


                {/*  Add your social media links here */}
                <Link
                  href=""
                  className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700"
                 >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="transition-all duration-500 group-hover:fill-white"
                      cx="10.0001"
                      cy={10}
                      r="8.75"
                      fill="url(#paint0_linear_1115_481)"
                    />
                    <path
                      className="transition-all duration-500 group-hover:fill-indigo-700"
                      d="M14.3667 6.38049C14.4446 5.87707 13.9659 5.47972 13.5183 5.67625L4.60307 9.59053C4.28208 9.73146 4.30556 10.2177 4.63848 10.3237L6.47703 10.9092C6.82792 11.0209 7.20789 10.9631 7.5143 10.7514L11.6594 7.88767C11.7844 7.80131 11.9207 7.97904 11.8139 8.08914L8.83013 11.1654C8.54069 11.4638 8.59814 11.9695 8.94629 12.1878L12.2869 14.2827C12.6616 14.5176 13.1436 14.2816 13.2137 13.8288L14.3667 6.38049Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1115_481"
                        x1="10.0001"
                        y1="1.25"
                        x2="10.0001"
                        y2="18.75"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#37BBFE" />
                        <stop offset={1} stopColor="#007DBB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </Link>


              </div>

            </div>











            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-2">Bio</h2>
              <p className="text-gray-700">
                As we live, our hearts turn colder. Cause pain is what we go through
                as we become older. We get insulted by others, lose trust for those
                others. We get back stabbed by friends. It becomes harder for us to
                give others a hand. We get our heart broken by people we love, even
                that we give them all...
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-2 gap-4 px-2 w-full">
                <div className="flex flex-col items-start justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Education</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    BBD University
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    English, Hindi
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Role</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Artist
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Work History</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    English, Hindi
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Organization</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Simmmple Podcast
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Birthday</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    08 Jan 2001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Podcast Series</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {episodes.map(episode => (
              <div key={episode.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full aspect-w-1 aspect-h-1">
                  <img src={episode.thumbnail} alt={episode.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{episode.title}</h2>
                  <p className="text-gray-700">{episode.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default artist_detail;