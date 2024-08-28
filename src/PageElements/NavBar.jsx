import { useNavigate } from 'react-router-dom'
import '../Stylesheets/NavBar.css'

function NavBar(){
    const navigate = useNavigate()

    return (
           <>
      <nav className='navigationBar'>
        <h1 className="logo">Pandemonium</h1>
        <img id='logo' src="file:///C:/Users/annem/Downloads/pandemonium%20logo/pandemonium%20logo/pandemonium%20logo.svg" alt="Logo"></img>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/cast')}>Cast</button>
        <button onClick={() => navigate('/galerij')}>Galerij</button>

        <button onClick={() => navigate('/contact')}>Contact</button>

      </nav>
    </>
    )
}


// <img id='frontPageImage' src="https://github.com/Annemoon-de-Groen/the-25th-annual-putnam-county-spelling-bee/blob/main/src/assets/images/Poster.jpeg?raw=true"></img>
export default NavBar