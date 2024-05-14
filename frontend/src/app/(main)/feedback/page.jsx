"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";


const FeedBackForm = () => {

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const router = useRouter();

  const FeedBackForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      rating: "",
    },
    onSubmit: (values, { resetForm }) => {
      values.rating = rating;
      console.log(values);
      resetForm();

      fetch("http://localhost:5000/feedback/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Feedback Added successfully", {
              variant: "success",
            });
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    },
  });

  const getFeedback = async () => {
    const res = await fetch("http://localhost:5000/feedback/getall")
    console.log(res.status);
    const data = await res.json()
    console.log(data);
    setFeedback(data);
  }

  useEffect(() => {
    getFeedback()
  }, [])

  return (

    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Give Us Your Feedback
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-White md:text-lg">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form
            onSubmit={FeedBackForm.handleSubmit}
            className="mx-auto grid max-w-full-md gap-4"
          >
            <div>
              <label
                for="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={FeedBackForm.values.name}
                onChange={FeedBackForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {FeedBackForm.touched.name && (
                <span className="text-red">{FeedBackForm.errors.name}</span>
              )}
            </div>

            <div>
              <label
                for="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email Address"
                value={FeedBackForm.values.email}
                onChange={FeedBackForm.handleChange}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {FeedBackForm.touched.email && (
                <span className="text-red">{FeedBackForm.errors.email}</span>
              )}
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                placeholder="Type your message here..."
                value={FeedBackForm.values.message}
                onChange={FeedBackForm.handleChange}
                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300"
              >
                {FeedBackForm.touched.message && (
                  <span className="text-red">
                    {FeedBackForm.errors.message}
                  </span>
                )}
              </textarea>
            </div>

            <div className="bg-white py-6 flex justify-start">
              <ReactStars
                rating={rating}
                onChange={setRating}
                size={48}
                activeColor="#ffd700"
              />
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button
                type="submit"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Submit
              </button>
            </div>
          </form>


        </div>
      </div>


            
            <div>
              {/* review - start */}
              {
                feedback.map((feed) => {
                  return (
                    <div className="flex flex-col gap-3 py-4 md:py-8">
                      <div>
                        <span className="block text-sm font-bold">{feed.name}</span>
                        <span className="block text-sm text-gray-500">
                          {feed.createdAt}
                        </span>
                      </div>

                      <div className="-ml-1 flex gap-0.5">

                        <ReactStars
                          count={feed.rating}
                          size={30}
                          color={'#ffd700'}
                        />
                      </div>

                      <p className="text-gray-600">
                        {feed.message}
                      </p>
                    </div>
                  )
                })
              }
              {/* review - end */}
            </div>

          
    </div>


  );
};

export default FeedBackForm;