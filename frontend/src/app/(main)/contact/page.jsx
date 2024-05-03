'use client';
import React from 'react'
import { useFormik, } from 'formik'
import Link from 'next/link';
import * as Yup from "yup";
import toast from 'react-hot-toast';

const Contact = () => {

  const contactValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('FirstName is required'),
    lastName: Yup.string().required('lastName is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const contactForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      message: '',
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })

        .then((response) => {
          console.log(response.status);
          toast.success('Contacted Successfully');
        }).catch((err) => {
          console.log(err);
          toast.error('Contact Failed');
        });
      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 3000);
    },

    validationSchema: contactValidationSchema
  });


  return (
    <>
    <div style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/028/541/265/original/background-biru-keren-dan-kosong-abstract-untuk-template-desain-ppt-free-vector.jpg')"}} className="bg-cover bg-center bg-no-repeat">
      <div className=" px-6 py-24 sm:py-32 lg:px-8">
        
  
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            CONTACT US
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Get in touch with us
          </p>
        </div>

        <form onSubmit={contactForm.handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="firstName"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.firstName}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="lastName"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.lastName}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
               >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="email"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.email}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
               >
                Mobile number
              </label>
              <div className="relative mt-2.5">

                <input
                  type="mobileNumber"
                  id="mobileNumber"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.mobileNumber}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
               >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  type="text"
                  name="message"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.message}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                 />
              </div>
            </div>

          </div>

          <div className="mt-10">
            <button disabled={contactForm.isSubmitting}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </button>
          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default Contact;