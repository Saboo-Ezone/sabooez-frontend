import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import patternWhite from '../../assets/other/pattern-grid-white.png';

const ModalEnquire = ({ visible, onClose }) => {

  
  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  if (!visible) return null;
  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed  inset-0 flex items-center justify-center z-20  backdrop-blur-[3px] '
     
    >
      <div className='border border-gray-400  bg-[#edede6] px-16 py-6 lg:py-10 text-center w-full max-w-lg rounded-2xl relative '  style={{ backgroundImage: `url(${patternWhite})` }}>
        <div
          onClick={onClose}
          className='absolute flex items-center justify-end my-1 text-3xl text-gray-500 cursor-pointer right-4 top-4 -pr-10 hover:text-black'
        >
          <AiOutlineCloseCircle />
        </div>
        <div className='text-h2 text-[#505bfe]'>Enquire Now</div>
        <form action=''>
          <div className='my-4 md:gap-4 '>
          <div className='mb-2 lg:mb-4'>
              <input
                type='text'
                className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 placeholder:text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 '
                name=''
                id=''
                placeholder='Name'
                required
              />
            </div>
            <div className='mb-2 lg:mb-4'>
              <input
                type='email'
                className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 placeholder:text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 '
                name='newsletteryouremail'
                id='emailAddress'
                placeholder='Email'
                required
              />
            </div>

            <div className='mb-2 lg:mb-4'>
              <input
                type='number'
                className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 placeholder:text-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 '
                name=''
                id=''
                placeholder='Phone number '
                required
              />
            </div>
            <div className='mb-2 lg:mb-4'>
              <select
                name='model'
                id='model'
                required
                className='block w-full px-2 py-2 mb-1 text-lg leading-relaxed border-2 border-indigo-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 '
              >
                <option value='' selected disabled>
                  Select Model
                </option>
                <option className='bg-gray-100 ' value='   Switch E1'>
                  Switch E1
                </option>
                <option className='bg-gray-100 ' value='Switch Metrodecker'>
                  Switch Metrodecker
                </option>
                <option className='bg-gray-100 ' value='Switch Metrocity'>
                  Switch Metrocity
                </option>
                <option className='bg-gray-100 ' value='Switch Solo'>
                  Switch Solo
                </option>
              </select>
            </div>
          </div>

          <button
            type='submit'
            className='group relative h-min overflow-hidden border-[2px]  border-indigo-700 px-6 py-2 text-xl font-medium text-indigo-500 shadow-inner'
          >
            <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-indigo-400 border-t-1 ease group-hover:w-full'></span>
            <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-indigo-400 border-b-1 ease group-hover:w-full'></span>
            <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 ease group-hover:h-full'></span>
            <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 ease group-hover:h-full'></span>
            <span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-indigo-700 opacity-0 group-hover:opacity-100'></span>
            <span className='relative transition-colors duration-300 delay-200 ease group-hover:text-white'>
              SUBMIT
            </span>
          </button>
          {/* <button
              onClick={onClose}
              className='px-8 py-1 mt-6 mb-2 font-sans text-lg font-semibold tracking-wide border border-indigo-300 rounded-full hover:border-indigo-400 hover:bg-indigo-200 '
            >
              Submit
            </button> */}
        </form>
      </div>
    </div>
  );
};

export default ModalEnquire;
