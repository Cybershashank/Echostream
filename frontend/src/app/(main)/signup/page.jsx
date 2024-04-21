'use client';
import React from 'react'
import { IconAt } from '@tabler/icons-react'
import classes from './signup.module.css';
import { useFormik, } from 'formik'
import Link from 'next/link';
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';


const Signup = () => {
//const router = useRouter();
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

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileNumber: '',
      password: '',
      cpassword: ''
    },


    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })
    .then((response) => {
      console.log(response.status);
      toast.success('User Created Successfully');
      router.push('/login')
    }).catch((err) => {
      console.log(err);
      toast.error('User Creation Failed');
    });
    setTimeout(() => {
      console.log(values);
      resetForm();
    }, 3000);
    }

    ,
    validationSchema: signupValidationSchema
  })

  return (

    <>


      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-6333618-5230178.png?f=webp" alt="" />
        </div>

        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left"></div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form onSubmit={signupForm.handleSubmit} className="space-y-4 md:space-y-6" >



                <div className='mb-4 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-user">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                  <input
                    type="text"
                    id="name"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.name}
                    class="form-control"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Name"
                    required="" />
                </div>


                <div className='mb-4 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                  <input
                    type="text"
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                    class="form-control"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@echostream.com"
                    required="" />
                </div>


                <div className='mb-4 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                    <path d="M11 4h2" />
                    <path d="M12 17v.01" /></svg>
                  <input
                    type="mobileNumber"
                    id="mobileNumber"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.mobileNumber}
                    class="form-control"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mobile Number"
                    required="" />
                </div>


                <div className='mb-4 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-lock">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /></svg>
                  <input
                    type="text"
                    id="password"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.password}
                    class="form-control"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />
                </div>


                <div className='mb-4 flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-lock">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /></svg>
                  <input
                    type="password"
                    id="cpassword"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.cpassword}
                    class="form-control"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />
                  {
                    signupForm.touched.cpassword &&
                    <small class="text-danger">{signupForm.errors.cpassword}</small>
                  }

                </div>


                <div className="flex items-start">

                  <div className="flex items-center h-5"></div>

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

                </div>


                <button disabled={signupForm.isSubmitting}
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Create an account
                </button>


                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-blue-600 hover:underline hover:underline-offset-4"
                  >
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

export default Signup