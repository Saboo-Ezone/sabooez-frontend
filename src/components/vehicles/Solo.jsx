import React, { useEffect, useState } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import homeBanner from '../../assets/vehicle/solo/vehicle-banner.jpg';
import solo from '../../assets/vehicle/solo/prod-solo.jpg';
import blueSvg from '../../assets/other/pattern-blue.svg';
import switch_e1 from '../../assets/vehicle/e1/e1-vehicle-img.jpg';
import metrodecker from '../../assets/vehicle/metrodecker/metrodecker-lightest-bus.jpg';
import metrocity from '../../assets/vehicle/metrocity/metrocity-mirror.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ModalSolo from '../otherComponents/ModalSolo';
import EnquirForm from '../otherComponents/EnquirForm';

const Solo = () => {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <section>
        <div>
          <img
            src={homeBanner}
            alt=''
            srcset=''
            className='relative w-full object-cover '
          />
        </div>
        <div className='left-1/3 top-32 my-6 whitespace-nowrap  text-3xl md:absolute md:text-4xl md:text-white'>
          <div className='mx-auto text-center font-roboto tracking-wide'>
            Sustainable vehicles of today <br />
            <span className='font-mono text-h5'>
              Fully electric solutions for your city.
            </span>
          </div>
        </div>
      </section> */}
      <section className='relative'>
        <div
          className='hidden h-[95vh] w-full bg-cover bg-center bg-no-repeat md:block'
          style={{ backgroundImage: `url(${homeBanner})` }}
        ></div>
        <img
          src={homeBanner}
          alt=''
          srcset=''
          className='relative w-full object-cover md:hidden'
        />
        <div className='left-1/4 top-32 my-6 whitespace-nowrap md:absolute   md:text-white  lg:left-1/3'>
          <div className='mx-auto text-center font-roboto text-2xl tracking-wide md:text-3xl lg:text-4xl'>
            Sustainable vehicles of today <br />
            <span className='font-mono text-h6 lg:text-h5'>
              Fully electric solutions for your city.
            </span>
          </div>
        </div>
      </section>
      <div className='mb-2 '>

      <EnquirForm />
      </div>
      <section className='w-full bg-[#edede6] bg-opacity-75'>
        <div
          className='p-8  text-xl text-[#505bfe] md:w-[60%] md:px-12 md:text-2xl xl:text-3xl'
          data-aos='fade-up'
        >
          From London’s red double-deckers to rapid charging networks in
          Ahmedabad – our trusted range is leading the way in zero-emission
          public transport.
        </div>
        <div
          className=' h-[5px] w-full divide-x-8 bg-no-repeat pb-6 md:my-10'
          style={{ backgroundImage: `url(${blueSvg})` }}
        ></div>
        <div className='flex flex-col justify-between md:flex-row'>
          <div
            className=' mb-10 px-8 md:mb-24 md:w-1/3 md:px-12 '
            data-aos='fade-up'
            data-aos-delay='100'
            data-editor-processed='true'
          >
            <div className='pb-3 font-mono  text-lg text-[#505bfe] md:text-xl'>
              A proven track record
            </div>
            <div className='font-roboto text-sm'>
              Our EVs are already on the road. We’ve delivered over 300 vehicles
              and clocked over 30 million electric miles in developed and
              developing markets.
            </div>
          </div>

          <div
            className=' mb-10 px-8 md:mb-24 md:w-1/3 md:px-12 '
            data-aos='fade-up'
            data-aos-delay='100'
            data-editor-processed='true'
          >
            <div className='pb-3 font-mono  text-lg text-[#505bfe] md:text-xl'>
              Advanced offering
            </div>
            <div className='font-roboto text-sm'>
              Buses and eLCVs fitted with the latest battery innovations and
              SWITCH proprietary tech. Our smart solutions mean lower costs for
              you.
            </div>
          </div>

          <div
            className=' mb-10 px-8 md:mb-24 md:w-1/3 md:px-12 '
            data-aos='fade-up'
            data-aos-delay='100'
            data-editor-processed='true'
          >
            <div className='pb-3 font-mono  text-lg text-[#505bfe] md:text-xl'>
              Unrivalled service
            </div>
            <div className='font-roboto text-sm'>
              You’re never on your own. From customisation to aftersales and
              updates, we’ll be with you at every step.
            </div>
          </div>
        </div>
      </section>
      <section className=' w-full  '>
        <div >
          <div
            className='pb-4 px-8 md:px-12 pt-8 text-h3 md:pt-16  md:text-h2  lg:pb-2   lg:text-h1  '
            data-aos='fade-up'
            data-aos-delay='100'
          >
            Explore our current vehicles
          </div>

          <div
            className='  pb-4  lg:pb-8  '
            data-aos='fade-up'
            data-aos-delay='200'
            data-editor-processed='true'
          >
            <div className='px-8 md:px-12 pb-6 font-roboto '>
              100% electric with zero tailpipe emissions. Meet the fleets on the
              road today.
            </div>
            <div className='px-8 md:px-12 font-mono text-xl text-[#00c389]   '>
              Vehicles from SWITCH Mobility Ltd:
            </div>
          </div>
          <div className=' grid px-8 md:px-12  gap-6  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4'>
            <div className='mb-5' data-aos='fade-in' data-aos-delay='300'>
              <div className='mb-5 font-mono text-h5'>SWITCH e1</div>
              <div className=' overflow-hidden  '>
                <img
                  src={switch_e1}
                  alt='SWITCH e1'
                  className='h-60 w-full object-cover duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex items-center justify-between px-2  py-2 text-white'
                  to='/e1'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-2xl lg:text-3xl xl:text-4xl' />
                </Link>
              </div>
            </div>

            <div className='mb-5' data-aos='fade-in' data-aos-delay='400'>
              <div className='mb-5 font-mono text-h5'>Metrodecker</div>
              <div className=' overflow-hidden '>
                <img
                  src={metrodecker}
                  alt='SWITCH Metrodecker'
                  className='h-60 w-full object-cover duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex items-center justify-between px-2  py-2 text-white'
                  to='/metrodecker'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-2xl lg:text-3xl xl:text-4xl' />
                </Link>
              </div>
            </div>

            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='500'>
              <div className='mb-5 font-mono text-h5'>Metrocity</div>
              <div className=' overflow-hidden  '>
                <img
                  src={metrocity}
                  alt='Metrocity'
                  className='h-60 w-full object-cover duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div className='bg-[#505bfe] '>
                <Link
                  className='flex items-center justify-between px-2  py-2 text-white '
                  to='/metrocity'
                >
                  <span>MORE INFORMATION</span>
                  <AiOutlineRightCircle className='text-2xl lg:text-3xl xl:text-4xl' />
                </Link>
              </div>
            </div>
            <div className='mb-5 ' data-aos='fade-in' data-aos-delay='500'>
              <div className='mb-5 font-mono text-h5'>Solo</div>
              <div className=' overflow-hidden  '>
                <img
                  src={solo}
                  alt='solo'
                  className='h-60 w-full object-cover duration-300 ease-in hover:scale-105 lg:h-full'
                />
              </div>
              <div onClick={() => setShowMyModal(true)} className='cursor-pointer flex items-center justify-between bg-[#505bfe] px-2  py-2 text-white'>
                <span>MORE INFORMATION</span>
                <AiOutlineRightCircle className='text-2xl lg:text-3xl xl:text-4xl' />
              </div>
            </div>
          </div>

        </div>
      </section>.<ModalSolo onClose={handleOnClose} visible={showMyModal} />
    </>
  );
};

export default Solo;
