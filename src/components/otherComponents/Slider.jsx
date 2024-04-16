import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//Import images
import e1 from "../../assets/vehicle/e1/e1-switch-home-banner-new_0.jpg";
import homeMobileBanner from "../../assets/vehicle/e1/main-mobile-banner.jpg";
import metrocityMobileBanner from "../../assets/vehicle/metrocity/metrocity-banner-mobile1.jpg";
import metrodeckerMobileBanner from "../../assets/vehicle/metrodecker/metrodecker-banner-mobile1.jpg";

import metrocity from "../../assets/vehicle/metrocity/metrocity-home-banner.jpg";
import metrodecker from "../../assets/vehicle/metrodecker/metrodecker-home-banner.jpg";
import allvehicle from "../../assets/vehicle/solo/vehicle-banner.jpg";
import solo from "../../assets/vehicle/solo/prod-solo.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Link } from "react-router-dom";
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
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper slider-home "
      >
        <SwiperSlide>
          <div className="relative">
            {/* <img
              src={e1}
              className="h-[90vh] w-full lg:h-screen"
              alt="SWITCH e1"
            /> */}
            <div
              className="hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat md:block"
              style={{ backgroundImage: `url(${e1})` }}
            ></div>
            <div
              className="block h-[92vh] w-full bg-cover bg-center bg-no-repeat md:hidden "
              style={{ backgroundImage: `url(${homeMobileBanner})` }}
            ></div>
            <span className="absolute text-xl text-white -translate-x-1/2 bottom-6 left-1/4 md:bottom-20 md:text-3xl lg:text-5xl">
              <Link to="/e1">
                <div className="flex items-center justify-center m-3 ">
                  <div className="mx-4">SWITCH e1</div>
                  <div className="mt-2 md:mt-4 ">
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {/* <img
              src={metrocity}
              className="h-[90vh] w-full lg:h-screen"
              alt="SWITCH Metrocity"
            /> */}

            <div
              className="hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat md:block"
              style={{ backgroundImage: `url(${metrocity})` }}
            ></div>
            <div
              className="block h-[92vh] w-full bg-cover bg-center bg-no-repeat md:hidden "
              style={{ backgroundImage: `url(${metrocityMobileBanner})` }}
            ></div>

            <span className="absolute text-white -translate-x-1/2 text-md bottom-6 left-1/4 md:bottom-20 md:text-3xl lg:text-5xl ">
              <Link to="/metrocity">
                <div className="flex items-center justify-center m-3 ">
                  <div className="mx-4">SWITCH Metrocity</div>
                  <div className="mt-2 md:mt-4 ">
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            {/* <img
              src={metrodecker}
              className="h-[90vh] w-full lg:h-screen"
              alt="The All New SWITCH Metrodecker"
            /> */}
            <div
              className="hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat contrast-125 saturate-200 md:block"
              style={{ backgroundImage: `url(${metrodecker})` }}
            ></div>
            <div
              className="block h-[92vh] w-full bg-cover bg-center bg-no-repeat md:hidden  md:contrast-125  "
              style={{ backgroundImage: `url(${metrodeckerMobileBanner})` }}
            ></div>
            <span className="absolute text-white text-md bottom-6 left-1/4 -translate-x-1/4 md:bottom-20 md:text-3xl lg:text-5xl">
              <Link to="/metrodecker">
                <div className="flex items-center justify-center m-3 ">
                  <div className="mx-4">The All New SWITCH Metrodecker</div>
                  <div className="mt-2 md:mt-4 ">
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={solo}
              className="h-[92vh] w-full  md:h-[95vh]"
              alt="SWITCH Solo"
            />
            <span className="absolute text-white -translate-x-1/2 text-md bottom-6 left-1/4 md:bottom-20 md:text-3xl lg:text-5xl">
              <Link to="/solo">
                <div className="flex items-center justify-center m-3 ">
                  <div className="mx-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    SWITCH Solo
                  </div>
                  <div className="mt-2 md:mt-4 ">
                    <BsArrowRightCircle />
                  </div>
                </div>
              </Link>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={allvehicle}
              className="h-[92vh] w-full md:h-[95vh]"
              alt="Sustainable vehicles of today"
            />
            <span className="absolute text-2xl text-white inset-x-1/3 bottom-6 md:bottom-20 md:text-3xl lg:text-5xl xl:left-1/4">
              <Link to="/e1">
                <div className="flex items-center justify-center m-3 ">
                  <div className="mx-4 whitespace-nowrap">
                    Sustainable vehicles of today
                  </div>
                  <div className="mt-2 md:mt-4 ">
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
