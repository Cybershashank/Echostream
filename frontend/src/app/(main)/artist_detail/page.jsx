import React from 'react'

const artist_detail = () => {

  const episodes = [
    { id: 1, title: 'Episode 1', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png', description: 'Description of episode 1' },
    { id: 2, title: 'Episode 2', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fc78ad106ab4edcbb381fdf2d7032d2.jpeg', description: 'Description of episode 2' },
    { id: 3, title: 'Episode 3', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1af40f46ab054de9bdf9e6ee932c3577.jpg', description: 'Description of episode 3' },
    { id: 4, title: 'Episode 4', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/f3e4b2eddeb84bff8eab839b4c4b588e.png', description: 'Description of episode 4' },
    { id: 5, title: 'Episode 5', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fbf1a3423274426a718ef0fa91cbf85.jpeg', description: 'Description of episode 5' },
    { id: 6, title: 'Episode 6', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/2b563e6fa6df48248e7fad454d0b0cbd.png', description: 'Description of episode 6' },
    { id: 7, title: 'Episode 7', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/25de0706d4df426a9b8c1f54f0aec66d.png', description: 'Description of episode 7' },
    { id: 8, title: 'Episode 8', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/65d456eda7f645eaae2d870406194c88.png', description: 'Description of episode 8' },
    { id: 9, title: 'Episode 9', thumbnail: 'https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/a460f6b6c37348e288d5be916684a9b3.png', description: 'Description of episode 9' },
    { id: 10, title: 'Episode 10', thumbnail: 'https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/917f376cdf9f4c96a65b74e5e4d6176a.png', description: 'Description of episode 10' },
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
              <h1 className="text-3xl font-bold mb-2 text-center">James Smith</h1>
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
                    Stanford University
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Languages</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    English, Spanish, Italian
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Department</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Product Design
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-lg bg-white bg-clip-border px-3 py-4 shadow-md shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Work History</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    English, Spanish, Italian
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
                    20 July 1986
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
      {/*
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Artist Name</h1>
              <p className="text-gray-600">Genre: Pop, Rock</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Bio</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                scelerisque dolor et diam vehicula, ut tempus lorem facilisis.
                Nullam ac nunc at eros aliquet fermentum sit amet sed felis.
                Phasellus vel semper ipsum. Nullam convallis aliquet leo, id
                vestibulum magna lacinia nec. Curabitur ultrices sagittis turpis,
                at lobortis mi pellentesque vel. Sed quis luctus nisi, a aliquet
                magna. Proin consequat magna eget risus vestibulum, eget
                tincidunt neque mattis.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Albums</h2>
              <ul>
                <li className="text-gray-700">Album 1</li>
                <li className="text-gray-700">Album 2</li>
                <li className="text-gray-700">Album 3</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Podcasts & Interviews</h2>
              <ul>
                <li className="text-gray-700">
                  Podcast 1 - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </li>
                <li className="text-gray-700">
                  Podcast 2 - Sed quis luctus nisi, a aliquet magna.
                </li>
                <li className="text-gray-700">
                  Podcast 3 - Nullam ac nunc at eros aliquet fermentum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
*/}
    </>
  )
}

export default artist_detail;