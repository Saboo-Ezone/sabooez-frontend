import React from 'react';
import homeBanner from '../../assets/vehicle/metrodecker/metrodecker-home-banner.jpg';
import logoMetrodecker from '../../assets/vehicle/metrodecker/metrodecker-logo-white.png';
// import video from "../../assets/video/FIRST_YORK _B-ROLL.mp4"
import homeMobileBanner from '../../assets/vehicle/metrodecker/metrodecker-banner-mobile1.jpg';
import subBanner from '../../assets/vehicle/metrodecker/sub-banner1.jpg';
import metrodeckerLightest from '../../assets/vehicle/metrodecker/metrodecker-lightest-bus.jpg';
import largeImage from '../../assets/vehicle/metrodecker/metrodecker-3rd-fold.jpg';

const Metrodecker = () => {
  return (
    < >
      <section>
        <div
          className='hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat contrast-125 saturate-200 md:block'
          style={{ backgroundImage: `url(${homeBanner})` }}
        ></div>
        <div
          className='block h-[95vh] w-full bg-cover bg-center bg-no-repeat md:hidden  md:contrast-125  '
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
          src={logoMetrodecker}
          alt=''
          srcset=''
          className='absolute bottom-10 left-4 h-12 brightness-200 contrast-200 lg:left-6 lg:h-14 xl:left-10 xl:h-16 '
        />
      </section>
      <section className='mt-2 flex overflow-hidden'>
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
          className='relative h-[60vh] w-full  contrast-125 lg:w-3/6 2xl:h-screen'
          style={{
            backgroundImage: `url(${largeImage})`,
            // height: '600px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            width: '100%',
          }}
          // data-aos='fade-left'
          // data-aos-duration='2000'
        >
          <div className='absolute bottom-6 left-2 bg-slate-600 bg-opacity-25 text-4xl text-white lg:text-5xl '>
            Class-leading double-decker
          </div>
        </div>
      </section>
      <section className='mt-2 flex flex-col-reverse md:flex-row'>
        {/* <span>The bus you've been waiting for.</span> */}
        <div className='flex w-full flex-col justify-center  md:w-1/2 md:p-14 lg:p-20 xl:p-28 2xl:h-[70vh] '>
          <div className='mb-6 p-4 text-4xl font-semibold xl:text-5xl'>
            The lightest bus in its class
          </div>
          <img
            src={metrodeckerLightest}
            alt='Metrodecker Lightest'
            srcset=''
            className='pb-4 md:hidden '
          />
          <div className='px-4 text-justify font-roboto 2xl:text-xl'>
            This award-winning, British-built electric bus has been designed to
            be the lightest in its class, with the highest passenger capacity
            and the latest battery technology.
            <br />
            <br />
            SWITCH metrodecker has been built with passengers, drivers,
            operators, and local authorities in mind, helping them to keep their
            city moving efficiently, whilst reducing its carbon footprint.
            <br />
            <br />
          </div>
          <button className='m-4 w-min whitespace-nowrap bg-[#515ef5] px-4 py-2 text-left text-white hover:bg-[#20c997] '>
            ENQUIRE NOW
          </button>
        </div>
        <div
          className=' hidden w-full bg-cover bg-center md:block md:w-1/2'
          style={{ backgroundImage: `url(${metrodeckerLightest})` }}
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
            src='https://d2dg8z6chpdy03.cloudfront.net/FIRST_YORK%20_B-ROLL.mp4'
            type='video/mp4'
          />
          {/* <source src={video} type='video/mp4' /> */}
          Your browser does not support the video tag.
        </video>
      </section>
      <section class=' bg-[#00002d] text-white  '>
        <div class='col-lg-10 col-md-12 offset-lg-1 mx-auto pr-3 '>
          <div class='p-3 pt-10 text-center  text-4xl  font-medium  md:pb-4 md:pt-16'>
            Technical Specifications
          </div>
          <div className=' mb-5  px-4 py-3 text-justify sm:px-14 md:px-16 md:pb-10 lg:px-28'>
            The lightest double-decker in its class. Our largest zero emission
            bus is the battery electric SWITCH metrodecker. Like the other
            vehicles in the SWITCH family, the SWITCH metrodecker has a fully
            integral frame. This low floor vehicle seats up to 84 and in
            addition has exceptional standing capacity, up to 99 passengers
            depending on the layout. The integral stainless-steel structure and
            the latest driveline technologies ensure the SWITCH metrodecker
            delivers optimum operating efficiencies.
          </div>
          <div class='col-sm-12 customTable ' style={{ position: 'relative' }}>
            <div class=' p-3 md:pb-3  lg:px-28'>
              {/* <table class='m-auto table '>
                <tr className=''>
                  <td className='border-b-2 bg-indigo-500  p-1 pr-60 md:py-2 md:pl-2 md:text-lg  xl:pr-96'>
                    Body Length Options
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 pr-24 md:text-lg lg:pr-48'>
                    10.5 m
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 pr-24 md:text-lg lg:pr-48'>
                    11.1 m
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>
                    Overall length (mm)
                  </td>
                  <td className='border-b-2  p-1 lg:p-2'>10,500</td>
                  <td className='border-b-2  p-1 lg:p-2'>11,140</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>Overall width (mm)</td>
                  <td className='border-b-2  p-1 lg:p-2'>2,500</td>
                  <td className='border-b-2  p-1 lg:p-2'>2,500</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>
                    Overall height (mm)
                  </td>
                  <td className='border-b-2  p-1 lg:p-2'>4,310</td>
                  <td className='border-b-2  p-1 lg:p-2'>4,310</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>Wheelbase (mm)</td>
                  <td className='border-b-2  p-1 lg:p-2'>5,350</td>
                  <td className='border-b-2  p-1 lg:p-2'>6,000</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>
                    Front overhang (mm)
                  </td>
                  <td className='border-b-2  p-1 lg:p-2'>2,760</td>
                  <td className='border-b-2  p-1 lg:p-2'>2,760</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>Rear overhang (mm)</td>
                  <td className='border-b-2  p-1 lg:p-2'>2,386</td>
                  <td className='border-b-2  p-1 lg:p-2'>2,386</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>
                    Gross vehicle weight design/plated (kg)
                  </td>
                  <td className='border-b-2  p-1 lg:p-2'>18,000</td>
                  <td className='border-b-2  p-1 lg:p-2'>18,000</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>
                    Front axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2  p-1 lg:p-2'>6,300</td>
                  <td className='border-b-2  p-1 lg:p-2'>6,300</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>
                    Rear axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2  p-1 lg:p-2'>11,600</td>
                  <td className='border-b-2  p-1 lg:p-2'>11,600</td>
                </tr>

                <br />

                <tr>
                  <td className='border-b-2 bg-indigo-500 p-1 md:text-lg lg:p-2'>
                    Seating Capacity
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 md:text-lg lg:p-2'>
                    10.5 m
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 md:text-lg lg:p-2'>
                    11.1 m
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>Seats (maximum)</td>
                  <td className='border-b-2  p-1 lg:p-2'>63</td>
                  <td className='border-b-2  p-1 lg:p-2'>84</td>
                </tr>
                <tr>
                  <td className='border-b-2  p-1 lg:p-2'>Total (maximum)</td>
                  <td className='border-b-2  p-1 lg:p-2'>94+</td>
                  <td className='border-b-2  p-1 lg:p-2'>94+</td>
                </tr>
              </table> */}
              <table class='m-auto table '>
                <tr>
                  <td className='border-b-2   bg-indigo-500 p-1 md:py-2 md:pl-2 md:pr-60  xl:pr-96'>
                    Body Length Options
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 md:pr-24 lg:pr-48'>
                    10.5 m
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 md:pr-24 lg:pr-48'>
                    11.1 m
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Overall length (mm)</td>
                  <td className='border-b-2 p-1 md:p-2'>10,500</td>
                  <td className='border-b-2 p-1 md:p-2'>11,140</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Overall width (mm)</td>
                  <td className='border-b-2 p-1 md:p-2'>2,500</td>
                  <td className='border-b-2 p-1 md:p-2'>2,500</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Overall height (mm)</td>
                  <td className='border-b-2 p-1 md:p-2'>4,310</td>
                  <td className='border-b-2 p-1 md:p-2'>4,310</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Wheelbase (mm)</td>
                  <td className='border-b-2 p-1 md:p-2'>5,350</td>
                  <td className='border-b-2 p-1 md:p-2'>6,000</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Front overhang (mm)</td>
                  <td className='border-b-2 p-1 md:p-2'>2,760</td>
                  <td className='border-b-2 p-1 md:p-2'>2,760</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Rear overhang (mm)</td>
                  <td className='border-b-2 p-1 md:p-2'>2,386</td>
                  <td className='border-b-2 p-1 md:p-2'>2,386</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>
                    Gross vehicle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 p-1 md:p-2'>18,000</td>
                  <td className='border-b-2 p-1 md:p-2'>18,000</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>
                    Front axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 p-1 md:p-2'>6,300</td>
                  <td className='border-b-2 p-1 md:p-2'>6,300</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>
                    Rear axle weight design/plated (kg)
                  </td>
                  <td className='border-b-2 p-1 md:p-2'>11,600</td>
                  <td className='border-b-2 p-1 md:p-2'>11,600</td>
                </tr>

                <br />

                <tr>
                  <td className='border-b-2 bg-indigo-500 p-1 md:p-2'>
                    Seating Capacity
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 md:p-2'>
                    10.5 m
                  </td>
                  <td className='border-b-2 bg-indigo-500 py-1 md:p-2'>
                    11.1 m
                  </td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Seats (maximum)</td>
                  <td className='border-b-2 p-1 md:p-2'>63</td>
                  <td className='border-b-2 p-1 md:p-2'>84</td>
                </tr>
                <tr>
                  <td className='border-b-2 p-1 md:p-2'>Total (maximum)</td>
                  <td className='border-b-2 p-1 md:p-2'>94+</td>
                  <td className='border-b-2 p-1 md:p-2'>94+</td>
                </tr>
              </table>
            </div>
          </div>
          <div class='pb-8 pt-4 text-center'>
            <button
              class='rounded-lg bg-green-500 px-4 py-3 text-xl hover:bg-indigo-600 hover:text-white '
              data-toggle='modal'
              data-target='.download'
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      <div className='fixed -right-44 hover:-right-36 md:-right-36 top-1/2 -rotate-90  '>
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

export default Metrodecker;
