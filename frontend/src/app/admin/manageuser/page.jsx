'use client';
import React, { useEffect, useState } from 'react'
// import { BsPersonFill } from 'react-icons/bs'

const ManageUser = () => {

  const [Data, setData] = useState([]);

  //user fetch function
  const fetchUser = async () => {
    const res = await
      fetch('http://localhost:5000/user/getall')

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

    const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' })
    if (res.status === 200) {
      fetchUser();
    }
  }

  //User Display func
  const displayUsers = () => {
    return Data.map((obj) => (
      <tr>
        <td className="w-1/4 py-4 px-6 text-left text-gray-600 border-b  border-gray-200">{obj.name}</td>
        <td className="py-4 w-1/4 px-6 text-left text-gray-600  border-b border-gray-200 truncate">
          {obj.email}
        </td>
        <td className="py-4  border-b border-gray-200">{obj.mobileNumber}</td>
        <td className="py-4  border-b border-gray-200">
          <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
            {obj.password}
          </span>
        </td>
        <td className="border px-4 py-2">
          
          <button onClick={() => { deleteFuction(obj._id) }} className="bg-red-500 hover:bg-red-700 px-6 py-1 rounded text-white">
            Delete
          </button>
          
          
        </td>
      </tr>

    ))
  }

  return (
    <>
    <div className="container mx-auto p-8">
    <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search User..."
        className="w-full p-2 rounded border"
      />
    </div>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Email
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Phone
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Password
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">

            {displayUsers()}

          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default ManageUser;