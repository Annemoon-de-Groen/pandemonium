import logo from './logo.svg';
import './Stylesheets/App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './PageElements/NavBar';
import Footer from './PageElements/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>

          <Routes>
            <Route path="/" element={<p>Homepage</p>} />

            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
