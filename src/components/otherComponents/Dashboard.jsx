import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/logo.png';
import logo2 from '../../assets/logo/Logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseAuth } from '../../context/Firebase';
import { signOut } from 'firebase/auth';
import {
  AiOutlineMenu,
  AiOutlineFileSearch,
  AiOutlineLogout,
} from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import EnquireDashboard from './EnquireDashboard';
import JobDashboard from './JobDashboard';

const Dashboard = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [open, setOpen] = useState(false);
  // const [select, setSelect] = useState(0);
  const [selectedItem, setSelectedItem] = useState('Enquiry');
  let history = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    screenSize <= 1400 ? setOpen(false) : setOpen(true);
  }, [screenSize]);

  const handleLogout = () => {
    signOut(FirebaseAuth)
      .then(() => {
        console.log('Sign-out successful.');
        localStorage.removeItem('firebaseToken');
        history(`/`);
      })
      .catch((error) => {
        // An error happened.

        console.log('error');
      });
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <div
        className={`absolute h-screen  bg-white duration-500 md:hidden   ${
          open ? 'left-0  ' : '-left-[100%]'
        }  flex flex-col justify-between rounded-r-xl  transition `}
      >
        <div>
          <div className='mb-6 mt-2 border-b'>
            <Link to='/'>
              <img src={logo} alt='logo' className='mx-4  h-[56px] ' />
            </Link>
          </div>
          <div className='text-lg lg:text-xl'>
            <div
              className={` mx-2 mb-2 flex cursor-pointer gap-2 rounded-xl py-2 pl-2 pr-2 font-mono  duration-75   ${
                selectedItem === 'Enquiry'
                  ? 'border-r-4 border-black bg-[#02c6b7] pl-4  text-white  '
                  : ' text-[#02c6b7] hover:bg-[#02c6b7] hover:text-white'
              }`}
              onClick={() => setSelectedItem('Enquiry')}
            >
              <AiOutlineFileSearch className='text-3xl' /> <span> Enquiry</span>
            </div>
            <div
              className={` mx-2 mb-2 flex cursor-pointer gap-2 rounded-xl py-2 pl-2 pr-2 font-mono  duration-75  ${
                selectedItem === 'Job'
                  ? 'border-r-4 border-black bg-[#02c6b7] pl-4 text-white '
                  : ' text-[#02c6b7] hover:bg-[#02c6b7] hover:text-white'
              }`}
              onClick={() => setSelectedItem('Job')}
            >
              <BsPeople className='text-3xl' /> <span> Job</span>
            </div>
          </div>
        </div>
        <div
          className={`mx-2 mb-2 flex cursor-pointer gap-2 rounded-xl border-2 border-gray-300 py-2 pl-2  pr-2 font-mono  text-lg text-[#02c6b7] duration-75 hover:border-[#02c6b7] lg:mb-4 lg:text-xl`}
          onClick={handleLogout}
        >
          <AiOutlineLogout className='text-3xl' />
          <span> Logout</span>
        </div>
      </div>
      <div
        className={`hidden   md:block ${
          open ? 'min-w-max' : 'w-20'
        }   mr-2 justify-between rounded-r-xl bg-white  transition  `}
      >
        <div className='flex h-full flex-col justify-between'>
          <div>
            <div className='mb-6 mt-2 border-b'>
              <Link to='/'>
                {open ? (
                  <img src={logo} alt='logo' className='mx-4  h-16 xl:h-20 ' />
                ) : (
                  <img src={logo2} alt='logo' className='  p-4 ' />
                )}
              </Link>
            </div>
            <div className='text-lg lg:text-xl'>
              <div
                className={` mx-2 mb-2 flex cursor-pointer gap-2 rounded-xl py-2 pl-2 pr-2 font-mono  duration-75 lg:mb-4  ${
                  selectedItem === 'Enquiry'
                    ? 'border-r-4 border-green-800 bg-[#02c6b7] pl-4  text-white  '
                    : ' text-[#02c6b7] hover:bg-[#02c6b7] hover:text-white'
                }`}
                onClick={() => setSelectedItem('Enquiry')}
              >
                <AiOutlineFileSearch className='text-3xl' />{' '}
                <span className={`${open ? 'visible' : 'hidden'}`}>
                  {' '}
                  Enquiry
                </span>
              </div>
              <div
                className={` mx-2 mb-2 flex cursor-pointer gap-2 rounded-xl py-2 pl-2 pr-2 font-mono  duration-75 lg:mb-4  ${
                  selectedItem === 'Job'
                    ? 'border-r-4 border-green-800 bg-[#02c6b7] pl-4 text-white '
                    : ' text-[#02c6b7] hover:bg-[#02c6b7] hover:text-white'
                }`}
                onClick={() => setSelectedItem('Job')}
              >
                <BsPeople className='text-3xl' />{' '}
                <span className={`${open ? 'visible' : 'hidden'}`}> Job</span>
              </div>
            </div>
          </div>
          <div
            className={`mx-2 mb-2 flex cursor-pointer gap-2 rounded-xl border-2 border-gray-300 py-2 pl-2  pr-2 font-mono  text-lg text-[#02c6b7] duration-75 hover:border-[#02c6b7] lg:mb-4 lg:text-xl`}
            onClick={handleLogout}
          >
            <AiOutlineLogout className='text-3xl' />
            <span className={`${open ? 'visible' : 'hidden'}`}> Logout</span>
          </div>
        </div>
      </div>

      <div className='mr-2 flex-auto font-roboto'>
        <div className='m-2 flex h-20 items-center  justify-end rounded-xl border-b-2 bg-white p-4 md:justify-between'>
          <AiOutlineMenu
            className={`absolute ${
              open ? 'left-52 sm:left-60 ' : 'left-5'
            } cursor-pointer text-3xl text-[#02c6b7] md:hidden`}
            onClick={() => setOpen(!open)}
          />
          <AiOutlineMenu
            className='hidden cursor-pointer text-3xl text-[#02c6b7] md:block'
            onClick={() => setOpen(!open)}
          />
          <div className='font-mono text-2xl'>Admin</div>
        </div>
        <div className='m-2 bg-white'>
          {selectedItem === 'Enquiry' ? <EnquireDashboard /> : <JobDashboard />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// useEffect(() => {
//   const timeout = setTimeout(() => {
//     alert('Hello after 24 hours!');
//   }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

//   return () => {
//     clearTimeout(timeout); // Clear the timeout if the component unmounts before 24 hours
//   };
// }, []);

//   import { useFirebase } from '../../context/Firebase';
// import { signOut } from 'firebase/auth';

// useEffect(() => {
//   const timeout = setTimeout(() => {
//     signOut(Firebase.auth)
//       .then(() => {
//         // Sign-out successful
//         console.log('User signed out after 24 hours');
//       })
//       .catch((error) => {
//         // An error happened
//         console.log('Error signing out:', error);
//       });
//   }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

//   return () => {
//     clearTimeout(timeout); // Clear the timeout if the component unmounts before 24 hours
//   };
// }, [Firebase.auth]);
