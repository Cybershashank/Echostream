import React from 'react'

const AdminProfile = () => {
  return (
    <>
  <div className="container  py-6">
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg"
            alt="Profile Picture"
            className="rounded-full h-16 w-16 mr-4"
          />
          <div>
            <h1 className="text-xl font-bold">Doraemon</h1>
            <p className="text-sm">Admin Role</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg  font-semibold mb-4">Profile Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-semibold">Email:</p>
            <p>admin@example.com</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Phone:</p>
            <p>+123456789</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Actions</h2>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>


</>


    
    
  )
}

export default AdminProfile;