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
    <>
      <section
        className='grid min-h-[60vh] place-items-center bg-[#edede6] text-white  lg:min-h-[80vh] '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className=' font-mono  text-[#505bfe]' data-aos='fade-up'>
          <div
            className='flex justify-center text-center   text-3xl md:text-4xl lg:text-5xl  '
            data-editor-processed='true'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            A connected world
          </div>
          <div
            className=' pt-4 text-center font-mono text-xl lg:text-2xl '
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
          <div className='p-3 md:p-10'>
            <video
              width='100%'
              preload='metadata'
              loop
              autoPlay
              playsInline
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
          className='grid grid-cols-1 py-10 px-4 font-roboto  sm:px-10 sm:py-20 md:grid-cols-6 md:px-16'
          data-aos='fade-up'
        >
          <div
            className='text-2xl  text-indigo-600 md:col-span-4 lg:col-span-3'
            data-aos='fade-up'
          >
            <div className=' mb-8'>
              With the world changing rapidly, our research and proprietary
              technologies are helping us stay ahead of the curve.
            </div>
            <div className=''>
              We’ve designed everything from the ground up to be net zero and
              achieve the lowest possible TCO. Discover the tech behind our
              smart vehicles.
            </div>
          </div>
        </div>
      </section>

      <section className=' mx-5'>
        <div className='flex flex-col'>
          <div className='mb-12 mt-10  flex flex-col gap-2 md:mx-12 md:flex-row md:gap-3 lg:gap-20 '>
            <div className='w-full md:w-1/3 '>
              <div className='' data-aos='fade-up' data-aos-delay='100'>
                <h3 className='flex py-4'>
                  <img
                    src={lightweight}
                    className='icon'
                    width='40'
                    height='40'
                    alt='Icon'
                  />
                  <span className='px-2 text-2xl text-indigo-700 '>
                    Lightweight Monocoque Material
                  </span>
                </h3>
                <div>
                  <div className=' font-robototext-justify text-sm '>
                    Strong, ultra-lightweight and made from a high proportion of
                    plant-based composites. The self-coloured body panels
                    eliminate the need for paint process during manufacturing,
                    and make replacements and repairs more efficient. SWITCH
                    materials do not degrade over time meaning a longer life for
                    your vehicle.
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 '>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    Bespoke Battery Technology
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    Build your own range. We offer the latest innovations in
                    battery design, built to meet your exact needs. Our modular
                    batteries are integrated into the vehicle structure with a
                    wide variety of options, allowing you to choose how long you
                    want to keep going.
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3'>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    AI powered Digital Twin
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    All SWITCH designed products have a digital twin (a virtual
                    replica of a physical device). These allow us to monitor,
                    diagnose and continually optimise each and every vehicle.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className=' mx-auto h-[5px] w-[95%] divide-x-8  bg-repeat-x '
            style={{ backgroundImage: `url(${blackSvg})` }}
          ></div>
          <div className='mb-12 mt-6  flex flex-col gap-2 md:m-12 md:flex-row md:gap-3 lg:gap-20 '>
            <div className='w-full md:w-1/3 '>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    We use Big Data
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    To get a complete picture of our vehicles, data is vital. We
                    collect and analyse over 2TB of data daily, giving us the
                    insights we need to continuously improve our offering.
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 '>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    Control your fleet with i-Alert
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    Our i-Alert platform allows our customers to access vehicle
                    tracking and performance remotely. Diagnostics, prognostics
                    and battery management tools for world-class fleet
                    efficiency.
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 '>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    Smart interactions
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    From speed restrictions to automatic emergency braking, our
                    vehicles communicate with the world around them to ensure
                    the highest levels of safety.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className=' mx-auto h-[5px] w-[95%] divide-x-8  bg-repeat-x '
            style={{ backgroundImage: `url(${blackSvg})` }}
          ></div>
          <div className='mt-6 flex  flex-col gap-2 md:m-12 md:flex-row md:gap-3 lg:gap-20 '>
            <div className='w-full md:w-1/3  '>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    Upgradable over-the-air
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    We provide over-the-air updates for our software meaning our
                    clients always have the latest optimisations instantly,
                    without the need to visit a service centre.
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-10 w-full md:w-1/3  '>
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
                  <span className='px-2 text-2xl text-indigo-700'>
                    eMobility as a Service
                  </span>
                </h3>
                <div>
                  <div className=' font-roboto text-sm'>
                    (Or eMaaS for short.) SWITCH provides a pay as you go
                    option. We take care of the vehicles and their maintenance,
                    so that you can focus on the most important things to you –
                    transporting passengers or goods safely and efficiently.
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 '></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
