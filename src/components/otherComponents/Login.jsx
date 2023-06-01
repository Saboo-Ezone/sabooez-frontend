import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useFirebase } from '../../context/Firebase';
import { FirebaseAuth } from '../../context/Firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

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

  const handleLogout = () => {
    signOut(FirebaseAuth)
      .then(() => {
        console.log('Sign-out successful.');
        localStorage.removeItem('firebaseToken');
        history(`/`);

      })
      .catch((error) => {
        // An error happened.
        setShake(true);
        console.log('error');
      });
  };

  return (
    <>
      <section
        className='bg-gray-50'
        style={{ backgroundImage: `url(${patternGreen})` }}
      >
        <div
          className='  flex h-screen w-full items-center justify-center  bg-cover   bg-center '
          // style={{ backgroundImage: `url(${LoginPage})` }}
        >
          <div
            className={`z-20 m-2  w-[400px] ${
              shake && 'animate-shake'
            }  rounded-xl  shadow-xl shadow-gray-700  `}
          >
            {/* <div className=' z-20   m-2 w-full shadow-2xl sm:w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4  '> */}
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
                    history(`/`);

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
                    setLoading(false);
                    setShake(true);
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className='   rounded-xl    bg-white p-6  text-center '>
                  <div className='flex justify-center'>
                    <Link to='/'>
                      <img
                        src={logo}
                        alt='logo'
                        className='mx-auto mb-6   h-20'
                      />
                    </Link>
                  </div>

                  <div>
                    <div className='mx-2 flex items-center justify-end'>
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='-mt-2 text-center text-red-800'
                      />
                    </div>
                    <Field
                      required
                      className='mb-6 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none'
                      type='text'
                      name='email'
                      id='email'
                      placeholder='Email ID'
                    />
                  </div>
                  <div>
                    <div className='mx-2 flex items-center justify-end'>
                      <ErrorMessage
                        name='password'
                        component='div'
                        className='-mt-4 text-center text-red-800'
                      />
                    </div>
                    <div className='flex items-center'>
                      <Field
                        required
                        className='w-full rounded-lg  border border-gray-300  px-4 py-2 placeholder:text-black focus:outline-none'
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        id='password'
                        placeholder='Password'
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className=' relative mb-4 cursor-pointer text-xl'
                      >
                        {showPassword ? (
                          <FaEye className='absolute -left-10 text-gray-600' />
                        ) : (
                          <FaEyeSlash className='absolute -left-10 text-gray-600' />
                        )}
                      </div>
                    </div>

                    <div onClick={handleLogout} className='mt-2 cursor-pointer'>
                      <div className=' text-md group relative mb-4 flex  items-center rounded-md 	p-1 pr-2  '>
                        logOut
                      </div>
                    </div>
                  </div>
                  <button
                    className=' mb-6 mt-6 w-full rounded-md bg-[#02c6b7]  px-6 py-2 font-sans text-lg font-semibold tracking-wide text-white '
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
        </div>
      </section>
    </>
  );
};

export default Login;
