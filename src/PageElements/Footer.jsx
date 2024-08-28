import icon from "../Assets/Images/pandemonium_icon.png"
import '../Stylesheets/Footer.css'


function Footer(){
    return (
        <footer className="Footer">
            <div className="footer_link">
                <p>Home</p>
                <p>Cast</p>
                <p>Galerij</p>
                <p>Contact</p>
            </div>
            <img id='icon' src={icon} alt="Icon"></img>
            <div className="footer_socials">
                <p>Instagram</p>
            </div>
        </footer>
    )
}

export default Footer