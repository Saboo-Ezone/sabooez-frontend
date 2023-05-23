import React from 'react';
import patternWhite from '../assets/other/pattern-grid-white.png';
import bannerCotact from '../assets/other/banner-careers.jpg';

const Careers = () => {
  return (
    <>
      <section
        className='bg-[#edede6] '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className='flex  flex-col md:flex-row  justify-between xl:h-[80%]'>
          <div className='py-10 font-roboto md:w-1/2 md:pr-2'>
            <div className='text-4xl  pb-4 lg:pb-8 pt-12 text-left pr-2 pl-8 md:pl-16 lg:pl-20'>
              SWITCH up your career
            </div>
            <div className='type-of-block'>
              <div className=' pl-8 md:pl-16 lg:pl-20'>
                <p className='text-[#505bfe] pb-8 text-xl'>
                  We're always on the lookout for like-minded talent.
                </p>
                <p className='text-[#505bfe] pb-8 text-xl'>
                  If you're interested in helping us build cleaner, smarter,
                  better cities – we want to hear from you email
                  <a
                    className='italic text-black hover:font-medium'
                    href='mailto:sabooezone@gmail.com'
                  >
                    {' '}
                    sabooezone@gmail.com
                  </a>
                </p>

                <div className=' text-xl pb-2 '>Be part of a global family</div>
                <div className='text-sm text-[#505bfe]'>
                  <span>
                    From our engineers to our apprentices, it's our people who
                    drive us forward.
                  </span>
                  <br />
                  <span>
                    The SWITCH team is made up of diverse individuals with a
                    shared passion for innovation. Together, we create, develop
                    and deliver market-leading electric vehicles in the UK,
                    India and across the world.
                  </span>
                  <ul className='list-disc pl-6 font-mono'>
                    <li>Global network across 40+ countries</li>
                    <li>Exciting opportunities in the mobility sector</li>
                    <li>Comprehensive apprenticeship programmes</li>
                    <li>Competitive remuneration and benefits</li>
                    <li>Opportunity to make a real difference</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className='w-full bg-no-repeat bg-cover md:w-1/2 h-[40vh] md:h-auto bg-center'
            style={{ backgroundImage: `url(${bannerCotact})` }}
          ></div>
        </div>
      </section>
      <section className='px-8 lg:px-16 my-10 md:my-16 '>
        <div className='text-[#505bfe] text-h2'>Apply for Job</div>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4  my-4'>
          <div className='mb-4'>
            <input
              type='email'
              className='block w-full px-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 py-2 mb-1 text-lg leading-relaxed border-2  border-indigo-700  '
              name='newsletteryouremail'
              id='emailAddress'
              placeholder='Enter your email address here'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='block w-full px-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 py-2 mb-1 text-lg leading-relaxed border-2  border-indigo-700  '
              name=''
              id=''
              placeholder='Enter your name here'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='block w-full px-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 py-2 mb-1 text-lg leading-relaxed border-2  border-indigo-700  '
              name=''
              id=''
              placeholder='Role you wanted to apply'
            />
          </div>
          <div className='mb-4'>
            <input
              type='file'
              className='block w-full px-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 py-1 mb-1 text-lg leading-relaxed border-2  border-indigo-700  '
              name=''
              accept='application/pdf'
              id=''
              placeholder='Resume'
            />
          </div>
        </div>
        <button className='relative px-6 py-2 text-xl  overflow-hidden font-medium text-indigo-500 border-[2px] border-indigo-700 shadow-inner group'>
          <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-1 border-indigo-400 group-hover:w-full ease'></span>
          <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-1 border-indigo-400 group-hover:w-full ease'></span>
          <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
          <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
          <span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100'></span>
          <span className='relative transition-colors duration-300 delay-200 group-hover:text-indigo-500 ease'>
            SUBMIT
          </span>
        </button>
      </section>
    </>
  );
};

export default Careers;
