import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logo/white logo.png';
import patternPng from '../../assets/other/pattern.png';

const Footer = () => {
  return (
    <div className='bg-[#505bfe]  bg-opacity-95  p-10 text-white'>
      <div
        className='grid w-full justify-center  gap-4 text-center sm:grid-cols-3 md:gap-2 md:text-left '
        style={{ backgroundImage: `url(${patternPng})` }}
      >
        <div className='flex flex-col items-center md:items-start'>
          <img
            src={logoWhite}
            alt=''
            srcSet=''
            className='-mt-6 h-16  md:h-20'
          />
          <div className='flex gap-1 pl-2'>
            <a
              className='mb-2 mr-2 hover:text-blue-300'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='16'
                viewBox='0 0 16 16'
                width='16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'></path>
              </svg>
            </a>
            <a
              className='mb-2 mr-2 hover:text-blue-800'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='16'
                viewBox='0 0 16 16'
                width='16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'></path>
              </svg>
            </a>
            <a
              className='mb-2 mr-1 hover:text-blue-800'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.3,12.9c-0.9,0-1.7,0-2.5,0c0-2.8,0-5.6,0-8.4c0.8,0,1.7,0,2.5,0c0,0.3,0,0.7,0,0.9C7.5,5.2,7.7,5,7.9,4.9&#10;    c1.3-1.1,3.5-0.9,4.5,0.5c0.4,0.6,0.6,1.3,0.6,2c0,1.8,0,3.6,0,5.5c0,0,0,0,0,0.1c-0.9,0-1.7,0-2.6,0c0-0.1,0-0.2,0-0.3&#10;    c0-1.4,0-2.7,0-4.1c0-0.3,0-0.6-0.1-0.9c-0.2-0.7-0.6-1-1.2-1C8.3,6.5,7.7,6.8,7.5,7.4c-0.1,0.3-0.2,0.7-0.2,1c0,1.4,0,2.8,0,4.2&#10;    C7.3,12.7,7.3,12.8,7.3,12.9z'
                ></path>
                <path d='M0.5,4.4c0.9,0,1.7,0,2.6,0c0,2.8,0,5.6,0,8.4c-0.9,0-1.7,0-2.6,0C0.5,10.1,0.5,7.3,0.5,4.4z'></path>
                <path d='M1.7,3.3c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6C3.3,2.6,2.6,3.3,1.7,3.3z'></path>
              </svg>
            </a>
            <a
              className='mb-2 mr-1 hover:text-blue-800'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='14'
                viewBox='0 0 16 16'
                width='14'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.9,16.1c0-2.5,0-4.9,0-7.4c-0.5,0-1.1,0-1.6,0c0-0.8,0-1.6,0-2.5c0.3,0,0.7,0,1,0c0.6,0,0.6,0,0.6-0.5c0-0.6,0-1.1,0-1.7&#10;      c0-1.3,0.9-2.4,2.2-2.6c0.6-0.1,1.2-0.1,1.8-0.1c0.6,0,1.1,0,1.7,0c0.1,0,0.2,0,0.2,0.1c0,0.8,0,1.6,0,2.5C8.7,4,8.6,4,8.5,4&#10;      C8,4,7.5,4,7.1,4C6.5,4,6.2,4.2,6.2,4.8c0,0.4,0,0.9,0,1.3c0,0.2,0.1,0.2,0.2,0.2c0.7,0,1.4,0,2.1,0c0.1,0,0.2,0,0.3,0&#10;      C8.7,7.1,8.6,7.9,8.5,8.8c-0.8,0-1.5,0-2.3,0c0,2.5,0,4.9,0,7.4C5.1,16.1,4,16.1,2.9,16.1z'
                ></path>
              </svg>
            </a>
            <a
              className='mb-2 hover:text-red-800'
              href='https://www.youtube.com/channel/UCNYKL1eNu04KF-kMU423AuQ'
              rel='noreferrer'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='14'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.2,12.9c-2-0.1-4.1-0.2-6.1-0.3c-0.6,0-1.1-0.1-1.6-0.5c-0.5-0.3-0.8-0.8-0.9-1.3C0.3,9.5,0.3,8.3,0.3,7&#10;         c0-1.4,0-2.7,0.2-4.1c0.1-0.6,0.2-1.1,0.6-1.6C1.5,1,1.9,0.8,2.4,0.7C3.6,0.5,4.8,0.4,6,0.4c2.8-0.1,5.6-0.1,8.4,0.1&#10;         c0.6,0,1.1,0.1,1.7,0.2c0.9,0.2,1.6,0.8,1.8,1.7C17.9,3.2,18,4,18.1,4.8c0.1,1.8,0.1,3.6-0.2,5.3c-0.1,0.5-0.2,1-0.5,1.4&#10;         c-0.4,0.5-0.8,0.8-1.4,0.9c-1.2,0.2-2.4,0.2-3.6,0.3C11.4,12.8,10.3,12.8,9.2,12.9C9.2,12.8,9.2,12.8,9.2,12.9z M7.4,9.2&#10;         c1.6-0.9,3.1-1.8,4.6-2.7C10.5,5.7,9,4.8,7.4,3.9C7.4,5.7,7.4,7.4,7.4,9.2z'
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className='font-semibold uppercase underline underline-offset-2'>
            Helpful Links
          </div>
          <div className='pt-1 hover:text-yellow-300'>
            <Link to='e1'>SWITCH e1</Link>
          </div>
          <div className='pt-1 hover:text-yellow-300'>
            <Link to='metrodecker'>Metrodecker</Link>
          </div>
          <div className='pt-1 hover:text-yellow-300'>
            <Link to='metrocity'>Metrocity</Link>
          </div>
          <div className='pt-1 hover:text-yellow-300'>
            <Link to='solo'>Solo</Link>
          </div>
        </div>
        <div>
          <div>
            <span className='font-semibold uppercase underline underline-offset-2'>
              Address
            </span>
            <br />
            RKS Motor - Saboo Towers, <br />
            6-3-905, Raj Bhavan Rd, Somajiguda,
            <br />
            Hyderabad, Telangana 500082
          </div>

          <div>
            <a
              href='mailto:info@saboomaruti.in'
              className='hover:text-yellow-300'
            >
              info@saboomaruti.in
            </a>
            <br />
            Tel:{' '}
            <a href='tel:+91 98488 98488' className='hover:text-yellow-300'>
              +91 98488 98488
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
