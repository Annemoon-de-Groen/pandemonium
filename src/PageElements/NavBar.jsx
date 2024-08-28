import { useNavigate } from 'react-router-dom'
import '../Stylesheets/NavBar.css'
import logo from "../Assets/Images/pandemonium_logo.png"

function NavBar(){
    const navigate = useNavigate()


    return (
           <header>
      <nav className='navigationBar'>
        <img id='logo' src={logo} alt="Logo"></img>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/cast')}>Cast</button>
        <button onClick={() => navigate('/galerij')}>Galerij</button>

        <button onClick={() => navigate('/contact')}>Contact</button>

      </nav>
    </header>
    )
}


// <img id='frontPageImage' src="https://github.com/Annemoon-de-Groen/the-25th-annual-putnam-county-spelling-bee/blob/main/src/assets/images/Poster.jpeg?raw=true"></img>
export default NavBar