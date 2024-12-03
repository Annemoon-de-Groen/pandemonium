import { useNavigate } from "react-router-dom"
import icon from "../Assets/Images/pandemonium_icon.png"
import '../Stylesheets/Footer.css'
import {BrowserView, MobileView} from 'react-device-detect';

function Footer(){
    const navigate = useNavigate()
    return (
        <footer className="Footer">
            <BrowserView>
            <div className="footer_link">
                <p onClick={() => navigate('/')}>Home</p>
                <p onClick={() => navigate('/cast')}>Cast</p>
                <p onClick={() => navigate('/galerij')}>Galerij</p>
                <p onClick={() => navigate('/contact')}>Contact</p>
            </div>
            </BrowserView>
            <div>
            <img id='icon' src={icon} alt="Icon"></img>

            </div>
            <div className="footer_socials">
                <div>
                    <p>
                    <a href="https://www.instagram.com/pandemoniumtheater?igsh=Yzljb2hjOGM4ano2" target="_blank">@Pandemoniumtheater</a>
                    </p>
                </div>
                <div>
                    <p>
                    <a href="tel:+31621472515">06 2147 2515</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer