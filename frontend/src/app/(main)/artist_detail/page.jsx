import React from 'react'

const artist_detail = () => {
  return (
    <>

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

    </>
  )
}

export default artist_detail;