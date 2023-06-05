import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import EnquireDashboard from '../otherComponents/EnquireDashboard';
import JobDashboard from '../otherComponents/JobDashboard';
import SidePanel from './SidePanel';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState('Enquiry');

  return (
    <div className='flex h-screen bg-gray-100'>
      <SidePanel
        open={open}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOpen={setOpen}
      />

      <div className='mr-2 flex-auto font-roboto'>
        <div className='m-2 flex h-20 items-center justify-end  rounded-xl border-b-2 bg-white p-4 duration-1000 md:justify-between'>
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
          <div className='font-mono text-2xl'></div>
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
