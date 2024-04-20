import React from 'react'

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


      <div className="bg-gray-100 min-h-screen">
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
              <p className="text-gray-600 text-center">Genre: Fiction</p>
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