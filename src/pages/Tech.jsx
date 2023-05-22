import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import patternWhite from '../assets/other/pattern-grid-white.png';
import techPlay from '../assets/video/tech-animation.mp4';
import lightweight from '../assets/other/ico-tech-monocoque.svg';
import BespokeBattery from '../assets/other/ico-tech-bespoke-battery.svg';
import AIpoweredDigitalTwin from '../assets/other/ico-tech-digital-twin.svg';
import icoTechBig from '../assets/other/ico-tech-big-data.svg';
import controlYourfleet from '../assets/other/ico-tech-i-alert.svg';
import smartIneraction from '../assets/other/ico-tech-smart-interactions.svg';
import upgradableOverTheAir from '../assets/other/ico-tech-upgradable.svg';
import eMobilityService from '../assets/other/ico-tech-emobility.svg';

import blackSvg from '../assets/other/pattern-black.svg';

const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className='bg-[#edede6] grid min-h-[60vh] lg:min-h-[80vh] place-items-center  text-white '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className=' text-[#505bfe]  font-mono' data-aos='fade-up'>
          <div
            className='text-3xl md:text-4xl lg:text-5xl   flex justify-center text-center  '
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            A connected world
          </div>
          <div
            className=' lg:text-2xl text-xl text-center pt-4 font-mono '
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            Intelligent systems, net zero by design.
          </div>
        </div>
      </section>
      <section className='generic-padding '>
        <div className='container-fluid'>
          <div className='md:p-10 p-3'>
            <video
              width='100%'
              preload='metadata'
              loop
              autoPlay
              playsinline
              muted
              className='d-block'
            >
              <source src={techPlay} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className=' bg-[#edede6]'>
        <div
          className='sm:py-20 py-10 md:px-16 sm:px-10 px-5 grid grid-cols-1 md:grid-cols-6 font-roboto'
          data-aos='fade-up'
        >
          <div
            className='text-2xl text-indigo-600 md:col-span-4 lg:col-span-3'
            data-aos='fade-up'
          >
            <p className=' mb-8'>
              With the world changing rapidly, our research and proprietary
              technologies are helping us stay ahead of the curve.
            </p>
            <p className=''>
              We’ve designed everything from the ground up to be net zero and
              achieve the lowest possible TCO. Discover the tech behind our
              smart vehicles.
            </p>
          </div>
        </div>
      </section>

      <section className=' mx-5'>
        <div className='flex flex-col'>
          <div className='flex md:mx-12 lg:mx-20 md:gap-3 lg:gap-20 gap-2 md:flex-row flex-col mt-10 mb-12 '>
            <div className='md:w-1/3 w-full '>
              <div className='' data-aos='fade-up' data-aos-delay='100'>
                <h3 className='flex py-4'>
                  <img
                    src={lightweight}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Icon'
                  />
                  <span className='text-indigo-700 text-2xl px-2 whitespace-nowrap'>
                    Lightweight Monocoque Material
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-robototext-justify '>
                    Strong, ultra-lightweight and made from a high proportion of
                    plant-based composites. The self-coloured body panels
                    eliminate the need for paint process during manufacturing,
                    and make replacements and repairs more efficient. SWITCH
                    materials do not degrade over time meaning a longer life for
                    your vehicle.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 w-full '>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <h3 className='flex py-4'>
                  <img
                    src={BespokeBattery}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Bespoke Battery Technology'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    Bespoke Battery Technology
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    Build your own range. We offer the latest innovations in
                    battery design, built to meet your exact needs. Our modular
                    batteries are integrated into the vehicle structure with a
                    wide variety of options, allowing you to choose how long you
                    want to keep going.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 w-full'>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h3 className='flex py-4'>
                  <img
                    src={AIpoweredDigitalTwin}
                    className='icon'
                    width='40'
                    height='40'
                    alt='AI powered Digital Twin'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    AI powered Digital Twin
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    All SWITCH designed products have a digital twin (a virtual
                    replica of a physical device). These allow us to monitor,
                    diagnose and continually optimise each and every vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className=' w-[90%] divide-x-8 h-[5px] bg-repeat-x  mx-auto '
            style={{ backgroundImage: `url(${blackSvg})` }}
          ></div>
          <div className='flex md:m-12 lg:mx-20 md:gap-3 lg:gap-20 gap-2 mt-6 md:flex-row flex-col mb-12 '>
            <div className='md:w-1/3 w-full '>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <h3 className='flex py-4'>
                  <img
                    src={icoTechBig}
                    className='icon'
                    width='40'
                    height='40'
                    alt='We use Big Data'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    We use Big Data
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    To get a complete picture of our vehicles, data is vital. We
                    collect and analyse over 2TB of data daily, giving us the
                    insights we need to continuously improve our offering.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 w-full '>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <h3 className='flex py-4'>
                  <img
                    src={controlYourfleet}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Control your fleet with i-Alert'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    Control your fleet with i-Alert
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    Our i-Alert platform allows our customers to access vehicle
                    tracking and performance remotely. Diagnostics, prognostics
                    and battery management tools for world-class fleet
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 w-full '>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <h3 className='flex py-4'>
                  <img
                    src={smartIneraction}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Smart interactions'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    Smart interactions
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    From speed restrictions to automatic emergency braking, our
                    vehicles communicate with the world around them to ensure
                    the highest levels of safety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
           className=' w-[90%] divide-x-8 h-[5px] bg-repeat-x  mx-auto '
            style={{ backgroundImage: `url(${blackSvg})` }}
          ></div>
          <div className='flex md:m-12 lg:mx-20 md:gap-3 lg:gap-20 gap-2 mt-6 md:flex-row flex-col '>
            <div className='md:w-1/3 w-full  '>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <h3 className='flex py-4'>
                  <img
                    src={upgradableOverTheAir}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Upgradable over the air'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    Upgradable over-the-air
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    We provide over-the-air updates for our software meaning our
                    clients always have the latest optimisations instantly,
                    without the need to visit a service centre.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 w-full mb-10  '>
              <div
                className='icon-block'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <h3 className='flex py-4'>
                  <img
                    src={eMobilityService}
                    className='icon'
                    width='40'
                    height='40'
                    alt='eMobility as a Service'
                  />
                  <span className='text-indigo-700 text-2xl px-2'>
                    eMobility as a Service
                  </span>
                </h3>
                <div>
                  <p className=' text-sm font-roboto'>
                    (Or eMaaS for short.) SWITCH provides a pay as you go
                    option. We take care of the vehicles and their maintenance,
                    so that you can focus on the most important things to you –
                    transporting passengers or goods safely and efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 w-full '></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
