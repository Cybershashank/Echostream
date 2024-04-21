"user client";
import React from 'react'
import { useState, useEffect } from "react";
const Manage = () => {
  const [Data, setData] =
}


const manageartist = () => {



  return (
    <>
    <>
  
  <div className="container mx-auto p-8">
    <h1 className="text-2xl font-bold mb-4">Manage Artists</h1>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search Artists..."
        className="w-full p-2 rounded border"
      />
    </div>
   
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-left py-2 px-4">Genre</th>
            <th className="text-left py-2 px-4">Total Tracks</th>
            <th className="text-left py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example artist row */}
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">Pop</td>
            <td className="border px-4 py-2">25</td>
            <td className="border px-4 py-2">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Edit
              </a>
              <span className="text-gray-400 mx-2">|</span>
              <a href="#" className="text-red-500 hover:text-red-700">
                Delete
              </a>
            </td>
          </tr>
          {/* Example artist row */}
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">Jazz</td>
            <td className="border px-4 py-2">15</td>
            <td className="border px-4 py-2">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Edit
              </a>
              <span className="text-gray-400 mx-2">|</span>
              <a href="#" className="text-red-500 hover:text-red-700">
                Delete
              </a>
            </td>
          </tr>
          {/* More artist rows would go here */}
        </tbody>
      </table>
    </div>
  </div>
</>

    
    </>
  )
}

export default manageartist