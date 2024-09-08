import '../Stylesheets/Homepage.css'
import image from '../Assets/Images/frontImageSmall.jpg'
import poster from '../Assets/Images/poster_spellingbee.jpg'
import { useNavigate } from 'react-router-dom'

function Homepage(){
    const navigate = useNavigate()
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
                <button>Koop kaartje</button> 
            </div>
            <img id='poster' src={poster} alt="Poster van de Spelling Bee, moet vervangen worden door een poster van de huidige voorstelling (Lang en Gelukkig)"></img>
        </div>
        </>
    )
}

export default Homepage