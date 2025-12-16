import '../Stylesheets/Homepage.css'
import image from '../Assets/Images/frontImageSmall.jpg'
import poster from '../Assets/Images/Poster_doorgespeeld.jpeg'
import { useEffect, useState } from 'react'
const backgroundCount = 7

//TODO::: Voeg URL toe naar externe ticketpagina wanneer isDisabled op false wordt gezet
const isDisabled = false;

function Homepage(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    const [imgClass, setImgClass] = useState(1)
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
                <h3>Komende voorstelling</h3>
                <h4>De rode draad</h4>
                <p>Geblesseerde ballerina’s, bruidswinkels, airfryers, dode katten en…(verassend veel) kinderen. De rode draad is een muziektheatervoorstelling bestaande uit losse taferelen die niks met elkaar te maken hebben. Of nou…
Kom erachter hoe je in touch blijft met je lichaam en waarom mensen nou eigenlijk zingen. Mogelijk vind je zelfs nog een rode draad...
Welkom bij de revue! </p>
                {
                    isDisabled ?
                   <p className='koop_kaartje_tekst'>Kaartjes binnenkort beschikbaar</p>:
                <a href='https://www.ticketkantoor.nl/shop/derodedraad' target='_blank'>
                   <button disabled={false} id='koop_kaartje_button' className='button'><span>Koop kaartjes</span></button> 

                </a>

                }
            </div>
            {/* <img id='poster' src={poster} alt="Poster van doorgespeeld"></img> */}
        </div>
        <div id='information'>
            <div className='information_block'>
                <div className='information_title'>
                    <h4>Datum</h4>
                </div>
                <div className='information_info'>
                    <div>
                        <p>Zaterdag 10 januari</p>
                        <p>19:30</p>
                    </div>
                    <div>
                        <p>Zondag 11 januari</p>
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