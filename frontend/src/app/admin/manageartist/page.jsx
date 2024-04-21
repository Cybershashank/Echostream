"use client";
import React, { useEffect, useState } from 'react'

const manageartist = () => {

  const [Data, setData] = useState([]);

  //user fetch function
  const fetchUser = async () => {
    const res = await
      fetch('http://localhost:5000/artist/getall')

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  //Delete func
  const deleteFuction = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/artist/delete/' + id, { method: 'DELETE' })
    if (res.status === 200) {
      fetchUser();
    }
  }
  const displayUsers = () => {
    return Data.map((obj) => (
  <tr>
  <td className="border px-4 py-2">{obj.name}</td>
  <td className="border px-4 py-2">{obj.email}</td>
  <td className="border px-4 py-2">{obj.password}</td>
  <td className="border px-4 py-2">{obj.gender}</td>
  <td className="border px-4 py-2">
    <a href="#" className="text-blue-500 hover:text-blue-700">
      Edit
    </a>
    <span className="text-gray-400 mx-2">|</span>
    <button  onClick={() => {deleteFuction(obj._id)}} className="text-red-500 hover:text-red-700">
      Delete
    </button>
  </td>
</tr>
    ))
  }

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
            <th className="text-left py-2 px-4">Email</th>
            <th className="text-left py-2 px-4">Password</th>
            <th className="text-left py-2 px-4">Gender</th>
          </tr>
        </thead>
        <tbody>
         {displayUsers()}
        </tbody>
      </table>
    </div>
  </div>
</>

    
    </>
  )
}

export default manageartist