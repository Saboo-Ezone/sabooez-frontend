// import React, { useEffect, useState } from 'react'
// import { useFirebase } from '../../context/Firebase';

const EnquireDashboard = () => {
  // const Firebase = useFirebase();
  // const [allDocs, setAllDocs] = useState([])

  // useEffect(()=>{

  // },[])

  return <div></div>;
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
