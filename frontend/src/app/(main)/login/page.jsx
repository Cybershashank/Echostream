'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import * as Yup from "yup";
import classes from './login.module.css';
import { useFormik, } from 'formik';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useAppContext from '@/Context/userContext';
import useVoiceContext from '@/Context/voiceContext';
import { GoogleLogin } from '@react-oauth/google';


const Login = () => {
  const router = useRouter();
  const btnRef = useRef();

  const googleBtnRef = useRef();

  const { setLoggedIn, setCurrentUser,setLoggedin, setCurrentuser } = useAppContext();
  const { performActionUsingVoice, finalTranscript, fillInputUsingVoice, resetTranscript } = useVoiceContext();
  // console.log(transcript);

  useEffect(() => {

    if(finalTranscript.toLowerCase().includes('login with google')){
      googleBtnRef.current.click();
      resetTranscript();
    }

    console.log(finalTranscript);
    performActionUsingVoice('submit', 'login form', () => {
      // btnRef.current.submit();
      // trigger form submit
      btnRef.current.click();
    });

    fillInputUsingVoice(() => {
      loginForm.setFieldValue(finalTranscript.split(' ').at(-1), finalTranscript.split(' ')[1]);
    });
  }, [finalTranscript]);



  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is Required').email('Email is invalid'),
    password: Yup.string().required('Password is Required')
  });

  // initialize formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {

            response.json()
              .then((data) => {
                setLoggedIn(true);
                setCurrentuser(data);
                sessionStorage.setItem("user", JSON.stringify(data));
                if (data.role === 'admin') {
                  sessionStorage.setItem('admin', JSON.stringify(data));
                  router.push('/admin/dashboard');
                  toast.success('admin Login successfully');
              } else {
                  sessionStorage.setItem('user', JSON.stringify(data));
                  toast.success("User Login Successfully")
                 
            router.push('/browse_podcast')
              }
              })
          } else if (response.status === 401) {
            toast.error('User Login Failed');
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error('User Login Failed');
        });
      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 3000);

    },
    validationSchema: loginValidationSchema
  });

  return (
    <div style={{ backgroundImage: "url('https://i.pinimg.com/originals/ad/0b/73/ad0b734dfabb9e4ec210914fa620b90d.jpg')" }} className="bg-cover bg-center bg-no-repeat h-screen">
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/2 max-w-sm">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png?f=webp"
            alt="" />
        </div>
        <div className="md:w-1/2 max-w-sm">
          <div className="text-center md:text-left"></div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
                USER LOGIN
              </h1>
              <form onSubmit={loginForm.handleSubmit} className="space-y-4 md:space-y-6" >

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                    class="form-control"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@echostream.com"
                    required="" />

                  {
                    loginForm.touched.email &&
                    <small className="text-danger">{loginForm.errors.email}</small>
                  }

                </div>


                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">

                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    class="form-control"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />

                  {
                    loginForm.touched.password &&
                    <small className="text-danger">{loginForm.errors.password}</small>
                  }
                </div>


                <div className="flex items-center justify-between">

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link
                    href="/resetPassword"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4">
                    Forgot password?
                  </Link>

                </div>


                <button
                  type="submit"
                  ref={btnRef}
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Login Now
                </button>


                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-red-600 hover:underline hover:underline-offset-4">
                    Register
                  </Link>
                </p>


              </form>


              <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
              </div>


             

              <GoogleLogin
              ref={googleBtnRef}
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login;