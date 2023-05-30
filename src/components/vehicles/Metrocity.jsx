import React, { useEffect, useState } from 'react';
import homeBanner from '../../assets/vehicle/metrocity/metrocity-home-banner.jpg';
import logoMetrocity from '../../assets/vehicle/metrocity/metrocity-logo-white.png';
// import video from "../../assets/video/FIRST_YORK _B-ROLL.mp4"
import homeMobileBanner from '../../assets/vehicle/metrocity/metrocity-banner-mobile1.jpg';
import metrocityFirstBritish from '../../assets/vehicle/metrocity/metrocity-first-british.jpg';
import metrocityEfficient from '../../assets/vehicle/metrocity/metrocity-efficient-class.jpg';
import EnquirForm from '../otherComponents/EnquirForm';
import SideButton from '../otherComponents/SideButton';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Metrocity = ({ setShowMyModal }) => {
  const [ind1, setInd1] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

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
        <div
          id='mouse'
          className='absolute bottom-10 left-1/2 -ml-4 hidden md:block '
        >
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
          srcSet=''
          className='absolute bottom-10 left-4  h-8 brightness-200 contrast-200 sm:h-10 md:h-12 lg:left-6 lg:h-14 xl:left-10 xl:h-16 '
        />
      </section>
      <EnquirForm />
      <section className='mt-2 flex flex-col-reverse overflow-hidden bg-[#16b895] text-white lg:flex-row'>
        {/* <span>The bus you've been waiting for.</span> */}
        <div
          className=' hidden w-full bg-cover bg-center pb-2 lg:block lg:w-2/3'
          style={{ backgroundImage: `url(${metrocityFirstBritish})` }}
          data-aos='fade-right'
          data-aos-duration='1000'
        ></div>
        <div className='flex w-full flex-col   justify-center p-4 lg:h-[75vh]  lg:w-1/3 2xl:h-[80vh]  '>
          <div className='mb-6 p-4 text-4xl  '>
            The first British-built EV in London
          </div>
          <img
            src={metrocityFirstBritish}
            alt='Metrodecker Lightest'
            srcSet=''
            className='p-4 lg:hidden '
            data-aos='fade-right'
            data-aos-duration='1000'
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
      <section className='mt-2 flex flex-col-reverse overflow-hidden md:flex-row '>
        {/* <span>The bus you've been waiting for.</span> */}
        <div className='flex w-full flex-col   justify-center  md:w-1/2 md:p-14 lg:p-20 xl:py-28 xl:pl-28 2xl:h-[70vh] '>
          <div className='mb-6 px-4 pt-4  text-4xl font-medium md:p-4 lg:text-5xl '>
            More miles, less impact
          </div>
          <img
            src={metrocityEfficient}
            alt='Metrodecker Lightest'
            srcSet=''
            className='pb-6 md:hidden '
            data-aos='fade-left'
            data-aos-duration='1000'
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
          data-aos='fade-left'
          data-aos-duration='1000'
        ></div>
      </section>
      <section className=' relative bg-[#00002d] p-4  text-white duration-500'>
        {ind1 ? (
          <div className='container mx-auto my-10 font-roboto md:flex md:flex-col md:justify-center '>
            <div className='mb-4 text-center  text-4xl md:mb-6'>
              Dimensions and weights
            </div>

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
                    <tr className='relative bg-[#4d6bb3] '>
                      <td className=' p-2 '>Wheelbase</td>
                      <td className=' p-2'>6000 mm</td>
                      <div className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                        C
                      </div>
                    </tr>
                    <tr className='relative'>
                      <td className=' p-2'>Overall length</td>
                      <td className=' p-2'> 120000 mm</td>
                      <div className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                        D
                      </div>
                    </tr>

                    <tr className='relative bg-[#4d6bb3]'>
                      <td className=' p-2'> Front overhang</td>
                      <td className=' p-2'> 2777 mm</td>
                      <div className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                        E
                      </div>
                    </tr>
                    <tr className='relative'>
                      <td className=' p-2'> Rear overhang</td>
                      <td className=' p-2'> 3223 mm</td>
                      <div className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                        F
                      </div>
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
                      <div className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                        G
                      </div>
                    </tr>
                    <tr className='relative'>
                      <td className=' p-2'>Angle of departure</td>
                      <td className=' p-2'> 7.3 </td>
                      <div className='absolute -left-10 top-1 h-8 w-8 rounded-full bg-white text-center text-xl text-indigo-400'>
                        H
                      </div>
                    </tr>
                    <tr className='bg-[#4d6bb3]'>
                      <td className=' p-2'>% of rear overhang to wheelbase</td>
                      <td className=' p-2'>53%</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div>
                <span className='font-mono text-2xl'>Chassis weights</span>
                <br />
                <br />
                <div className='col-sm-12  ' style={{ position: 'relative' }}>
                  <table className=' mb-6   table'>
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
                    <span className='font-mono text-2xl'>Turning diameter</span>
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
            <div className='font-roboto   '>
              <div className='mx-auto mb-4 text-4xl md:mb-6 lg:mx-0'>
                Technical Specifications
              </div>

              <span>
                This battery electric low weight and short wheelbase single deck
                bus, renowned for its manoeuvrability and efficiency, has a
                seating capacity of up to 44 passengers. The SWITCH metrocity is
                an excellent vehicle for all environments.
              </span>
              <br />

              <br />
              <div
                className='col-sm-12 overflow-x-scroll md:overflow-x-auto'
                style={{ position: 'relative' }}
              >
                <table className='  mb-6  table  w-[90%] overflow-x-scroll lg:overflow-x-auto'>
                  <tr>
                    <td className='border-b-2   bg-[#4d6bb3] p-1 md:py-2 md:pl-2 '>
                      Body Length Options
                    </td>
                    <td className='border-b-2 bg-[#4d6bb3] py-1  '>8.7 m</td>
                    <td className='border-b-2 bg-[#4d6bb3] py-1  '>9.4 m</td>
                    <td className='border-b-2 bg-[#4d6bb3] py-1  '>10.1 m</td>
                    <td className='border-b-2 bg-[#4d6bb3] py-1  '>10.8 m</td>
                    <td className='border-b-2 bg-[#4d6bb3] py-1  '>11.5 m</td>
                  </tr>

                  <tr className='border-b'>
                    <td className='p-2'>Overall length (mm)</td>
                    <td className='p-2'>8,740</td>
                    <td className='p-2'>9,440</td>
                    <td className='p-2'>10,130</td>
                    <td className='p-2'>10,820</td>
                    <td className='p-2'>11,520</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>Overall width (mm)</td>
                    <td className='p-2'>2,470</td>
                    <td className='p-2'>2,470</td>
                    <td className='p-2'>2,470</td>
                    <td className='p-2'>2,470</td>
                    <td className='p-2'>2,470</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>Overall height (mm)</td>
                    <td className='p-2'>2,850</td>
                    <td className='p-2'>2,850</td>
                    <td className='p-2'>2,850</td>
                    <td className='p-2'>2,850</td>
                    <td className='p-2'>2,850</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>Wheelbase (mm)</td>
                    <td className='p-2'>3,740</td>
                    <td className='p-2'>4,440</td>
                    <td className='p-2'>5,130</td>
                    <td className='p-2'>5,820</td>
                    <td className='p-2'>6,520</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>Front overhang (mm)</td>
                    <td className='p-2'>2,430</td>
                    <td className='p-2'>2,430</td>
                    <td className='p-2'>2,430</td>
                    <td className='p-2'>2,430</td>
                    <td className='p-2'>2,430</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>Rear overhang (mm)</td>
                    <td className='p-2'>2,570</td>
                    <td className='p-2'>2,570</td>
                    <td className='p-2'>2,570</td>
                    <td className='p-2'>2,570</td>
                    <td className='p-2'>2,570</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>
                      Gross vehicle weight design/plated (kg)
                    </td>
                    <td className='p-2'>
                      13,000/ <br /> 12,960**
                    </td>
                    <td className='p-2'>
                      13,000/ <br /> 12,960**
                    </td>
                    <td className='p-2'>
                      13,000/ <br /> 12,960**
                    </td>
                    <td className='p-2'>
                      13,000/ <br /> 12,960**
                    </td>
                    <td className='p-2'>
                      13,000/ <br /> 12,960**
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2'>
                      Front axle weight design/plated (kg)
                    </td>
                    <td className='p-2'>4,500/4,480</td>
                    <td className='p-2'>4,500/4,480</td>
                    <td className='p-2'>4,500/4,480</td>
                    <td className='p-2'>4,500/4,480</td>
                    <td className='p-2'>4,500/4,480</td>
                  </tr>
                  <br />
                  <tr>
                    <td class='text-xs text-white '>
                      All Lengths Rear axle weight design/plated (kg):
                      8,000/8,480
                    </td>
                  </tr>
                </table>

                <button className=' my-2 w-min whitespace-nowrap  bg-[#20c997] px-4 py-2  text-white hover:bg-[#515ef5] '>
                  Download Brochure
                </button>
              </div>
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
      <SideButton setShowMyModal={setShowMyModal} />
    </>
  );
};

export default Metrocity;
