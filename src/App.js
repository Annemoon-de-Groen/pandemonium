import logo from './logo.svg';
import './Stylesheets/App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './PageElements/NavBar';
import Footer from './PageElements/Footer';
import Homepage from './PageElements/Homepage';
import Cast from './PageElements/Cast';
import Galerij from './PageElements/Galerij';
import GalerijPagina from './PageElements/GalerijPagina';

function App() {
  return (
    <div className="App">
      <NavBar/>

          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path='/cast' element={<Cast/>} />
            <Route path='/galerij' element={<Galerij/>} />
            <Route path='/galerij/:voorstelling' element={<GalerijPagina/>} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
