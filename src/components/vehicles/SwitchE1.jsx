import React, { useEffect, useState } from 'react';
import homeBanner from '../../assets/vehicle/e1/ODIN-banner-img.jpg';
import logoE1 from '../../assets/vehicle/e1/e1-logo.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
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
import insideBusimage1 from '../../assets/vehicle/e1/inside-Bus-image1.png';
import insideBusimage2 from '../../assets/vehicle/e1/slide-2-image.jpg';

// import patternGreen from '../../assets/other/pattern-green.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import EnquirForm from '../otherComponents/EnquirForm';
import SideButton from '../otherComponents/SideButton';

// import AboutSlider from './AboutSlider';

const SwitchE1 = ({ setShowMyModal }) => {
  const [ind1, setInd1] = useState(0);

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
        <div
          id='mouse'
          className='absolute bottom-20 left-1/2 -ml-4 hidden md:block '
        >
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
          srcSet=''
          className='absolute bottom-20 left-4 h-12 lg:left-6 lg:h-16 xl:left-10'
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
      <section className='mt-2 flex flex-col-reverse overflow-hidden md:flex-row'>
        {/* <span>The bus you've been waiting for.</span> */}
        <div className='flex w-full flex-col justify-center  md:w-1/2 md:p-14 lg:p-20 xl:p-28 2xl:h-[70vh] '>
          <div className='mb-6 p-4  text-4xl lg:font-semibold xl:text-5xl'>
            The bus you've been waiting for.
          </div>
          <img
            src={perfectEngine}
            alt='Perfect Engine'
            srcSet=''
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
          <a href='#enquire'>
            <button className='m-4 w-min whitespace-nowrap bg-[#515ef5] px-4 py-2 text-left text-white hover:bg-[#20c997] '>
              ENQUIRE NOW
            </button>
          </a>
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
          playsInline
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
      <section className=' relative bg-[#00002d] p-4  text-white duration-500'>
        {ind1 ? (
          <div className='container mx-auto my-10 font-roboto md:flex md:flex-col md:justify-center '>
            <div className='mb-4 text-center  text-4xl md:mb-6'>
              Dimensions and weights
            </div>
            <img
              src={insideBusimage2}
              alt=''
              srcSet=''
              className='mx-auto mb-6 '
            />
            <div className='flex flex-col items-center justify-center md:flex-row'>
              <div>
                <span className='font-mono text-2xl'>Overall Dimensions</span>
                <br />
                <br />
                <div
                  className='col-sm-12  overflow-hidden '
                  style={{ position: 'relative' }}
                >
                  <table className=' mx-12 mb-6 table   '>
                    <tbody>
                      <tr className='relative bg-[#4d6bb3] '>
                        <td className=' p-2 '>Wheelbase</td>
                        <td className=' p-2'>6000 mm</td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          C
                        </span>
                      </tr>
                      <tr className='relative'>
                        <td className=' p-2'>Overall length</td>
                        <td className=' p-2'> 120000 mm</td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          D
                        </span>
                      </tr>

                      <tr className='relative bg-[#4d6bb3]'>
                        <td className=' p-2'> Front overhang</td>
                        <td className=' p-2'> 2777 mm</td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          E
                        </span>
                      </tr>
                      <tr className='relative'>
                        <td className=' p-2'> Rear overhang</td>
                        <td className=' p-2'> 3223 mm</td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          F
                        </span>
                      </tr>
                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'>Track front</td>
                        <td className=' p-2'>2234 mm</td>
                      </tr>
                      <tr>
                        <td className=' p-2'>Track rear</td>
                        <td className=' p-2'>6000 mm </td>
                      </tr>
                      <tr className='relative bg-[#4d6bb3]'>
                        <td className=' p-2'>Angle of approach</td>
                        <td className=' p-2'>7.2 </td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          G
                        </span>
                      </tr>
                      <tr className='relative'>
                        <td className=' p-2'>Angle of departure</td>
                        <td className=' p-2'> 7.3 </td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          H
                        </span>
                      </tr>
                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'>
                          % of rear overhang to wheelbase
                        </td>
                        <td className=' p-2'>53%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <span className='font-mono text-2xl'>Chassis weights</span>
                <br />
                <br />
                <div className='col-sm-12  ' style={{ position: 'relative' }}>
                  <table className=' mb-6   table'>
                    <tbody>
                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'> Front axle (unladen)</td>
                        <td className=' p-2'> 4062 kg</td>
                      </tr>
                      <tr>
                        <td className=' p-2'> Rear axle (unladen)</td>
                        <td className=' p-2'> 7492 kg</td>
                      </tr>
                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'>
                          Kerb weight (standard capacity battery)
                        </td>
                        <td className=' p-2'>10775 kg</td>
                      </tr>
                      <tr className='border-b'>
                        <td className=' p-2'>GVW</td>
                        <td className=' p-2'>18000 kg</td>
                      </tr>

                      <br />
                      <span className='font-mono text-2xl'>
                        Turning diameter
                      </span>
                      <br />
                      <br />

                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'>Kerb to kerb</td>
                        <td className=' p-2'>18.84 m</td>
                      </tr>
                      <tr className='border-b'>
                        <td className=' p-2'>Wall to wall</td>
                        <td className=' p-2'>22.2 m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className=' my-2 w-min whitespace-nowrap  bg-[#20c997] px-4 py-2  text-white hover:bg-[#515ef5] '>
                Download Brochure
              </button>
            </div>
          </div>
        ) : (
          <div className='container mx-auto my-10 flex flex-col lg:flex-row lg:p-10'>
            <div className='font-roboto md:flex md:flex-col md:justify-center lg:w-1/2 '>
              <div className='mx-auto mb-4 text-4xl md:mb-6 lg:mx-0'>
                Dimensions and weights
              </div>
              <img
                src={insideBusimage1}
                alt=''
                srcSet=''
                className='mx-auto lg:hidden'
              />
              <span>
                SWITCH e1 seats up to 28 and has exceptional standing capacity,
                with a total of up to 93 passengers, with a versatile range of
                layout options including, urban, interurban, school bus and
                airport applications.
              </span>
              <br />
              <span>
                The low entry floor allows for easy access meaning there is
                greater accessibility for wheelchairs and buggys. Door layouts
                are available in 2-2-2 and 2-2-0 configuartions.
              </span>
              <br />
              <br />
              <span className='font-mono text-2xl'>Overall Dimensions</span>
              <br />
              <div className='col-sm-12  ' style={{ position: 'relative' }}>
                <div>
                  <table className=' mx-12 mb-6   table'>
                    <tbody>
                      <tr className='relative bg-[#4d6bb3] '>
                        <td className=' p-2 '>Overall width (mm)</td>
                        <td className=' p-2'>2,500</td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          A
                        </span>
                      </tr>
                      <tr className='relative'>
                        <td className=' p-2'>
                          Overall height (unladen bus, max)
                        </td>
                        <td className=' p-2'> 3100 mm</td>
                        <span className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                          B
                        </span>
                      </tr>

                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'> Interior Width</td>
                        <td className=' p-2'> 2360 mm</td>
                      </tr>
                      <tr>
                        <td className=' p-2'> Interior height</td>
                        <td className=' p-2'> 1810-2240 mm</td>
                      </tr>
                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'>
                          Front entrance step height (unladen)
                        </td>
                        <td className=' p-2'>320 mm</td>
                      </tr>
                      <tr>
                        <td className=' p-2'>
                          Center entrance step height (unladen)
                        </td>
                        <td className=' p-2'>320 mm</td>
                      </tr>
                      <tr className='bg-[#4d6bb3]'>
                        <td className=' p-2'>
                          Rear entrance step height (unladen)
                        </td>
                        <td className=' p-2'>343 mm</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className='mx-12 my-2 w-min whitespace-nowrap  bg-[#20c997] px-4 py-2  text-white hover:bg-[#515ef5] '>
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 '>
              <img
                src={insideBusimage1}
                alt=''
                srcSet=''
                className='mx-auto hidden lg:block'
              />
            </div>
          </div>
        )}
        <div className='flex cursor-pointer justify-center gap-4'>
          <div
            onClick={() => setInd1(0)}
            className={`h-3 w-3 ${ind1 ? 'bg-white' : 'bg-[#20c997]'}`}
          ></div>
          <div
            onClick={() => setInd1(1)}
            className={`h-3 w-3 ${ind1 ? 'bg-[#20c997]' : 'bg-white'}`}
          ></div>
        </div>
        <AiOutlineArrowRight
          onClick={() => {
            ind1 ? setInd1(0) : setInd1(1);
          }}
          className='absolute inset-y-1/2 right-14 hidden text-4xl lg:block'
        />
        <AiOutlineArrowLeft
          onClick={() => {
            ind1 ? setInd1(0) : setInd1(1);
          }}
          className='absolute inset-y-1/2 left-14 hidden text-4xl lg:block'
        />
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
