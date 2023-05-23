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
      <section
        className='flex bg-no-repeat py-3 md:py-6 '
        style={{ backgroundImage: `url(${patternBoxSvg})` }}
      >
        <div className='container  mx-auto max-w-full sm:px-2'>
          <div className='flex flex-wrap justify-around '>
            <div className='offset-1 xl:mx-1/5  mb-4 mt-8 w-4/5 pr-2 md:w-2/5 md:pl-4 md:pr-4 xl:w-2/5 '>
              <div
                className='pb-12 pt-4 text-3xl md:pl-12 md:pt-12 lg:text-5xl'
                data-aos='fade-up'
              >
                <h2 className='title' data-editor-processed='true'>
                  We're on a journey.
                  <br />
                  Will you join us?
                </h2>
              </div>
              <h4
                className='  text-xl  md:pl-12 '
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
              className='xl:mx-1/6 px-5 md:w-1/2 md:px-4 xl:w-1/3 xl:pl-0'
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
        <div className='flex  flex-col justify-between md:flex-row xl:h-[70%]'>
          <div className='py-10 font-roboto'>
            <div
              className='pb-4  pl-8 pr-2 pt-12 text-left text-4xl md:pl-16 lg:pb-8 lg:pl-20'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              Here to help
            </div>
            <div className='type-of-block'>
              <div className=' pl-8 md:pl-16 lg:pl-20'>
                <p
                  className='pb-8 text-xl text-[#505bfe]'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  If you've got a question, drop us a line or give us a call.
                </p>

                <div
                  data-aos='fade-up'
                  data-aos-delay='200'
                  className='text-lg'
                >
                  <p>
                    <div className=' pb-2  text-lg lg:text-xl '>
                      Saboo RKS Motor - Maruti Suzuki Arena
                    </div>
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
            className='h-[40vh] w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-1/2'
            style={{ backgroundImage: `url(${bannerCotact})` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
