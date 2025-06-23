import { useNavigate, useParams } from "react-router-dom"
import history from '../Assets/Data/history.json'
import GreenThingy from "./GreenThingy"
import { useEffect, useState } from "react"


function GalerijPagina(){
    const [zoomedImage, setZoomedImage] = useState(null)

    
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    const navigate = useNavigate()
    const {voorstelling} = useParams()
    const item = history.history.find(x => x.thumbnail.link === voorstelling)

    var images = require.context('../Assets/Images/Spelling_bee/', true);
    switch (voorstelling){
        case "spelling_bee":{
            break
        }
        case "lang_en_gelukkig":{
            images = require.context('../Assets/Images/lang_en_gelukkig/', true);
            break
        }
        case "doorgespeeld": {
            images = require.context('../Assets/Images/doorgespeeld/', true);
            break
        } 
        default:
            return (
                <>
                    <p>{voorstelling} is geen voorstelling</p>
                    <button className='button' id='go_back_button' onClick={() => navigate('/galerij')}>Terug naar galerij</button>
                </>
                ) 
        }

        
    const imageList = images.keys().map(image => images(image));

    return (
        <div>
            <GreenThingy text={item.thumbnail.naam} format={imageList[0]} /> 
            <div className="centered galerij_page">
                <div className="galerij_page_top">
                    <div>
                        <p>{item.page.tekst}</p>
                    </div>
                    <div>
                        <p className="bold">Regisseur: </p>
                        <p>{item.page.regisseur}</p>
                    </div>
                </div>
                <div>
                    <div className="">
                        {imageList.map((image, index) => (
                            <img loading="lazy" key={index} src={image} alt={`image-${index}`} className="galerij_photo" onClick={() => setZoomedImage(image)}/>
                        ))}
                    </div> 
                </div>
            </div>

            <div id="myModal" className="modal" style={{display:`${zoomedImage ? "block": "none"}`}}>

                <span className="close" onClick={() => setZoomedImage(null)}>&times;</span>

                <img className="modal-content" id="img01" alt="Spelling Bee" src={zoomedImage} />
            </div>
        </div>
    )

}



export default GalerijPagina