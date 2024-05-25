import React, { useEffect, useState } from 'react';
import { FirebaseApp } from '../../context/Firebase';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  // orderBy,
} from 'firebase/firestore';

export const FirebaseStore = getFirestore(FirebaseApp);

const EnquireDashboard = () => {
  // const Firebase = useFirebase();
  const [allDocs, setAllDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiryData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(FirebaseStore, 'EnquiryForm')
            // orderBy('createTime', 'desc')
          )
        );
        // if (!querySnapshot.empty) {
        //   const documents = querySnapshot.docs.map((doc) => doc.data());

        //   setAllDocs(documents);
        // }
        console.log(querySnapshot.docs);
        setAllDocs([]);
        // if (!querySnapshot.empty) {
        //   const documents = querySnapshot.docs.map((doc) => {
        //     const data = doc.data();
        //     const createTime = data.createTime.toDate().toLocaleString();
        //     return { ...data, createTime };
        //   });
        //   setAllDocs(documents);
        // }

        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching enquiry data:', error);
        setIsLoading(false);
      }
    };

    fetchEnquiryData();
  }, []);

  return (
    <div className='w-full bg-white'>
      {isLoading ? (
        <p>Loading...</p>
      ) : allDocs.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className=''>
          <thead>
            <tr className='w-full bg-[#02c6b7]  text-white '>
              <th className='p-2 border-r whitespace-nowrap'>Sr. No</th>
              <th className='w-1/5 border-r'>Name</th>
              <th className='w-1/5 border-r'>Model</th>
              <th className='w-1/5 border-r'>Phone</th>
              <th className='w-1/5 border-b '>Email</th>
              <th className='w-1/5 border-b '>Time</th>
            </tr>
          </thead>
          <tbody>
            {allDocs.map((item, index) => (
              <tr
                key={index}
                className='text-center hover:bg-[#02c6b7] hover:bg-opacity-20'
              >
                <td className='p-1 border '>{index + 1}</td>
                <td className='p-1 border'>{item.name}</td>
                <td className='p-1 border'>{item.model}</td>
                <td className='p-1 border'>{item.phone}</td>
                <td className='p-1 border'>{item.email}</td>
                <td className='p-1 border'>{item.createTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnquireDashboard;
