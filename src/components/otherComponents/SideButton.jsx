import React from 'react';

const SideButton = ({ setShowMyModal }) => {
  return (
    <>
      <div className='fixed -right-44 top-1/2 -rotate-90 duration-300 hover:-right-36 md:-right-36  '>
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
    </>
  );
};

export default SideButton;
