import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import patternWhite from '../../assets/other/pattern-grid-white.png';
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
        className='rounded-lg border border-gray-400 bg-[#edede6] px-16 py-4 text-center '
        style={{ backgroundImage: `url(${patternWhite})` }}
      >
         <div
          onClick={onClose}
          className=' -pr-10 my-1 flex cursor-pointer items-center justify-end text-3xl text-gray-500 hover:text-black'
        >
          <AiOutlineCloseCircle />
        </div> 
        <div>
          <div>Solo</div> <div>The low floor midi-bus</div>
        </div>
        <div></div>
        <div>
          An exceptionally versatile bus tailored to the needs of your town or
          city. It’s a favourite with passengers and drivers alike thanks to its
          distinctive design. The Solo offers a range of layout options
          including urban, interurban, school bus and airport applications. The
          low entry floor combined with the front axle forward of the front door
          allows for easy access to a fully flat lower saloon area.
        </div>
        <div>
          <img src={solo} alt='' srcset='' />
        </div>
      </div>
    </div>
  );
};

export default ModalSolo;
