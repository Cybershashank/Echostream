import React from 'react'

const manage_feedback = () => {
  return (
    <>
    
    <div className="container mx-auto py-6">
    <h1 className="text-center text-3xl font-bold mb-6">Feedback Management</h1>
    {/* Feedback List */}
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Feedback List</h2>
        {/* Feedback Item */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div>
            <p className="text-lg font-semibold">Himanshu</p>
            <p className="text-gray-600">User Name - April 17, 2024</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View
            </button>
          </div>
        </div>
        {/* End Feedback Item */}
        {/* Add more feedback items here */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div>
            <p className="text-lg font-semibold">shashank</p>
            <p className="text-gray-600">User Name - April 17, 2024</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div>
            <p className="text-lg font-semibold">Jaidev</p>
            <p className="text-gray-600">User Name - April 17, 2024</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div>
            <p className="text-lg font-semibold">Ram Saran</p>
            <p className="text-gray-600">User Name - April 17, 2024</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* End Feedback List */}
  </div>
    
    </>
  )
}

export default manage_feedback;