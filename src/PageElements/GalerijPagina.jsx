import { useParams } from "react-router-dom"
import history from '../Assets/Data/history.json'
import GreenThingy from "./GreenThingy"

function GalerijPagina(){
    const {voorstelling} = useParams()
    const item = history.history.find(x => x.thumbnail.link === voorstelling)
    const images = require.context('../Assets/Images/Spelling_bee/', true);
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
                        <p>Regisseur</p>
                        <p>{item.page.regisseur}</p>
                    </div>
                </div>
                <div>
                    <div className="">
                        {imageList.map((image, index) => (
                            <img key={index} src={image} alt={`image-${index}`} className="galerij_photo" />
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default GalerijPagina