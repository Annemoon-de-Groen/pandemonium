import '../Stylesheets/Homepage.css'
import image from '../Assets/Images/frontImageSmall.jpg'
import poster from '../Assets/Images/poster_spellingbee.jpg'
import { useEffect } from 'react'

function Homepage(){
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return(
        <>
        <div className="front">
            <h1 className='frontPandemonium'>Pandemonium</h1>
            <a className='button' id='komende_voorstelling_button' href='#komende_voorstelling'>Bekijk komende voorstellingen</a>
        </div>
        <div className='oker'>
            <p id='oker_tekst'>Pandemonium is een musicalgroep door jongeren opgericht, die muscials spelen met acteren en zingen en dansen enzo. Dit is een mooi tekstje over Pandemonium. Bla bla bla. Dit mag Hannelieke lekker een keer schrijven dit is niet mijn taak.</p>
            <img id='oker_image' src={image} alt="Afbeelding van Spelling Bee met Olive (Died)e en Barfée (Liza)"></img>
        </div>
        <div id='komende_voorstelling'>
            <div id='komende_voorstelling_tekst'>
                <h3>Aankomende voorstellingen</h3>
                <h4>Lang en gelukkig</h4>
                <p>Voorstelling over Assepoester sprookje die helemaal door de war raakt Bla bladie bla een heleboel gepraat enzo hier is dus een hele blurb van de voorstelling haha blurb is een leuk woord oke dit ziet er nu al wel een beetje uit als een tekst die lang genoeg is zolang Hannelieke nog niet iets heeft geschreven wat voldoende is. </p>
                <button id='koop_kaartje_button' className='button'><span>Koop kaartje</span></button> 
            </div>
            <img id='poster' src={poster} alt="Poster van de Spelling Bee, moet vervangen worden door een poster van de huidige voorstelling (Lang en Gelukkig)"></img>
        </div>
        <div id='information'>
            <div className='information_block'>
                <div className='information_title'>
                    <h4>Datum</h4>
                </div>
                <div className='information_info'>
                    <div>
                        <p>Zaterdag 8 februari</p>
                        <p>20:00</p>
                    </div>
                    <div>
                        <p>Zondag 9 februari</p>
                        <p>20:00</p>
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