import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/otherComponents/Header';
import Footer from './components/otherComponents/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Tech from './pages/Tech';
// import News from './pages/News';
import Contact from './pages/Contact';
import SwitchE1 from './components/vehicles/SwitchE1';
import Solo from './components/vehicles/Solo';
import Metrocity from './components/vehicles/Metrocity';
import Metrodecker from './components/vehicles/Metrodecker';
import Careers from './pages/Careers';
import ModalEnquire from './components/otherComponents/ModalEnquire';
import Test from './components/otherComponents/Test';


function App() {
 
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (showMyModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMyModal]);


  return (
    <>
      <div className='pb-16 md:pb-20'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/tech' element={<Tech />} />
        <Route exact path='/careers' element={<Careers />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/e1' element={<SwitchE1 setShowMyModal={setShowMyModal} />} />
        <Route exact path='/metrocity' element={<Metrocity setShowMyModal={setShowMyModal} />}  />
        <Route exact path='/metrodecker' element={<Metrodecker setShowMyModal={setShowMyModal} />}  />
        <Route exact path='/solo' element={<Solo />} />
        <Route exact path='/test' element={<Test />} />
        <Route exact path='/*' element={<div>No page found </div>} />
      </Routes>
      <Footer />
      <div className='z-10'>

      <ModalEnquire onClose={handleOnClose} visible={showMyModal} />
      </div>
    </>
  );
}

export default App;
