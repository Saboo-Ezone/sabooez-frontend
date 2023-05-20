import {  Routes, Route } from 'react-router-dom';

import Header from './components/otherComponents/Header';
import Footer from './components/otherComponents/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Tech from './pages/Tech';
import News from './pages/News';
import Contact from './pages/Contact';
import SwitchE1 from './components/vehicles/SwitchE1';
import Solo from './components/vehicles/Solo';
import Metrocity from './components/vehicles/Metrocity';
import Metrodecker from './components/vehicles/Metrodecker';

function App() {
  return (
    <>
      <div><Header/> </div>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/tech' element={<Tech />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/e1' element={<SwitchE1 />} />
          <Route exact path='/metrocity' element={<Metrocity />} />
          <Route exact path='/metrodecker' element={<Metrodecker />} />
          <Route exact path='/solo' element={<Solo />} />
        </Routes>

      <div><Footer/> </div>
    </>
  );
}

export default App;
