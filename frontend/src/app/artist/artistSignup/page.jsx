'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const artistSignup = () => {

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Too short')
      .matches(/[a-z]/, 'password must contain lowercase letter')
      .matches(/[A-Z]/, 'password must contain uppercase letter')
      .matches(/[0-9]/, 'password must contain number')
      .matches(/\W/, 'password must contain special symbol'),
    cpassword: Yup.string().required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const artistSignupForm = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      cpassword: ''
    },
    onSubmit: async (values, { resetForm }) => {
        console.log(values);
        const res = await fetch('http://localhost:5000/artist/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })
    .then((response) => {
      console.log(response.status);
      toast.success('Artist Created Successfully');
    }).catch((err) => {
      console.log(err);
      toast.error('Artist Creation Failed');
    });
    setTimeout(() => {
      console.log(values);
      resetForm();
    }, 3000);
    },
    validationSchema: signupValidationSchema
  })

  return (
    <>
      <section className="bg-[#16386f] h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-6333618-5230178.png?f=webp" alt="" />
        </div>

        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left"></div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Account
              </h1>
              <form onSubmit={artistSignupForm.handleSubmit} className="space-y-4 md:space-y-6">

                <div>
                  <label
                    htmlFor="Name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={artistSignupForm.handleChange}
                    value={artistSignupForm.values.name}
                    class="form-control"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required="" />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={artistSignupForm.handleChange}
                    value={artistSignupForm.values.email}
                    class="form-control"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@echostream.com"
                    required="" />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    onChange={artistSignupForm.handleChange}
                    value={artistSignupForm.values.password}
                    class="form-control"
                    placeholder="Password (minimum 8 characters)"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="cpassword"
                    onChange={artistSignupForm.handleChange}
                    value={artistSignupForm.values.cpassword}
                    class="form-control"
                    placeholder="Password (minimum 8 characters)"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />

                  {
                    artistSignupForm.touched.cpassword &&
                    <small class="text-danger">{artistSignupForm.errors.cpassword}</small>
                  }

                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required="" />
                  </div>

                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300" >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>

                </div>

                <button disabled={artistSignupForm.isSubmitting}
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline hover:underline-offset-4" >
                    Login Here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default artistSignup;