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
        className='flex bg-no-repeat my-4 md:my-8 lg:py-12'
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
                className='  md:pl-12 lg:text-3xl text-xl '
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
             <SubmitForm/>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#edede6]  ' style={{ backgroundImage: `url(${patternWhite})` }}>
        <div className='flex  flex-col md:flex-row justify-between '>
          <div className='py-10'>
            <div
              className='text-5xl pb-12 pt-12 pl-8 md:pl-16 lg:pl-20'
              data-aos='fade-up'
            >
              <h2 className='text-left pr-2'>Here to help You</h2>
            </div>
            <div className='type-of-block'>
              <div className='text-xl pl-8 md:pl-16 lg:pl-20'>
                <p
                  className='text-indigo-500 pb-8'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  If you've got a question, drop us a line or give us a call.
                </p>

                <div data-aos='fade-up' data-aos-delay='700'>
                  <p>
                    <span className='font-medium text-2xl underline-offset-4 underline'>
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
                  </p>
                  <p className='font-serif'>
                    Tel: <a href='tel:+919848898488'>+91-9848898488</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=''></div> */}
          <div className='w-full  md:w-1/2 '>
            {/* <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7420128487547!2d78.454762175723!3d17.424164283469278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6feb9ea5%3A0x1e0a3e3dabcb8701!2sSaboo%20RKS%20Motor%20-%20Maruti%20Suzuki%20Arena%20(Sales%20%26%20Service%2C%20Somajiguda%2C%20Hyderabad)!5e0!3m2!1sen!2sin!4v1678944732967!5m2!1sen!2sin'
              height='500'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              title='Saboo Maruti'
              style={{
                width: '100%',
                border: '4px solid white ',
                borderRadius: '10px',
              }}
            ></iframe> */}
            <img src={bannerCotact} alt="" srcset="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
