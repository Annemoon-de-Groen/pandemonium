import '../Stylesheets/Homepage.css'
import image from '../Assets/Images/frontImageSmall.jpg'
import poster from '../Assets/Images/poster_spellingbee.jpg'
import { useEffect, useState } from 'react'

const backgroundCount = 4

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
        console.log(imgClass)
        
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
            <p >Pandemonium is een theatergezelschap dat bestaat sinds 2023. Wij maken muziektheater voorstellingen die volledig gemaakt en geproduceerd zijn door jongeren. Het gezelschap bestaat onder andere uit acteurs, muzikanten, kostuum en decor crew en meer. </p>
            <p>Wij nodige je van harte uit bij onze eerst volgende voorstelling, kijk hier onder voor informatie en koop snel je kaarten!</p>
            </div>
        <img id='oker_image' src={image} alt="Afbeelding van Spelling Bee met Olive (Died)e en Barfée (Liza)"></img>
        </div>
        <div id='komende_voorstelling'>
            <div id='komende_voorstelling_tekst'>
                <h3>Aankomende voorstellingen</h3>
                <h4>Lang en gelukkig</h4>
                <p>Wat gebeurt er als een vergeetachtige fee het sprookje van Assepoester, Roodkapje en een prins verteld? Daar kom je achter in de sprookjesvoorstelling Lang en Gelukkig! Deze voorstelling is een verzameling van klassieke sprookjes met een alternatieve draai en een knipoog naar de actualiteit. Lang en Gelukkig is voor het hele gezin, dus iedereen is welkom. Koop gauw je kaarten voor een van de voorstelling dagen! </p>
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