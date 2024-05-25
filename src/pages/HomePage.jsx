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
    <>
      <section>
        <Slider />
      </section>

      <section className=' w-full bg-[#edede6] bg-opacity-75'>
        <div className='mx-4 md:mx-8 lg:mx-16 '>
          <div
            className='pt-8 tracking-wide text-h3 md:pt-16 md:text-h2 lg:pb-4 lg:text-h1 '
            data-aos='fade-up'
          >
            Cleaner, smarter journeys
            <br />
            Cleaner, connected cities
          </div>

          <div
            className='my-8 h-[5px]  w-full bg-cover bg-no-repeat  lg:my-10'
            style={{ backgroundImage: `url(${blueSvg})` }}
          ></div>

          <div
            className='grid pb-8 md:pb-16 lg:grid-cols-2'
            data-aos='fade-up'
            data-aos-delay='200'
            data-editor-processed='true'
          >
            <div className='col-span-1 pb-4 font-roboto lg:pr-16'>
              At SWITCH, we're working with cities across the world to make
              everyday life better. Our carbon neutral transport solutions are
              built with your whole community in mind.
            </div>
            <div className='col-span-1 font-mono text-xl text-[#505bfe] lg:text-end  lg:text-2xl'>
              A carbon neutral certified company
            </div>
          </div>
        </div>
      </section>
      <section data-aos='fade-in' data-aos-delay='200'>
        <video
          width='100%'
          preload='metadata'
          loop
          autoPlay
          playsInline
          muted
          className='d-block'
        >
          <source src={vBuss} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className=' w-full bg-[#edede6] bg-opacity-75'>
        <div className='mx-4 md:mx-8 lg:mx-16'>
          <div
            className='pt-8 pb-4 tracking-wide text-h3 md:pt-16 md:text-h2 lg:pb-4 lg:text-h1 '
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Leading the charge
          </div>

          <div
            className='grid pb-4 lg:grid-cols-2 lg:pb-8'
            data-aos='fade-up'
            data-aos-delay='200'
            data-editor-processed='true'
          >
            <div className='col-span-1 pb-4 font-roboto lg:pr-16'>
              In 2014, we introduced the first British built, pure electric
              buses to London’s roads. Since then, we’ve clocked over 30 million
              electric miles.
            </div>
            <div className='col-span-1 font-mono text-xl text-[#505bfe] lg:text-end  lg:text-2xl'>
              Explore our current range
            </div>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='300'>
              <div className='mb-5 font-mono text-h4'>SWITCH e1</div>
              <div className='overflow-hidden h-80'>
                <img
                  src={switch_e1}
                  alt='SWITCH e1'
                  className='object-cover w-full duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex items-center justify-between px-2 py-2 text-white'
                  to='/e1'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-3xl lg:text-4xl' />
                </Link>
              </div>
            </div>

            <div className='mb-5' data-aos='fade-in' data-aos-delay='400'>
              <div className='mb-5 font-mono text-h4'>Metrodecker</div>
              <div className='overflow-hidden h-80'>
                <img
                  src={metrodecker}
                  alt='SWITCH Metrodecker'
                  className='object-cover w-full duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex items-center justify-between px-2 py-2 text-white'
                  to='/metrodecker'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-3xl lg:text-4xl' />
                </Link>
              </div>
            </div>

            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='500'>
              <div className='mb-5 font-mono text-h4'>Metrocity</div>
              <div className='overflow-hidden h-80'>
                <img
                  src={metrocity}
                  alt='SWITCH EiV 22'
                  className='object-cover w-full duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex items-center justify-between px-2 py-2 text-white '
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
      <section className='flex flex-col mb-1 overflow-hidden bg-emerald-500 md:flex-row'>
        <div
          className='h-[45vh] w-full bg-cover bg-center bg-no-repeat md:h-[65vh] md:w-1/2'
          style={{ backgroundImage: `url(${bannerTech})` }}
          data-aos='fade-right'
          data-aos-delay='200'
        ></div>
        <div
          style={{ backgroundImage: `url(${patternGreen})` }}
          className='flex h-[45vh] w-full flex-col justify-between p-6 text-white sm:p-8 md:h-[65vh] md:w-1/2 lg:p-12'
        >
          <div className='flex flex-wrap items-center justify-between'>
            <div className='text-h1' data-aos='fade-up' data-aos-delay='100'>
              A Connected World
            </div>
            <div data-aos='fade-up' data-aos-delay='200'>
              TECHNOLOGY
            </div>
          </div>
          <div
            className='flex flex-col justify-between xl:flex-row '
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <div className='text-lg xl:pr-6'>
              Powered by SWITCH proprietary tech and the latest innovations in
              electromobility.
            </div>
            <div
              className='pb-10 mt-6 whitespace-nowrap'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <Link
                to='/tech'
                className='group relative overflow-hidden border-[2px]  border-gray-100 px-6 py-2 text-xl font-medium text-white shadow-inner'
              >
                <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-indigo-400 border-t-1 ease group-hover:w-full'></span>
                <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-indigo-400 border-b-1 ease group-hover:w-full'></span>
                <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 ease group-hover:h-full'></span>
                <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-indigo-400 ease group-hover:h-full'></span>
                <span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100'></span>
                <span className='relative transition-colors duration-300 delay-200 ease group-hover:text-indigo-500'>
                  DISCOVER
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center mb-1 '>
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
        className='flex min-h-[70vh] items-center bg-[#505bfe] py-6 text-center text-white'
        style={{ backgroundImage: `url(${patternPng})` }}
      >
        <div className='container mx-auto'>
          <div className='section-heading' data-aos='fade-up'>
            <h2
              className='pb-6 text-3xl lg:text-5xl'
              data-editor-processed='true'
            >
              SWITCH Up
            </h2>
            <p
              className='pb-10 font-mono text-xl font-medium lg:text-2xl '
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
            className='group relative overflow-hidden border-[2px] border-gray-100 px-8 py-2 text-xl font-medium text-white shadow-inner lg:text-2xl'
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-indigo-400 ease group-hover:w-full'></span>
            <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-indigo-400 ease group-hover:w-full'></span>
            <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-100 bg-indigo-400 ease group-hover:h-full'></span>
            <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-100 bg-indigo-400 ease group-hover:h-full'></span>
            <span className='absolute inset-0 w-full h-full duration-300 delay-200 bg-white opacity-0 group-hover:opacity-100'></span>
            <span className='relative transition-colors duration-300 delay-200 ease group-hover:text-indigo-500'>
              OUR STORY
            </span>
          </Link>
        </div>
      </section>

      <section>
        <div
          className='flex flex-col w-full bg-no-repeat md:flex-row'
          style={{ backgroundImage: `url(${patternBoxSvg})` }}
        >
          <div className='w-full py-16 pl-10 mt-4 text-3xl md:w-1/2 md:pl-16 lg:pl-24 xl:pl-28 '>
            <span className='' data-editor-processed='true'>
              We're on a journey.
              <br />
              Will you join us?
            </span>
            <br />
            <span
              className='text-xl '
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              Contact us and be the first to hear about our EV buses and vans.
            </span>
          </div>
          <div className='w-full md:w-1/2'>
            <SubmitForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
