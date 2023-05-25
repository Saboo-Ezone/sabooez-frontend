import React, { useEffect } from 'react';
import homeBanner from '../../assets/vehicle/e1/ODIN-banner-img.jpg';
import logoE1 from '../../assets/vehicle/e1/e1-logo.png';
// import video from "../../assets/video/odin_phase_one_film_online.mp4"
import homeMobileBanner from '../../assets/vehicle/e1/main-mobile-banner.jpg';
import subBanner from '../../assets/vehicle/e1/sub-banner1.jpg';
import perfectEngine from '../../assets/vehicle/e1/perfect-engn-img.jpg';
import largeImage from '../../assets/vehicle/e1/sub-banner-largeImage.jpg';
import odinGalleryImg1 from '../../assets/vehicle/e1/odinGalleryImg1.jpg';
import odinGalleryImg2 from '../../assets/vehicle/e1/odinGalleryImg2.jpg';
import odinGalleryImg3 from '../../assets/vehicle/e1/odinGalleryImg3.jpg';
import odinGalleryImg4 from '../../assets/vehicle/e1/odinGalleryImg4.jpg';
import odinGalleryImg5 from '../../assets/vehicle/e1/odinGalleryImg5.jpg';
import odinGalleryImg6 from '../../assets/vehicle/e1/odinGalleryImg6.jpg';
import odinGalleryImg7 from '../../assets/vehicle/e1/odinGalleryImg7.jpg';

// import patternGreen from '../../assets/other/pattern-green.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import EnquirForm from '../otherComponents/EnquirForm';
import SideButton from '../otherComponents/SideButton';

// import AboutSlider from './AboutSlider';

const SwitchE1 = ({ setShowMyModal }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className='relative'>
        <div
          className='hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat md:block'
          style={{ backgroundImage: `url(${homeBanner})` }}
        ></div>
        <div
          className='block h-[92vh] w-full bg-cover bg-center bg-no-repeat md:hidden '
          style={{ backgroundImage: `url(${homeMobileBanner})` }}
        ></div>
        <div className='absolute bottom-0  h-[30%] w-full bg-gradient-to-t from-[#292828]   md:h-[20%]'></div>
        <div className='absolute bottom-10 left-1/2 -ml-4 hidden md:block '>
          <div className='flex h-14 w-8   items-end justify-center rounded-full border-2 '>
            <div className='mb-1 h-4 w-1 animate-bounce rounded-full border-2 bg-white '></div>
          </div>

          <div className='mt-1 flex animate-bounce justify-center '>
            <div className='h-4 w-4  rotate-45 border-b-2 border-r-2'></div>
          </div>
        </div>
        <img
          src={logoE1}
          alt=''
          srcset=''
          className='absolute bottom-10 left-4 h-12 lg:left-6 lg:h-16 xl:left-10'
        />
      </section>
      <EnquirForm />
      <section className='mt-2 flex overflow-hidden'>
        <div className='flex h-[30vh] w-3/6  md:h-[40vh] lg:h-[60vh]  2xl:h-[80vh] '>
          <div className='w-1/3 bg-gradient-to-b from-[#16b895] to-white'></div>
          <div
            className=' w-2/3  '
            style={{
              backgroundImage: `url(${subBanner})`,
              // height: '600px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            data-aos='fade-right'
            data-aos-duration='2000'
          ></div>
        </div>
        <div
          className='h-[30vh] w-3/6 md:h-[40vh]  lg:h-[60vh]  2xl:h-[80vh] '
          style={{
            backgroundImage: `url(${largeImage})`,
            // height: '600px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            width: '100%',
          }}
          data-aos='fade-left'
          data-aos-duration='2000'
        >
          <div className='flex flex-col items-end pt-4 md:pr-12 lg:pt-12'>
            <div className='text-2xl  text-white md:text-3xl lg:text-5xl '>
              Next generation.
            </div>
            <div className='text-2xl text-white md:text-3xl lg:text-5xl '>
              For the now generation.
            </div>
          </div>
        </div>
      </section>
      <section className='mt-2 flex flex-col-reverse md:flex-row overflow-hidden'>
        {/* <span>The bus you've been waiting for.</span> */}
        <div className='flex w-full flex-col justify-center  md:w-1/2 md:p-14 lg:p-20 xl:p-28 2xl:h-[70vh] '>
          <div className='mb-6 p-4  text-4xl lg:font-semibold xl:text-5xl'>
            The bus you've been waiting for.
          </div>
          <img
            src={perfectEngine}
            alt='Perfect Engine'
            srcset=''
            className='pb-4 md:hidden'
            data-aos='fade-left'
            data-aos-duration='1000'
          />
          <div className='px-4 text-justify font-roboto 2xl:text-xl'>
            Putting our customers first, SWITCH e1 is the next generation bus
            built for a sustainable future. Designed, engineered and built by
            SWITCH, a certified carbon-neutral manufacturer, in a brand-new
            European manufacturing facility, it has been designed to meet our
            customer's needs.
            <br />
            <br />
            At 12m, SWITCH e1 is our first fully electric bus designed
            specifically for the European market.
            <br />
            <br />
            The newest NMC powerpack technology reduces mass, increases
            efficiency and delivers increased range per kg. A lightweight
            integrated chassis and body construction improves efficiency,
            delivering the lowest TCO for operators and helping achieve their
            net-zero targets.
            <br />
            <br />
          </div>
          <button className='m-4 w-min whitespace-nowrap bg-[#515ef5] px-4 py-2 text-left text-white hover:bg-[#20c997] '>
            ENQUIRE NOW
          </button>
        </div>
        <div
          className=' hidden w-full bg-cover bg-center md:block md:w-1/2'
          data-aos='fade-left'
          data-aos-duration='1000'
          style={{ backgroundImage: `url(${perfectEngine})` }}

        ></div>
      </section>
      <section className='video-container mt-2'>
        <video
          width='100%'
          preload='metadata'
          loop
          autoPlay
          playsinline
          muted
          className='d-block'
        >
          <source
            src='https://d2dg8z6chpdy03.cloudfront.net/odin_phase_one_film_online.mp4'
            type='video/mp4'
          />
          {/* <source src={video} type='video/mp4' /> */}
          Your browser does not support the video tag.
        </video>
      </section>
      <section className='  flex flex-col md:flex-row '>
        <div
          className=' h-[40vh] w-full border-4 bg-cover bg-center bg-no-repeat md:h-[60vh] md:w-1/2'
          style={{ backgroundImage: `url(${odinGalleryImg1})` }}
        ></div>
        <div className='h-[70vh] w-full md:h-[60vh] md:w-1/2 '>
          <div
            className='h-[40vh] w-full border-4 bg-cover bg-center bg-no-repeat md:h-[30vh]'
            style={{ backgroundImage: `url(${odinGalleryImg2})` }}
          ></div>
          <div className='flex h-[30vh] md:h-[40vh] '>
            <div
              className='h-[30vh] w-1/3 border-4 bg-cover bg-center md:h-[30vh]'
              style={{ backgroundImage: `url(${odinGalleryImg3})` }}
            ></div>
            <div className='h-[30vh] w-1/3 md:h-[40vh]'>
              <div
                className='h-[15vh] w-full border-2 bg-cover bg-center md:h-[15vh]'
                style={{ backgroundImage: `url(${odinGalleryImg4})` }}
              ></div>
              <div
                className='h-[15vh] w-full border-2 border-b-4 bg-cover bg-center md:h-[15vh]'
                style={{ backgroundImage: `url(${odinGalleryImg5})` }}
              ></div>
            </div>
            <div className='h-[30vh] w-1/3 md:h-[40vh]'>
              <div
                className='h-[15vh] w-full border-2 bg-cover bg-center md:h-[15vh]'
                style={{ backgroundImage: `url(${odinGalleryImg6})` }}
              ></div>
              <div
                className='h-[15vh] w-full border-2 border-b-4 bg-cover bg-center md:h-[15vh]'
                style={{ backgroundImage: `url(${odinGalleryImg7})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <SideButton setShowMyModal={setShowMyModal} />
    </>
  );
};

export default SwitchE1;
