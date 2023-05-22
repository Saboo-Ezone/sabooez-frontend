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
    <div>
      <section
        className='flex bg-no-repeat py-3 md:py-6 '
        style={{ backgroundImage: `url(${patternBoxSvg})` }}
      >
        <div className='container  max-w-full mx-auto sm:px-2'>
          <div className='flex flex-wrap justify-around '>
            <div className='w-4/5 md:w-2/5  xl:w-2/5 pr-2 md:pr-4 md:pl-4 mb-4 mt-8 offset-1 xl:mx-1/5 '>
              <div
                className='text-3xl lg:text-5xl md:pt-12 pt-4 md:pl-12 pb-12'
                data-aos='fade-up'
              >
                <h2 className='title' data-editor-processed='true'>
                  We're on a journey.
                  <br />
                  Will you join us?
                </h2>
              </div>
              <h4
                className='  md:pl-12  text-xl '
                data-aos='fade-up'
                data-aos-delay='100'
                data-editor-processed='true'
              >
                Contact us and be the first to hear about our EV buses and vans.
              </h4>
            </div>

            <div
              data-aos='fade-up'
              data-aos-delay='300'
              className='md:w-1/2 md:px-4 px-5 xl:w-1/3 xl:mx-1/6 xl:pl-0'
            >
              <SubmitForm />
            </div>
          </div>
        </div>
      </section>
      <section
        className='bg-[#edede6] '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        <div className='flex  flex-col md:flex-row justify-between xl:h-[70vh]'>
          <div className='py-10 font-roboto'>
            <div
              className='text-4xl lg:text-5xl pb-6 lg:pb-12 pt-12 text-left pr-2 pl-8 md:pl-16 lg:pl-20'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              Here to help You
            </div>
            <div className='type-of-block'>
              <div className=' pl-8 md:pl-16 lg:pl-20'>
                <p
                  className='text-indigo-500 pb-8 text-xl'
                  data-aos='fade-up'
                  data-aos-delay='500'
                >
                  If you've got a question, drop us a line or give us a call.
                </p>

                <div
                  data-aos='fade-up'
                  data-aos-delay='500'
                  className='text-xl'
                >
                  <p>
                    <div className=' text-lg  lg:text-2xl underline-offset-4 underline'>
                      Saboo RKS Motor - Maruti Suzuki Arena
                    </div>
                    <br />
                    Saboo Towers, 6-3-905,
                    <br />
                    Raj Bhavan Rd, Matha Nagar,
                    <br />
                    Somajiguda, Hyderabad,
                    <br />
                    Telangana 500082
                  </p>
                  <p className=''>
                    Tel: <a href='tel:+919848898488'>+91-9848898488</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='700'
            className='w-full bg-no-repeat bg-cover md:w-1/2 h-[40vh] md:h-auto bg-center'
            style={{ backgroundImage: `url(${bannerCotact})` }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
