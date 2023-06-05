import React, { useEffect, useState } from 'react';
import { FirebaseApp } from '../../context/Firebase';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

export const FirebaseStore = getFirestore(FirebaseApp);

const EnquireDashboard = () => {
  // const Firebase = useFirebase();
  const [allDocs, setAllDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiryData = async () => {
      try {
        const data = await await getDocs(
          collection(FirebaseStore, 'EnquiryForm')
        );
        if (!data.empty) {
          data.forEach((doc) => {
            const documentData = doc.data();
            const createTime = doc?.createTime?.toDate();
            const documentWithTime = { ...documentData, createTime };
            setAllDocs((prevDocuments) => [...prevDocuments, documentWithTime]);
          });
        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching enquiry data:', error);
        setIsLoading(false);
      }
    };

    fetchEnquiryData();
  }, []);

  return (
    <div className='w-full  bg-white'>
      {isLoading ? (
        <p>Loading...</p>
      ) : allDocs.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className=''>
          <thead>
            <tr className='w-full bg-[#02c6b7]  text-white '>
              <th className='whitespace-nowrap  border-r p-2'>Sr. No</th>
              <th className='w-1/4 border-r'>Name</th>
              <th className='w-1/4 border-r'>Model</th>
              <th className='w-1/4 border-r'>Phone</th>
              <th className='w-1/4 border-b '>Email</th>
            </tr>
          </thead>
          <tbody>
            {allDocs.map((item, index) => (
              <tr
                key={index}
                className='text-center hover:bg-[#02c6b7] hover:bg-opacity-50'
              >
                <td className=' border p-1'>{index + 1}</td>
                <td className='border p-1'>{item.name}</td>
                <td className='border p-1'>{item.model}</td>
                <td className='border p-1'>{item.phone}</td>
                <td className='border p-1'>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnquireDashboard;

// import React, { useEffect, useState } from 'react';
// import { useFirebase } from '../../context/Firebase';

// const EnquireDashboard = () => {
//   const Firebase = useFirebase();

//   const [enquiryData, setEnquiryData] = useState([]);

//   useEffect(() => {
//     const fetchEnquiryData = async () => {
//       try {
//         // const data = await Firebase.getDocument();
//         const data2 = await Firebase.getDocuments();
//         console.log(data2.docs)
//         setEnquiryData(data2.docs);
//       } catch (error) {
//         console.log('Error fetching enquiry data:', error);
//       }
//     };

//     fetchEnquiryData();
//   }, [Firebase]);

//   useEffect(()=>{
//     console.log(enquiryData)
//   },[enquiryData])

//   return (
//     <div>
//       {/* <h2>EnquireDashboard</h2> */}
//       <table>
//         <thead>
//           <tr className='w-full'>
//             <th className='border-x border-gray-400  '>Email</th>
//             <th className='border-x border-gray-400 '>Model</th>
//             <th className='border-x border-gray-400 '>Name</th>
//             <th className='border-x border-gray-400 '>Phone</th>
//           </tr>
//         </thead>
//           <tbody>
//           {enquiryData.forEach((item, index) => (

//             <tr key={index}>
//               <td>{item.email}</td>
//               <td>{item.model}</td>
//               <td>{item.name}</td>
//               <td>{item.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//         {/* <tbody>
//           <tr>
//              <td className=' border-x border-gray-400 px-1 ' >{enquiryData.email}</td>
//              <td className=' border-x border-gray-400 px-1 ' >{enquiryData.model}</td>
//              <td className=' border-x border-gray-400 px-1 ' >{enquiryData.name}</td>
//              <td className=' border-x border-gray-400 px-1 ' >{enquiryData.phone}</td>
//           </tr>
//         </tbody> */}
//       </table>
//     </div>
//   );
// };

// export default EnquireDashboard;
