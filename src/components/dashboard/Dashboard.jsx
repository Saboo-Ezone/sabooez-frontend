import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import SidePanel from './SidePanel';
import EnquireDashboard from './EnquireDashboard';
import JobDashboard from './JobDashboard';

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

      <div className=' flex-auto font-roboto overflow-x-scroll md:overflow-x-hidden h-screen'>
        <div className='mx-1 md:mx-2 my-1 flex h-20 items-center justify-end rounded-md  border-b-2 bg-white p-4 duration-1000 md:justify-between'>
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
        <div className='mx-1 md:mx-2   overflow-x-scroll overflow-y-visible md:overflow-x-hidden  h-[85vh]  '>
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
