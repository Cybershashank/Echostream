import React from 'react'

const browse_artist = () => {
  return (
    <>
    <>
  <div className="max-h-screen bg-gray-100 flex justify-center items-center">
    <div className="container mx-auto bg-indigo-500 rounded-lg p-8">
      <form>
        <h1 className="text-center font-bold text-white text-4xl">
          Find the favourite Artist here
          
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search here..."
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              
              <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                Search
              </button>
            </div>
          </div>
        </h1>
      </form>
    </div>
  </div>
</>

    </>
  )
}

export default browse_artist;