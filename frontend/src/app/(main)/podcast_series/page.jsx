import React from 'react'

const podcast_series = () => {
  return (
    
    
    <>
  <>
  <div className="flex justify-center">
    <img src='https://m.media-amazon.com/images/M/MV5BYWI5YWQ3NmMtZGRmOC00MjIwLThiZjAtMWJlYTdmMjY2NGZmXkEyXkFqcGdeQXVyOTg3NTQwMTU@._V1_QL75_UY133_CR8,0,90,133_.jpg'/>

  </div>
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center mb-8">Tathastu</h1>
    {/* Podcast Episodes List */}
    <ul className="grid grid-cols-1 gap-4">
      {/* Episode 1 */}
      <li className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            Episode 1: Tathastu 
          </h2>
          <p className="text-gray-600 mb-4">
            Description of Episode 1 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Listen Now
          </a>
        </div>
      </li>
      {/* Episode 2 */}
      <li className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            Episode 2: Tathastu
          </h2>
          <p className="text-gray-600 mb-4">
            Description of Episode 2 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Listen Now
          </a>
        </div>
      </li>
      {/* Repeat for more episodes */}
      <li className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            Episode 3: Tathastu
          </h2>
          <p className="text-gray-600 mb-4">
            Description of Episode 3 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Listen Now
          </a>
        </div>
      </li>
    </ul>
    {/* End Podcast Episodes List */}
    <li className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            Episode 4: Tathastu
          </h2>
          <p className="text-gray-600 mb-4">
            Description of Episode 2 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Listen Now
          </a>
        </div>
      </li>
  </div>
  
  
</>

</>

  )
}

export default podcast_series;