import '../Stylesheets/Homepage.css'
import image from '../Assets/Images/frontImageSmall.jpg'
import { useEffect, useState } from 'react'

const backgroundCount = 3

//TODO::: Voeg URL toe naar externe ticketpagina wanneer isDisabled op false wordt gezet
const isDisabled = true;

function Homepage(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    const [imgClass, setImgClass] = useState(2)
    function plusSlides(direction){
        if (imgClass <= 1 && direction === -1) {
            setImgClass(backgroundCount) 
            return
        }
        if (imgClass >= backgroundCount && direction === 1) {
            setImgClass(1)
            return
        }
        setImgClass((imgClass + direction))
        
    }
    return(
        <>
        <div className={`front front_image_${imgClass}`}>
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            <div className='front_hero'>
                <h1 className='frontPandemonium'>Pandemonium</h1>
                <a className='button' id='komende_voorstelling_button' href='#komende_voorstelling'>Bekijk komende voorstellingen</a>
            </div>
        </div>
        <div className='oker'>
            <div id='oker_tekst'>
            <p >Pandemonium is een theatergezelschap dat bestaat sinds 2023. Wij maken muziektheatervoorstellingen die volledig gemaakt en geproduceerd zijn door jongeren. Het gezelschap bestaat uit acteurs, muzikanten, kostuum- en decorcrew en meer. </p>
            <p>Wij nodigen je van harte uit bij onze eerstvolgende voorstelling, kijk hieronder voor informatie en koop snel je kaarten!</p>
        </div>
        <div>
            <img id='oker_image' src={image} alt="Afbeelding van Spelling Bee met Olive (Diede) en Barfée (Liza)"></img>

        </div>
        </div>
        <div id='komende_voorstelling'>
            <div id='komende_voorstelling_tekst'>
                <h3>Aankomende voorstellingen</h3>
                <h4>Doorgespeeld</h4>
                <p>Na een dramatisch verloren wedstrijd worden de meiden van SC Spaubeek opgesloten in de kleedkamer. Iemand heeft de tactiek doorgespeeld, maar wie? Wat begint met een simpel verhoor, ontaardt in een chaos van verdachtmakingen, onderhuidse spanningen en onthullingen die verder gaan dan voetbal. “Doorgespeeld” is een komische voorstelling over vriendschap, verraad en verliezen (dik verliezen...) </p>
                {
                    isDisabled ?
                   <p className='koop_kaartje_tekst'>Kaartjes binnenkort beschikbaar</p>:
                <a href='https://www.ticketkantoor.nl/shop/langengelukkig' target='_blank'>
                   <button disabled={false} id='koop_kaartje_button' className='button'><span>Koop kaartje</span></button> 

                </a>

                }
            </div>
            {/* <img id='poster' src={poster} alt="Poster van Lang en Gelukkig"></img> */}
        </div>
        <div id='information'>
            <div className='information_block'>
                <div className='information_title'>
                    <h4>Datum</h4>
                </div>
                <div className='information_info'>
                    <div>
                        <p>Zaterdag 21 juni</p>
                        <p>19:30</p>
                    </div>
                    <div>
                        <p>Zondag 22 juni</p>
                        <p>19:30</p>
                    </div>
                </div>

            </div>
            <div className='information_block'>
                <div>
                <div className='information_title'> 
                    <h4>Locatie</h4>
                </div>
                <div className='information_info'>
                        <p>Cultuurcampus Vleuten
                        </p>
                        <p>Burchtpoort 5, 3452 MD Utrecht</p>
                        <p>Bushalte: Vleuten, Vleuterweide-Centrum</p>
                        <div id='mapsBorder'>
                            <button id='mapsLocation'>
                            <a  href="https://www.google.com/maps/place/CultuurCampus+-+kunstencentrum+en+theater/@52.0935338,5.002394,15z/data=!4m6!3m5!1s0x47c6700dd8d3baf5:0x123be006b344a8c6!8m2!3d52.0938699!4d5.0110025!16s%2Fg%2F11j2yqn33w?entry=ttu" target="_blank">Open in Maps           
                            <img id='mapsLogo' src='https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-1-1-768x1101.png'></img>
                        </a>
                            </button>
                    </div>
                </div> 
                </div>


            </div>
        </div>
        </>
    )
}

export default Homepage