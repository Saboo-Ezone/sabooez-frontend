import React, { useEffect } from 'react';
// import patternBoxSvg from '../../assets/other/pattern-box.svg';
import patternWhite from '../../assets/other/pattern-grid-white.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const EnquirForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        className=' mt-2  bg-[#edede6] '
        // style={{ backgroundImage: `url(${patternBoxSvg})` }}
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className='px-8 py-8 lg:px-16'>
          <div data-aos='zoom-in' className='text-h2 text-[#505bfe]'>Enquire Now</div>
          <form action='' >
            <div className='my-4 grid gap-x-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-4 xl:grid-cols-5'>
              <div className='mb-2 lg:mb-4'>
                <input
                  type='text'
                  className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                  name=''
                  id=''
                  placeholder='Enter your name here'
                  required
                />
              </div>
              <div className='mb-2 lg:mb-4'>
                <input
                  type='email'
                  className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                  name='newsletteryouremail'
                  id='emailAddress'
                  placeholder='Enter your email  here'
                  required
                />
              </div>
              <div className='mb-2 lg:mb-4'>
                <input
                  type='number'
                  className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                  name=''
                  id=''
                  placeholder='Enter your phone number here'
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

              <div className='justify-center lg:w-full xl:flex' data-aos='zoom-in'>
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
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <section
        className='my-8 px-8  lg:px-16 '
        style={{ backgroundImage: `url(${patternBoxSvg})` }}
      >
        <div className='text-h2 text-[#505bfe]'>Enquire Now</div>
        <form action=''>
          <div className='my-4 grid gap-x-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
            <div className='mb-2 lg:mb-4'>
              <input
                type='text'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                name=''
                id=''
                placeholder='Enter your name here'
                required
              />
            </div>
            <div className='mb-2 lg:mb-4'>
              <input
                type='email'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                name='newsletteryouremail'
                id='emailAddress'
                placeholder='Enter your email  here'
                required
              />
            </div>
            <div className='mb-2 lg:mb-4'>
              <input
                type='number'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed placeholder:text-gray-800 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
                name=''
                id=''
                placeholder='Enter your phone number here'
                required
              />
            </div>
            <div className='mb-2 lg:mb-4'>
              //  <input
              //   type='text'
              //   className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-300 placeholder:text-gray-800 '
              //   name=''
              //   id=''
              //   placeholder='Enter your name here'
              //   required
              // /> 
              <select
                name='model'
                id='model'
                required
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-300 '
              >
                <option value='' selected disabled>
                  Select Model
                </option>
                <option className='bg-[#16b895] ' value='SWITCH E1'>SWITCH E1</option>
                <option className='bg-[#16b895]' value='SWITCH METRODECKER'>SWITCH METRODECKER</option>
                <option className='bg-[#16b895]' value='SWITCH METROCITY'>SWITCH METROCITY</option>
                <option className='bg-[#16b895]' value='SWITCH SOLO'>SWITCH SOLO</option>
              </select>
            </div>

            <div className='justify-center lg:w-full xl:flex'>
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
            </div>
          </div>
        </form>
      </section> */}
    </>
  );
};

export default EnquirForm;
