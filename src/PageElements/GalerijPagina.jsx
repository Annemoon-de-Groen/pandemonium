import { useParams } from "react-router-dom"
import history from '../Assets/Data/history.json'
import GreenThingy from "./GreenThingy"

function GalerijPagina(){
    const {voorstelling} = useParams()
    const item = history.history.find(x => x.thumbnail.link === voorstelling)
    return (
        <div>
            <GreenThingy text={item.thumbnail.naam} format='https://www.beautifulballad.org/wp-content/uploads/2020/01/LMS-S8_Group_MB0083V4-scaled.jpg' /> 
            <div>
                <div className="galerij_page_top">
                    <div>
                        <p>{item.page.tekst}</p>
                    </div>
                    <div>
                        <p>Regisseur</p>
                        <p>{item.page.regisseur}</p>
                    </div>
                </div>
                <div> </div>
            </div>
        </div>
    )
}

export default GalerijPagina