import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const SideButton = ({ setShowMyModal }) => {
  return (
    <>
      <div className='fixed hidden top-1/2 -rotate-90 duration-300 sm:block  sm:-right-36  '>
        <button className='m-2 w-min whitespace-nowrap  bg-[#20c997] px-4 py-2  text-white lg:hover:bg-[#515ef5] '>
          Download Brochure
        </button>
        <button
          onClick={() => setShowMyModal(true)}
          className='m-2 w-min whitespace-nowrap  bg-[#515ef5] px-4 py-2  text-white lg:hover:bg-[#20c997] '
        >
          ENQUIRE NOW
        </button>
      </div>
      <div className='fixed flex text-2xl gap-6 right-16 top-5  z-20 duration-300 sm:hidden'>
        <BsDownload />
        <FiMail onClick={() => setShowMyModal(true)} />
      </div>
    </>
  );
};

export default SideButton;
