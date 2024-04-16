import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useFirebase } from '../../context/Firebase';
import { FirebaseAuth } from '../../context/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import logo from '../../assets/logo/logo.png';
import patternGreen from '../../assets/other/pattern-green.png';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  let history = useNavigate();

  const notify = () =>
    toast.error('Wrong Credential', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  // const Firebase = useFirebase();

  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const emailContext = useContext(EmailContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShake(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [shake]);

  return (
    <>
      <section
        className='bg-gray-50'
        style={{ backgroundImage: `url(${patternGreen})` }}
      >
        <div
          className='flex items-center justify-center w-full h-screen bg-center bg-cover '
          // style={{ backgroundImage: `url(${LoginPage})` }}
        >
          <div
            className={`z-20 m-2  w-[400px] lg:w-[450px] ${
              shake && 'animate-shake'
            }  rounded-xl  shadow-xl shadow-gray-700  `}
          >
            {/* <div className='z-20 w-full m-2 shadow-2xl sm:w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4'> */}
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setLoading(true);
                // Firebase.signupUserWithEmailAndPassword(
                //   values.email,
                //   values.password
                // )
                //   .then((response) => {
                //     setLoading(false);
                //     history(`/${response.data.data.selectRole}`);
                //     setSubmitting(false);
                //   })
                //   .catch((error) => {
                //     setLoading(false);
                //     setShake(true);
                //     setSubmitting(false);
                //   });
                signInWithEmailAndPassword(
                  FirebaseAuth,
                  values.email,
                  values.password
                )
                  .then((userCredential) => {
                    setLoading(false);
                    // Access the user object
                    const user = userCredential.user;

                    // Get the ID token
                    return user.getIdToken();
                  })
                  .then((idToken) => {
                    // Store the ID token in local storage
                    localStorage.setItem('firebaseToken', idToken);
                    history(`/admin`);

                    // Continue with other actions or redirect the user
                  })
                  // .then((userCredential) => {
                  //   const user = userCredential.user;
                  //   console.log(user);
                  //   history(`/`);
                  // })
                  .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    notify();
                    setLoading(false);
                    setShake(true);
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className='p-6 text-center bg-white rounded-xl'>
                  <div className='flex justify-center'>
                    <Link to='/'>
                      <img
                        src={logo}
                        alt='logo'
                        className='h-20 mx-auto mb-6'
                      />
                    </Link>
                  </div>

                  <div>
                    <div className='flex items-center justify-end mx-2'>
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='-mt-2 text-center text-red-800'
                      />
                    </div>
                    <Field
                      required
                      className='w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none'
                      type='text'
                      name='email'
                      id='email'
                      placeholder='Email ID'
                    />
                  </div>
                  <div>
                    <div className='flex items-center justify-end mx-2'>
                      <ErrorMessage
                        name='password'
                        component='div'
                        className='-mt-4 text-center text-red-800'
                      />
                    </div>
                    <div className='flex items-center'>
                      <Field
                        required
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none'
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        id='password'
                        placeholder='Password'
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className='relative mb-4 text-xl cursor-pointer '
                      >
                        {showPassword ? (
                          <FaEye className='absolute text-gray-600 -left-10' />
                        ) : (
                          <FaEyeSlash className='absolute text-gray-600 -left-10' />
                        )}
                      </div>
                    </div>

                    {/* <div onClick={handleLogout} className='mt-2 cursor-pointer'>
                      <div className='relative flex items-center p-1 pr-2 mb-4 rounded-md text-md group'>
                        logOut
                      </div>
                    </div> */}
                  </div>
                  <button
                    className=' mb-6 mt-8 w-full rounded-md bg-[#02c6b7]  px-6 py-2 font-sans text-lg font-semibold tracking-wide text-white '
                    type='submit'
                    disabled={isSubmitting}
                  >
                    {loading ? 'Signing in' : 'Sign in'}
                  </button>
                  <div className='-mb-3 mt-4 text-[12px] '>
                    © 2023 Saboo eZone. All rights reserved
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Login;
