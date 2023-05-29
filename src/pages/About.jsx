import React, { useEffect } from 'react';
import videoPlay from '../assets/video/company-animation-v2.mp4';
import backImage from '../assets/other/banner-company.jpg';

import patternGreen from '../assets/other/pattern-green.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import AboutSlider from './AboutSlider';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        className='grid min-h-[70vh] place-items-center bg-emerald-500 text-white  lg:min-h-[84vh] '
        style={{ backgroundImage: `url(${patternGreen})` }}
      >
        <div className=' ' data-aos='fade-up'>
          <div
            className='flex justify-center text-center   text-3xl md:text-4xl lg:text-6xl  '
            data-editor-processed='true'
          >
            Hello, we're SABOO eZONE
          </div>
          <div
            className='pt-4  text-center font-mono text-lg md:text-xl lg:text-3xl'
            data-editor-processed='true'
          >
            A next-generation electric vehicle company backed by over 50 years
            of experience.
          </div>
        </div>
      </section>
      <section className='bg-color-blue company-animation-wrapper my-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='col-md-6 company-animation'>
            <div className='embed-responsive embed-responsive-16by9'>
              <video
                autoPlay
                loop
                muted
                playsInline
                width='100%'
                preload='metadata'
                className='d-block'
              >
                <source src={videoPlay} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className='min-h-[40vh] bg-cover bg-no-repeat md:h-auto lg:h-auto'
            style={{ backgroundImage: `url(${backImage})` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default About;
