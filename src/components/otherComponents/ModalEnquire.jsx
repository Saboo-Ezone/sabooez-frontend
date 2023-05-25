import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ModalEnquire = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  if (!visible) return null;
  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed  inset-0 flex items-center justify-center   backdrop-blur-[3px]'
    >
      <div className=' rounded-lg bg-indigo-100 px-16 py-4 text-center '>
        <div
          onClick={onClose}
          className=' my-1 -pr-10 flex cursor-pointer items-center justify-end text-3xl text-gray-500 hover:text-black'
        >
          <AiOutlineCloseCircle />
        </div>

        <span className='text-2xl'>Are you sure?</span>
        <p className='mt-2'>Do you really want to delete this record?</p>
        {/* <span>
        Do you really want to delete this record? This process cannot be
        undone.
      </span> */}

        <div className='flex justify-around'>
          <button
            onClick={onClose}
            className='mb-2 mt-6 rounded-full border border-indigo-300 px-8 py-1  font-sans text-lg font-semibold tracking-wide hover:border-indigo-400 hover:bg-indigo-200 '
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEnquire;
