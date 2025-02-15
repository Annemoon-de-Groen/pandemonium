import logo from './logo.svg';
import './Stylesheets/App.css';
import './Stylesheets/General.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './PageElements/NavBar';
import Footer from './PageElements/Footer';
import Homepage from './PageElements/Homepage';
import Cast from './PageElements/Cast';
import Galerij from './PageElements/Galerij';
import GalerijPagina from './PageElements/GalerijPagina';
import Contact from './PageElements/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="page">


          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/pandemonium" element={<Homepage/>} />
            <Route path='/cast' element={<Cast/>} />
            <Route path='/galerij' element={<Galerij/>} />
            <Route path='/galerij/:voorstelling' element={<GalerijPagina/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        
        <Footer/>
        </div>
    </div>
  );
}

export default App;
