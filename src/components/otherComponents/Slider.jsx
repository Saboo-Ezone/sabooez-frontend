import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

//Import images
import e1 from '../../assets/vehicle/e1/e1-switch-home-banner-new_0.jpg';
import metrocity from '../../assets/vehicle/metrocity/metrocity-home-banner.jpg';
import metrodecker from '../../assets/vehicle/metrodecker/metrodecker-home-banner.jpg';
import allvehicle from '../../assets/vehicle/solo/vehicle-banner.jpg';
import solo from '../../assets/vehicle/solo/prod-solo.jpg';
import { BsArrowRightCircle } from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { Link } from 'react-router-dom';
// import { sliders } from "../../../constants";

const width = window.innerWidth;
function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        navigation={width > 425 ? true : false}
        effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper slider-home '
      >
        <SwiperSlide>
          <div className='relative'>
            <img src={e1} className='w-full  object-cover' alt='SWITCH e1' />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
              <Link to='/e1'>
                <div className='flex justify-center items-center m-3 '>
                  <div className='mx-4'>SWITCH e1</div>
                  <div className='mt-2 md:mt-4 '>
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              src={metrocity}
              className='w-full'
              alt='SWITCH Metrocity'
            />

            <span className='absolute text-md md:text-3xl lg:text-5xl text-white  bottom-6 md:bottom-20 left-1/4 -translate-x-1/2 '>
              <Link to='/metrocity'>
                <div className='flex justify-center items-center m-3 '>
                  <div className='mx-4'>SWITCH Metrocity</div>
                  <div className='mt-2 md:mt-4 '>
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              src={metrodecker}
              className='w-full'
              alt='The All New SWITCH Metrodecker'
            />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/4'>
              <Link to='/metrodecker'>
                <div className='flex justify-center items-center m-3 '>
                  <div className='mx-4'>The All New SWITCH Metrodecker</div>
                  <div className='mt-2 md:mt-4 '>
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative'>
            <img
              src={solo}
              className='w-full'
              alt='SWITCH Solo'
            />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
              <Link to='/solo'>
                <div className='flex justify-center items-center m-3 '>
                  <div className='mx-4'>SWITCH Solo</div>
                  <div className='mt-2 md:mt-4 '>
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              src={allvehicle}
              className='w-full'
              alt='Sustainable vehicles of today'
            />
            <span className='absolute text-md md:text-3xl lg:text-5xl text-white bottom-6 md:bottom-20 left-1/4 -translate-x-1/2'>
              <Link to='/e1'>
                <div className='flex justify-center items-center m-3 '>
                  <div className='mx-4'>Sustainable vehicles of today</div>
                  <div className='mt-2 md:mt-4 '>
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
