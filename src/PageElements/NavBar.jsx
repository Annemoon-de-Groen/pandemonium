import { useNavigate } from 'react-router-dom'
import '../Stylesheets/NavBar.css'
import logo from "../Assets/Images/pandemonium_logo.png"
import {BrowserView, MobileView} from 'react-device-detect';
import { useState } from 'react';

function NavBar(){
    const navigate = useNavigate()
    const [navVisible, setNavVisible] = useState(false) 

    function clickNavigate(link){
      setNavVisible(false)
      navigate(link)
    }

    return (
    <header>
      <BrowserView>
            <nav className='navigationBar'>
        <div id='navigationBar'>
          <div id='nav_logo'>
              <img id='logo' src={logo} alt="Logo" onClick={() => navigate('/')}></img>
          </div>
          <div id='nav_text'>
            <div className='nav_button_pc'>
              <button onClick={() => navigate('/')}>Home</button>
            </div>
            <div className='nav_button_pc'>
              <button onClick={() => navigate('/cast')}>Cast</button>
            </div>
            <div className='nav_button_pc'>
              <button onClick={() => navigate('/galerij')}>Galerij</button>
            </div>
            <div className='nav_button_pc'>
              <button onClick={() => navigate('/contact')}>Contact</button>
            </div>
          </div>
        </div>

      </nav>
      </BrowserView>
      <MobileView>
        <div className='navigationBarPhone'>
          <div id='nav_logo'>
              <img id='logoPhone' src={logo} alt="Logo" onClick={() => navigate('/')}></img>
          </div>
          <div onClick={() => {setNavVisible(!navVisible)}}>
              <img id="nav_more" src="https://static.thenounproject.com/png/356889-200.png" alt="Nav" />
          </div>
        </div>
        
        <div className={navVisible? 'button_list': 'hidden button_list'}>
            <div className='nav_button'>
              <button onClick={() => clickNavigate('/')}>Home</button>
            </div>
            <div className='nav_button'>
              <button onClick={() => clickNavigate('/cast')}>Cast</button>
            </div>
            <div className='nav_button'>
              <button onClick={() => clickNavigate('/galerij')}>Galerij</button>
            </div>
            <div className='nav_button'>
              <button onClick={() => clickNavigate('/contact')}>Contact</button>
            </div>
        </div>
      </MobileView>
    </header>
    )
}



// <img id='frontPageImage' src="https://github.com/Annemoon-de-Groen/the-25th-annual-putnam-county-spelling-bee/blob/main/src/assets/images/Poster.jpeg?raw=true"></img>
export default NavBar