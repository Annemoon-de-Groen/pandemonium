import { useParams } from "react-router-dom"
import history from '../Assets/Data/history.json'
import GreenThingy from "./GreenThingy"
import { useEffect, useState } from "react"

function GalerijPagina(){
    const {voorstelling} = useParams()
    const item = history.history.find(x => x.thumbnail.link === voorstelling)
    const images = require.context('../Assets/Images/Spelling_bee/', true);
    const imageList = images.keys().map(image => images(image));
    const [zoomedImage, setZoomedImage] = useState(null)

    
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
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
                            <img key={index} src={image} alt={`image-${index}`} className="galerij_photo" onClick={() => setZoomedImage(image)}/>
                        ))}
                    </div> 
                </div>
            </div>

            <div id="myModal" class="modal" style={{display:`${zoomedImage ? "block": "none"}`}}>

                <span class="close" onClick={() => setZoomedImage(null)}>&times;</span>

                <img class="modal-content" id="img01" alt="Spelling Bee" src={zoomedImage} />
            </div>
        </div>
    )

}



export default GalerijPagina