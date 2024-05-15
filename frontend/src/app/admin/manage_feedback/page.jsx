"use client";
import React, { useEffect, useState } from 'react'

const manage_feedback = () => {

  const [Data, setData] = useState([]);

  //user fetch function
  const fetchfeedback = async () => {
    const res = await
      fetch('http://localhost:5000/feedback/getall')

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  }

  useEffect(() => {
    fetchfeedback();
  }, [])

  //Delete func
  const deleteFuction = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/feedback/delete/' + id, { method: 'DELETE' })
    if (res.status === 200) {
      fetchfeedback();
    }
  }
  const displayfeedback = () => {
    return Data.map((obj) => (
  <tr>
  <td className="border px-4 py-2">{obj.name}</td>
  <td className="border px-4 py-2">{obj.email}</td>
  <td className="border px-4 py-2">{obj.message}</td>
  <td className="border px-4 py-2">{obj.rating}</td>
  
  <td className="border px-4 py-2">
  
    <button  onClick={() => {deleteFuction(obj._id)}} className="text-red-500 hover:text-red-700">
      Delete
    </button>
  </td>
</tr>
    ))
  }
  return (
    <>
    <div className="container mx-auto p-8">
    <h1 className="text-2xl font-bold mb-4">Manage Feedback</h1>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search Feedback..."
        className="w-full p-2 rounded border"
      />
    </div>
   
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-left py-2 px-4">Email</th>
            <th className="text-left py-2 px-4">message</th>
            <th className="text-left py-2 px-4">rating</th>
          </tr>
        </thead>
        <tbody>
         {displayfeedback()}
        </tbody>
      </table>
    </div>
  </div>
   
    
    </>
  )
}

export default manage_feedback;