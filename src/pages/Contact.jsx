import React, { useEffect } from 'react';
import patternBoxSvg from '../assets/other/pattern-box.svg';
import patternWhite from '../assets/other/pattern-grid-white.png';
import bannerCotact from '../assets/other/banner-contact.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import SubmitForm from '../components/otherComponents/SubmitForm';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div
          className='flex w-full flex-col bg-no-repeat md:flex-row'
          style={{ backgroundImage: `url(${patternBoxSvg})` }}
        >
          <div className='mt-4 w-full  py-16 pl-10 text-3xl md:w-1/2 md:pl-16 lg:pl-24   xl:pl-28 '>
            <span className='' data-editor-processed='true'>
              We're on a journey.
              <br />
              Will you join us?
            </span>
            <br />
            <span
              className='  text-xl  '
              data-aos='fade-up'
              data-aos-delay='100'
              data-editor-processed='true'
            >
              Contact us and be the first to hear about our EV buses and vans.
            </span>
          </div>
          <div className='w-full md:w-1/2'>
            <SubmitForm />
          </div>
        </div>
      </section>
      <section
        className='bg-[#edede6] '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div
          className='flex  flex-col justify-between md:flex-row xl:h-[70%]'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <div className='py-10 font-roboto'>
            <div className='pb-4  pl-8 pr-2 pt-12 text-left text-4xl md:pl-16 lg:pb-8 lg:pl-20'>
              Here to help
            </div>
            <div className='type-of-block'>
              <div className=' pl-8 md:pl-16 lg:pl-20'>
                <div className='pb-8 text-xl text-[#505bfe]'>
                  If you've got a question, drop us a line or give us a call.
                </div>

                <div className='text-lg'>
                  <span className=' pb-2  text-lg lg:text-xl '>
                    Saboo RKS Motor - Maruti Suzuki Arena
                  </span>
                  <br />
                  Saboo Towers, 6-3-905,
                  <br />
                  Raj Bhavan Rd, Matha Nagar,
                  <br />
                  Somajiguda, Hyderabad,
                  <br />
                  Telangana 500082
                  <br />
                  Tel: <a href='tel:+919848898488'>+91-9848898488</a>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos='zoom-in'
            data-aos-delay='700'
            className='h-[40vh] w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2'
            style={{ backgroundImage: `url(${bannerCotact})` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
