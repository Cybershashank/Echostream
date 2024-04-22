import React from 'react'

const artistdashboard = () => {
  return (
  <div className="container mx-auto ms-16 py-8">
    <h1 className="text-3xl font-semibold mb-8">
      Welcome to Your Artist Dashboard
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section - Upload Audio */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Upload New Audio</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="audioTitle"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="audioTitle"
              name="audioTitle"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="audioFile"
              className="block text-gray-700 font-semibold mb-2"
            >
              Select Audio File:
            </label>
            <input
              type="file"
              id="audioFile"
              name="audioFile"
              accept="audio/*"
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>
      {/* Right Section - Your Audios */}
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Uploaded Audios</h2>
        <ul>
          <li className="flex items-center justify-between mb-4">
            <span className="text-gray-800">Audio Title 1</span>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </li>
          <li className="flex items-center justify-between mb-4">
            <span className="text-gray-800">Audio Title 2</span>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </li>
          {/* Add more audio items */}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default artistdashboard