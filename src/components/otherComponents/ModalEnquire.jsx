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
      <div className='border border-gray-400 rounded-lg bg-[#edede6] px-16 py-4 text-center '  style={{ backgroundImage: `url(${patternWhite})` }}>
        <div
          onClick={onClose}
          className=' -pr-10 my-1 flex cursor-pointer items-center justify-end text-3xl text-gray-500 hover:text-black'
        >
          <AiOutlineCloseCircle />
        </div>
        <div className='text-h2 text-[#505bfe]'>Enquire Now</div>
        <form action=''>
          <div className='my-4 grid gap-x-2 sm:grid-cols-2 md:gap-4  '>
          <div className='mb-2 lg:mb-4'>
              <input
                type='text'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                name=''
                id=''
                placeholder='Name'
                required
              />
            </div>
            <div className='mb-2 lg:mb-4'>
              <input
                type='email'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                name='newsletteryouremail'
                id='emailAddress'
                placeholder='Email'
                required
              />
            </div>

            <div className='mb-2 lg:mb-4'>
              <input
                type='number'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
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
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
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
            <span className='border-t-1 ease absolute left-0 top-0 h-0 w-0 border-indigo-400 transition-all duration-200 group-hover:w-full'></span>
            <span className='border-b-1 ease absolute bottom-0 right-0 h-0 w-0 border-indigo-400 transition-all duration-200 group-hover:w-full'></span>
            <span className='ease absolute left-0 top-0 h-0 w-full bg-indigo-400 transition-all delay-200 duration-300 group-hover:h-full'></span>
            <span className='ease absolute bottom-0 left-0 h-0 w-full bg-indigo-400 transition-all delay-200 duration-300 group-hover:h-full'></span>
            <span className='absolute inset-0 h-full w-full bg-indigo-700  opacity-0 delay-300 duration-300 group-hover:opacity-100'></span>
            <span className='ease relative transition-colors delay-200 duration-300 group-hover:text-white'>
              SUBMIT
            </span>
          </button>
          {/* <button
              onClick={onClose}
              className='mb-2 mt-6 rounded-full border border-indigo-300 px-8 py-1  font-sans text-lg font-semibold tracking-wide hover:border-indigo-400 hover:bg-indigo-200 '
            >
              Submit
            </button> */}
        </form>
      </div>
    </div>
  );
};

export default ModalEnquire;
