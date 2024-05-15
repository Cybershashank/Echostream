'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getUserInfo = () => {
    fetch(`http://localhost:5000/user/getbyid`, {
     
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

 
  return (
    <>
      <section className="relative pt-40 pb-24">
        <img
          src="https://pagedone.io/asset/uploads/1705473378.png"
          alt="cover-image"
          className="w-full absolute top-0 left-0 z-0 h-60"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
          <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                      src={
                        currentUser.avatar &&
                        `http://localhost:3000/${currentUser.avatar}`}
                      alt="Bordered avatar"
                    />
          </div>
          <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
                {currentUser.name}
              </h3>
              <p className="font-normal text-base leading-7 text-gray-500">
                {currentUser.email}
              </p>
            </div>
            <Link href="/user/editprofile">
                <button className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">
                  Edit Profile
                </button>
              </Link>
          </div>
         
        </div>
      </section>

      {/* Photo by '@jessbaileydesigns' & '@von_co' on Unsplash */}
    </>
  );
};

export default Profile;
