import React, { useEffect } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Slider from '../components/otherComponents/Slider';
import blueSvg from '../assets/other/pattern-blue.svg';
import vBuss from '../assets/video/vBUSES.mp4';
import switch_e1 from '../assets/vehicle/e1/e1-vehicle-img.jpg';
import metrodecker from '../assets/vehicle/metrodecker/metrodecker-lightest-bus.jpg';
import metrocity from '../assets/vehicle/metrocity/metrocity-mirror.jpg';
import bannerTech from '../assets/other/banner-tech.jpg';
import patternGreen from '../assets/other/pattern-green.png';
import patternPng from '../assets/other/pattern.png';
import patternBoxSvg from '../assets/other/pattern-box.svg';
import switchInfographic from '../assets/other/Switch-Infographic_updated3860.png';
import switchInfographicupdated from '../assets/other/Switch-Infographic_updated-mob3860.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import SubmitForm from '../components/otherComponents/SubmitForm';

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className=''>
        <Slider />
      </section>

      <section className=' bg-[#edede6] bg-opacity-75 w-full'>
        <div className=' mx-16  '>
          <div
            className='tracking-wide text-h2 lg:text-h1  pt-8  md:pt-16  pb-4  '
            data-aos='fade-up'
          >
            Cleaner, smarter journeys
            <br />
            Cleaner, connected cities
          </div>

          <div
            className=' w-full  h-[5px] bg-no-repeat bg-cover  my-10'
            style={{ backgroundImage: `url(${blueSvg})` }}
          ></div>

          <div
            className=' pb-8 grid lg:grid-cols-2 md:pb-16 '
            data-aos='fade-up'
            data-aos-delay='200'
            data-editor-processed='true'
          >
            <div className='col-span-1 font-roboto lg:pr-16 pb-4'>
              At SWITCH, we're working with cities across the world to make
              everyday life better. Our carbon neutral transport solutions are
              built with your whole community in mind.
            </div>
            <div className='lg:text-end col-span-1 text-[#505bfe] text-2xl md:text-2xl  font-mono'>
              A carbon neutral certified company
            </div>
          </div>
        </div>
      </section>
      <section className='video-container'>
        <video
          width='100%'
          preload='metadata'
          loop
          autoPlay
          playsinline
          muted
          className='d-block'
        >
          <source src={vBuss} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className=' bg-[#edede6] bg-opacity-75 w-full'>
        <div className=' mx-16  '>
          <div
            className='tracking-wide text-h2 lg:text-h1  pt-8  md:pt-16  pb-4  '
            data-aos='fade-up'
          >
            Leading the charge
          </div>

          <div
            className=' pb-8 grid lg:grid-cols-2  '
            data-aos='fade-up'
            data-aos-delay='200'
            data-editor-processed='true'
          >
            <div className='col-span-1 font-roboto lg:pr-16 pb-4'>
              In 2014, we introduced the first British built, pure electric
              buses to London’s roads. Since then, we’ve clocked over 30 million
              electric miles.
            </div>
            <div className='lg:text-end col-span-1 text-[#505bfe] text-2xl md:text-2xl  font-mono'>
              Explore our current range
            </div>
          </div>
          <div className=' pb-8   grid md:grid-cols-2 lg:grid-cols-3 gap-6  sm:grid-cols-2'>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='300'>
              <div className='lg:text-h3 xl:text-h2 text-h5 my-5'>
                <div>SWITCH e1</div>
              </div>
              <div className=' overflow-hidden  '>
                <img
                  src={switch_e1}
                  alt='SWITCH e1'
                  className='hover:scale-105 ease-in duration-300 h-60 lg:h-full w-full object-cover'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex justify-between items-center px-2  py-2 text-white'
                  to='/e1'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-3xl lg:text-4xl' />
                </Link>
              </div>
            </div>

            <div className='mb-5' data-aos='fade-in' data-aos-delay='400'>
              <div className='lg:text-h3 xl:text-h2 text-h5 my-5'>
                <div>SWITCH Metrodecker</div>
              </div>
              <div className=' overflow-hidden '>
                <img
                  src={metrodecker}
                  alt='SWITCH Metrodecker'
                  className='hover:scale-105 ease-in duration-300 h-60 lg:h-full w-full object-cover'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex justify-between items-center px-2  py-2 text-white'
                  to='/metrodecker'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-3xl lg:text-4xl' />
                </Link>
              </div>
            </div>

            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='500'>
              <div className='lg:text-h3 xl:text-h2 text-h5 my-5'>
                <div>SWITCH Metrocity</div>
              </div>
              <div className=' overflow-hidden  '>
                <img
                  src={metrocity}
                  alt='SWITCH EiV 22'
                  className='hover:scale-105 ease-in duration-300 h-60 lg:h-full w-full object-cover'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex justify-between items-center px-2  py-2 text-white '
                  to='/metrocity'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-3xl lg:text-4xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='flex flex-col md:flex-row bg-emerald-500 mb-1 '>
        <div
          class='w-full md:w-1/2 h-[45vh] md:h-[65vh] bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${bannerTech})` }}
        ></div>
        <div
          style={{ backgroundImage: `url(${patternGreen})` }}
          class='w-full md:w-1/2 h-[45vh] md:h-[65vh] flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white'
        >
          <div className='flex flex-wrap justify-between items-center'>
            <div className='text-h1' data-aos='fade-up' data-aos-delay='100'>
              A Connected World
            </div>
            <div data-aos='fade-up' data-aos-delay='200'>
              TECHNOLOGY
            </div>
          </div>
          <div
            className='flex flex-col xl:flex-row justify-between '
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <div className='text-lg xl:pr-6'>
              Powered by SWITCH proprietary tech and the latest innovations in
              electromobility.
            </div>
            <div
              className=' pb-10 mt-6 whitespace-nowrap'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <Link
                to='/tech'
                className='relative px-6 py-2 text-xl  overflow-hidden font-medium text-white border-[2px] border-gray-100 shadow-inner group'
              >
                <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-1 border-indigo-400 group-hover:w-full ease'></span>
                <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-1 border-indigo-400 group-hover:w-full ease'></span>
                <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
                <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 group-hover:h-full ease'></span>
                <span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100'></span>
                <span className='relative transition-colors duration-300 delay-200 group-hover:text-indigo-500 ease'>
                  DISCOVER
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-1 flex justify-center'>
        <img
          src={switchInfographic}
          className='hidden sm:block'
          alt='Switch infographic'
        />

        <img
          src={switchInfographicupdated}
          className='block w-full sm:hidden'
          alt='switchInfographicupdated'
        />
      </section>
      <section
        className='py-6 bg-[#505bfe] text-center text-white flex items-center min-h-[70vh]'
        style={{ backgroundImage: `url(${patternPng})` }}
      >
        <div className='container mx-auto'>
          <div className='section-heading' data-aos='fade-up'>
            <h2
              className='text-3xl lg:text-5xl    pb-6'
              data-editor-processed='true'
            >
              SWITCH Up
            </h2>
            <p
              className='text-xl lg:text-2xl font-medium pb-10 font-mono  '
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              Mobility innovation backed by over 100 years of experience. <br />
              Find out how we're switching things up.
            </p>
          </div>

          <Link
            to='/about'
            class='relative px-8 py-2 text-xl lg:text-2xl overflow-hidden font-medium text-white border-[2px] border-gray-100 shadow-inner group'
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <span class='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-400 group-hover:w-full ease'></span>
            <span class='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-400 group-hover:w-full ease'></span>
            <span class='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-100 bg-indigo-400 group-hover:h-full ease'></span>
            <span class='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-100 bg-indigo-400 group-hover:h-full ease'></span>
            <span class='absolute inset-0 w-full h-full duration-300 delay-200 bg-white opacity-0 group-hover:opacity-100'></span>
            <span class='relative transition-colors duration-300 delay-200 group-hover:text-indigo-500 ease'>
              OUR STORY
            </span>
          </Link>
        </div>
      </section>
      <section
        className='intro-newsletter generic-padding flex bg-no-repeat mt-4'
        style={{ backgroundImage: `url(${patternBoxSvg})` }}
      >
        <div className='container  max-w-full mx-auto sm:px-2'>
          <div className='flex flex-wrap justify-around '>
            <div className='w-4/5 md:w-2/5  xl:w-2/5 pr-2 md:pr-4 md:pl-4 mb-4 mt-8 offset-1 xl:mx-1/5 '>
              <div
                className='text-3xl lg:text-5xl md:pt-12 pt-4 md:pl-12 pb-12'
                data-aos='fade-up'
              >
                <h2 className='title' data-editor-processed='true'>
                  We're on a journey.
                  <br />
                  Will you join us?
                </h2>
              </div>
              <h4
                className='  md:pl-12  text-xl '
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                Contact us and be the first to hear about our EV buses and vans.
              </h4>
            </div>

            <div
              data-aos='fade-up'
              data-aos-delay='300'
              className='md:w-1/2 md:px-4 px-5 xl:w-1/3 xl:mx-1/6 xl:pl-0'
            >
             <SubmitForm/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
