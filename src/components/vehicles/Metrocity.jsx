import React from 'react';
import homeBanner from '../../assets/vehicle/metrocity/metrocity-home-banner.jpg';
import logoMetrocity from '../../assets/vehicle/metrocity/metrocity-logo-white.png';
// import video from "../../assets/video/FIRST_YORK _B-ROLL.mp4"
import homeMobileBanner from '../../assets/vehicle/metrocity/metrocity-banner-mobile1.jpg';
import metrocityFirstBritish from '../../assets/vehicle/metrocity/metrocity-first-british.jpg';
import metrocityEfficient from '../../assets/vehicle/metrocity/metrocity-efficient-class.jpg';

const Metrocity = () => {
  return (
    <>
      <section>
        <div
          className='hidden h-[95vh] w-full bg-cover  bg-center bg-no-repeat contrast-125 saturate-200 md:block'
          style={{ backgroundImage: `url(${homeBanner})` }}
        ></div>
        <div
          className='block h-[92vh] w-full bg-cover bg-center bg-no-repeat md:hidden  md:contrast-125  '
          style={{ backgroundImage: `url(${homeMobileBanner})` }}
        ></div>

        <div className='xs:bottom-2 absolute bottom-1 h-[30%] w-full bg-gradient-to-t from-[#292828] sm:bottom-2  md:-bottom-9 md:h-[20%]'></div>
        <div className='absolute bottom-10 left-1/2 -ml-4 hidden md:block '>
          <div className='flex h-14 w-8   items-end justify-center rounded-full border-2 '>
            <div className='mb-1 h-4 w-1 animate-bounce rounded-full border-2 bg-white '></div>
          </div>
          <div className='mt-1 flex animate-bounce justify-center '>
            <div className='h-4 w-4  rotate-45 border-b-2 border-r-2'></div>
          </div>
        </div>
        <img
          src={logoMetrocity}
          alt=''
          srcset=''
          className='absolute bottom-10 left-4  h-8 brightness-200 contrast-200 sm:h-10 md:h-12 lg:left-6 lg:h-14 xl:left-10 xl:h-16 '
        />
      </section>
      <section className='mt-2 flex flex-col-reverse bg-[#16b895] text-white lg:flex-row'>
        {/* <span>The bus you've been waiting for.</span> */}
        <div
          className=' hidden w-full bg-cover bg-center pb-2 lg:block lg:w-2/3'
          style={{ backgroundImage: `url(${metrocityFirstBritish})` }}
        ></div>
        <div className='flex w-full flex-col   justify-center p-4 lg:h-[75vh]  lg:w-1/3 2xl:h-[80vh]  '>
          <div className='mb-6 p-4 text-4xl  '>
            The first British-built EV in London
          </div>
          <img
            src={metrocityFirstBritish}
            alt='Metrodecker Lightest'
            srcset=''
            className='p-4 lg:hidden '
          />
          <div className='px-4 pb-4 text-justify font-roboto lg:pb-0 2xl:text-lg'>
            The SWITCH metrocity was the first British-built, pure electric bus
            to enter service on London’s roads in 2014. Since then, it has been
            helping cities around the world move with ease and meet their net
            zero targets. Whether it’s a crowded city street or an open road,
            the SWITCH metrocity can help you get where you need to go in the
            most efficient way possible - without harming the environment.
            <br />
            <br />
            Its versatile design, unbeatable efficiency and 100% electric
            drivetrain have made it a firm favourite on routes across the UK,
            Europe, and Japan.
          </div>
        </div>
      </section>
      <section className='mt-2 flex flex-col-reverse md:flex-row  '>
        {/* <span>The bus you've been waiting for.</span> */}
        <div className='flex w-full flex-col   justify-center  md:w-1/2 md:p-14 lg:p-20 xl:py-28 xl:pl-28 2xl:h-[70vh] '>
          <div className='mb-6 px-4 pt-4  text-4xl font-medium md:p-4 lg:text-5xl '>
            More miles, less impact
          </div>
          <img
            src={metrocityEfficient}
            alt='Metrodecker Lightest'
            srcset=''
            className='pb-6 md:hidden '
          />
          <div className='px-4 text-justify font-roboto 2xl:text-lg'>
            From the city to the suburbs, the SWITCH metrocity is the ideal
            single-deck bus for all urban environments.
            <br />
            <br />
            At just 7.8-8.8 tonnes and fitted with the latest NMC battery
            technology, the SWITCH metrocity is the most efficient bus in its
            class. It can travel up to 190 miles on a single charge, with a full
            charge complete in just three hours.
            <br />
            <br />
            Whether it’s a crowded city street or an open road, the SWITCH
            metrocity can help you get where you need to go in the most
            efficient way possible - without harming the environment.
            <br />
            <br />
          </div>
          <button className='m-4 w-min whitespace-nowrap bg-[#515ef5] px-4 py-2 text-left text-white hover:bg-[#20c997] '>
            ENQUIRE NOW
          </button>
        </div>
        <div
          className=' hidden w-full bg-cover bg-center pb-2 md:block md:w-1/2'
          style={{ backgroundImage: `url(${metrocityEfficient})` }}
        ></div>
      </section>
      <div className='fixed -right-44 top-1/2 -rotate-90 duration-300 hover:-right-36 md:-right-36  '>
        <button className='m-2 w-min whitespace-nowrap  bg-[#20c997] px-4 py-2  text-white lg:hover:bg-[#515ef5] '>
          Download Brochure
        </button>
        <button className='m-2 w-min whitespace-nowrap  bg-[#515ef5] px-4 py-2  text-white lg:hover:bg-[#20c997] '>
          ENQUIRE NOW
        </button>
      </div>
    </>
  );
};

export default Metrocity;
