import React from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
import patternWhite from '../../assets/other/pattern-grid-white.png';
import patternBlack from '../../assets/other/pattern-black.svg';
import solo from '../../assets/vehicle/solo/prod-solo.jpg';

const ModalSolo = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  if (!visible) return null;
  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed  inset-0 z-20 flex items-center justify-center  backdrop-blur-[3px] '
    >
      <div
        className=' mx-10 border border-gray-400 bg-[#edede6] px-8 py-4  md:px-16 '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
        {/* <div
          onClick={onClose}
          className=' -pr-10 my-1 flex cursor-pointer items-center justify-end text-3xl text-gray-500 hover:text-black'
        >
          <AiOutlineClose />
        </div> */}
        <div className='text-start  font-mono'>
          <span className='text-h3 '>Solo</span> <br />
          <span>The low floor midi-bus</span>
        </div>
        <div
          className=' my-6 h-[5px] w-full divide-x-8 bg-no-repeat  md:my-10'
          style={{ backgroundImage: `url(${patternBlack})` }}
        ></div>
        <div className='grid grid-cols-6'>
          <div className='mb-3 col-span-1'>
            <span className='font-mono text-[#00c389]'>LENGTH: </span>
            <br className='hidden md:block' />
            <span className='md:text-md font-roboto text-sm'>7.8m–9.9m</span>
            <br />
            <span className='font-mono text-[#00c389]'>ENGINE: </span>
            <br className='hidden md:block' />
            <span className='md:text-md font-roboto text-sm'>
              Full Electric 250kW
            </span>
            <br />
            <span className='font-mono text-[#00c389]'>CAPACITY: </span>
            <br className='hidden md:block' />
            <span className='md:text-md font-roboto text-sm'>
              Up to 36 passengers
            </span>
            <br />
            <span className='font-mono text-[#00c389]'>MAX RANGE </span>
            <br className='hidden md:block' />
            <span className='md:text-md font-roboto text-sm'>
              Up to 190 miles on a single charge
            </span>
            <br />
            <br />
            <button  className='md:hidden group relative h-min overflow-hidden border-[2px]  border-[#00c389] px-2 py-2 font-mono   text-[#00c389] shadow-inner'>
              <span className='border-t-1 ease absolute left-0 top-0 h-0 w-0 border-[#00c389] transition-all duration-200 group-hover:w-full'></span>
              <span className='border-b-1 ease absolute bottom-0 right-0 h-0 w-0 border-[#00c389] transition-all duration-200 group-hover:w-full'></span>
              <span className='ease absolute left-0 top-0 h-0 w-full bg-[#00c389] transition-all delay-200 duration-300 group-hover:h-full'></span>
              <span className='ease absolute bottom-0 left-0 h-0 w-full bg-[#00c389] transition-all delay-200 duration-300 group-hover:h-full'></span>
              <span className='absolute inset-0 h-full w-full bg-[#00c389]  opacity-0 delay-300 duration-300 group-hover:opacity-100'></span>
              <span className='ease relative transition-colors delay-200 duration-300 group-hover:text-white'>
                DOWNLOAD BROCHURE
              </span>
            </button>
          </div>
          <div className='mb-4 font-roboto text-sm leading-5 col-span-2'>
            An exceptionally versatile bus tailored to the needs of your town or
            city. It’s a favourite with passengers and drivers alike thanks to
            its distinctive design. The Solo offers a range of layout options
            including urban, interurban, school bus and airport applications.
            The low entry floor combined with the front axle forward of the
            front door allows for easy access to a fully flat lower saloon area.
          </div>
          <div className='col-span-3'>
            <img src={solo} alt='Solo' srcset='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSolo;
