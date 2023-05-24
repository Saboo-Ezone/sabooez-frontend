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
// import AboutSlider from './AboutSlider';

const SwitchE1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section>
        <div
          className='hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat md:block'
          style={{ backgroundImage: `url(${homeBanner})` }}
        ></div>
        <div
          className='block h-[95vh] w-full bg-cover bg-center bg-no-repeat md:hidden '
          style={{ backgroundImage: `url(${homeMobileBanner})` }}
        ></div>
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
      <section className='flex overflow-hidden'>
        <div className='flex  h-[60vh] lg:w-3/6  2xl:h-screen '>
          <div className='bg-gradient-to-b from-[#16b895] to-white lg:w-1/3'></div>
          <div
            className='hidden w-full lg:block lg:w-2/3  '
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
          className='h-[60vh] w-full lg:w-3/6  2xl:h-screen '
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
          <div className='flex flex-col items-end pt-12 md:pr-12'>
            <div className='text-xl text-white md:text-3xl lg:text-5xl '>
              Next generation.
            </div>
            <div className='text-xl text-white md:text-3xl lg:text-5xl '>
              For the now generation.
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col-reverse md:flex-row '>
        {/* <span>The bus you've been waiting for.</span> */}
        <div className='flex w-full flex-col justify-center md:p-14 md:w-1/2 lg:p-20 xl:p-28 2xl:h-[70vh] p-4 '>
          <div className='mb-6 text-4xl  font-semibold xl:text-5xl'>
            The bus you've been waiting for.
          </div>
          <img src={perfectEngine} alt='' srcset='' className='md:hidden' />
          <div className='text-justify font-roboto xl:text-xl'>
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
          <button className='w-min whitespace-nowrap bg-[#515ef5] px-4 py-2 text-left text-white hover:bg-[#20c997] '>
            ENQUIRE NOW
          </button>
        </div>
        <div
          className=' hidden w-full bg-cover bg-center md:block md:w-1/2'
          style={{ backgroundImage: `url(${perfectEngine})` }}
        ></div>
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
          <source
            src='https://d2dg8z6chpdy03.cloudfront.net/odin_phase_one_film_online.mp4'
            type='video/mp4'
          />
          {/* <source src={video} type='video/mp4' /> */}
          Your browser does not support the video tag.
        </video>
      </section>
      {/* <section>
        <div className='grid md:grid-cols-2 gap-2'>
          <div className='grid-cols-1'><img src={odinGalleryImg1} alt="" srcset="" /></div>
          <div className='grid-cols-1'>
            <div><img src={odinGalleryImg2} alt="" srcset="" /></div>
            <div className='col-span-3 grid gap-2'>
              <div className='grid-cols-1'><img src={odinGalleryImg3} alt="" srcset="" /></div>
              <div className='grid-cols-1 gap-2'>
                <div><img src={odinGalleryImg4} alt="" srcset="" /></div>
                <div><img src={odinGalleryImg5} alt="" srcset="" /></div>
              </div>
              <div className='grid-cols-1 gap-2'>
                <div ><img src={odinGalleryImg6} alt="" srcset="" /></div>
                <div><img src={odinGalleryImg7} alt="" srcset="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className='flex flex-col gap-2 md:flex-row h-[60vh]'>
          <div className='w-full md:w-1/2 h-full md:h-[60vh] '>
            <img src={odinGalleryImg1} alt='' srcset='' />
          </div>
          <div className='flex w-full flex-col md:w-1/2 md:h-[60vh]'>
            <div className='h-[30vh]'>
              <img src={odinGalleryImg2} alt='' srcset='' />
            </div>
            <div className='flex'>
              <div className='grid-cols-1'>
                <img src={odinGalleryImg3} alt='' srcset='' />
              </div>
              <div className='grid-cols-1 gap-2'>
                <div>
                  <img src={odinGalleryImg4} alt='' srcset='' />
                </div>
                <div>
                  <img src={odinGalleryImg5} alt='' srcset='' />
                </div>
              </div>
              <div className='grid-cols-1 gap-2'>
                <div>
                  <img src={odinGalleryImg6} alt='' srcset='' />
                </div>
                <div>
                  <img src={odinGalleryImg7} alt='' srcset='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='  flex flex-col md:flex-row '>
        <div
          className=' h-[40vh] w-full border-4 bg-cover bg-center bg-no-repeat md:h-[80vh] md:w-1/2'
          style={{ backgroundImage: `url(${odinGalleryImg1})` }}
        ></div>
        <div className='h-[70vh] w-full md:h-[80vh] md:w-1/2 '>
          <div
            className='h-[40vh] w-full border-4 bg-cover bg-center bg-no-repeat md:h-[40vh]'
            style={{ backgroundImage: `url(${odinGalleryImg2})` }}
          ></div>
          <div className='flex h-[30vh] md:h-[40vh] '>
            <div
              className='h-[30vh] md:h-[40vh] w-1/3 border-4 bg-cover bg-center'
              style={{ backgroundImage: `url(${odinGalleryImg3})` }}
            ></div>
            <div className='h-[30vh] md:h-[40vh] w-1/3'>
              <div
                className='h-[15vh] md:h-[20vh] w-full border-2 bg-cover bg-center'
                style={{ backgroundImage: `url(${odinGalleryImg4})` }}
              ></div>
              <div
                className='h-[15vh] md:h-[20vh] w-full border-2 bg-cover bg-center border-b-4'
                style={{ backgroundImage: `url(${odinGalleryImg5})` }}
              ></div>
            </div>
            <div className='h-[30vh] md:h-[40vh] w-1/3'>
              <div
                className='h-[15vh] md:h-[20vh] w-full border-2 bg-cover bg-center'
                style={{ backgroundImage: `url(${odinGalleryImg6})` }}
              ></div>
              <div
                className='h-[15vh] md:h-[20vh] w-full border-2 border-b-4 bg-cover bg-center'
                style={{ backgroundImage: `url(${odinGalleryImg7})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SwitchE1;
