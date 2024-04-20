'use client';
import React from 'react'
import * as Yup from "yup";
import Link from 'next/link';
import classes from './feedback.module.css';
import { useFormik, } from 'formik'
import toast from 'react-hot-toast';


const feedback = () => {



  const feedbackValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const feedbackForm = useFormik({
    initialValues: {
      email: '',
      message: '',
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/feedback/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })

        .then((response) => {
          console.log(response.status);
          toast.success('feedback Created Successfully');
        }).catch((err) => {
          console.log(err);
          toast.error('feedback Creation Failed');
        });
      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 3000);
    },
    validationSchema: feedbackValidationSchema
  });


  return (

    <>

      <section>
        <div className="bg-black text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              <p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose">
                REVIEW
              </p>
              <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                Leave us a feedback!
              </p>
              <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Please provide your valuable feedback and something something ...
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form onSubmit={feedbackForm.handleSubmit} id="feedbackForm" >

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              onChange={feedbackForm.handleChange}
                              value={feedbackForm.values.email}

                              className="border-0 px-3 py-3 rounded text-sm shadow w-full
                                         bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required=""
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Rate your experience
                            </label>
                          </div>




                          <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          </div>


                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="message"
                            >
                              Message
                            </label>
                            <textarea
                              maxLength={300}
                              type="text"
                              id="message"
                              onChange={feedbackForm.handleChange}
                              value={feedbackForm.values.message}

                              rows={4}
                              cols={80}
                              className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                              placeholder=""
                              required=""
                              defaultValue={""}
                            />
                          </div>

                          <div className="text-center mt-6">
                            <button disabled={feedbackForm.isSubmitting}
                              id="feedbackBtn"
                              className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                            >
                              Submit
                            </button>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>



  )
}

export default feedback;