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
        <div className='flex  flex-col justify-between  md:flex-row xl:h-[80%]'>
          <div className='py-10 font-roboto md:w-1/2 md:pr-2'>
            <div className='pb-4  pl-8 pr-2 pt-12 text-left text-4xl md:pl-16 lg:pb-8 lg:pl-20'>
              SWITCH up your career
            </div>
            <div className='type-of-block'>
              <div className=' pl-8 md:pl-16 lg:pl-20'>
                <p className='pb-8 text-xl text-[#505bfe]'>
                  We're always on the lookout for like-minded talent.
                </p>
                <p className='pb-8 text-xl text-[#505bfe]'>
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

                <div className=' pb-2 text-xl '>Be part of a global family</div>
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
                    {/* <li>Global network across 40+ countries</li> */}
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
            className='h-[40vh] w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2'
            style={{ backgroundImage: `url(${bannerCotact})` }}
          ></div>
        </div>
      </section>
      <section className='my-10 px-8 md:my-16 lg:px-16 '>
        <div className='text-h2 text-[#505bfe]'>Apply for Job</div>
        <form action=''>
          <div className='my-4 grid gap-4 sm:grid-cols-2  xl:grid-cols-4'>
            <div className='mb-4'>
              <input
                type='email'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-300  '
                name='newsletteryouremail'
                id='emailAddress'
                placeholder='Enter your email address here'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-300  '
                name=''
                id=''
                placeholder='Enter your name here'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-2 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-300  '
                name=''
                id=''
                placeholder='Role you wanted to apply'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='file'
                className='mb-1 block w-full border-2 border-indigo-700 px-2 py-1 text-lg leading-relaxed focus:border-indigo-500 focus:ring-2  focus:ring-indigo-300  '
                name=''
                accept='application/pdf'
                id=''
                placeholder='Resume'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='group relative overflow-hidden border-[2px]  border-indigo-700 px-6 py-2 text-xl font-medium text-indigo-500 shadow-inner'
          >
            <span className='border-t-1 ease absolute left-0 top-0 h-0 w-0 border-indigo-400 transition-all duration-200 group-hover:w-full'></span>
            <span className='border-b-1 ease absolute bottom-0 right-0 h-0 w-0 border-indigo-400 transition-all duration-200 group-hover:w-full'></span>
            <span className='ease absolute left-0 top-0 h-0 w-full bg-indigo-400 transition-all delay-200 duration-300 group-hover:h-full'></span>
            <span className='ease absolute bottom-0 left-0 h-0 w-full bg-indigo-400 transition-all delay-200 duration-300 group-hover:h-full'></span>
            <span className='absolute inset-0 h-full w-full bg-white opacity-0 delay-300 duration-300 group-hover:opacity-100'></span>
            <span className='ease relative transition-colors delay-200 duration-300 group-hover:text-indigo-500'>
              SUBMIT
            </span>
          </button>
        </form>
      </section>
    </>
  );
};

export default Careers;
