import { useNavigate } from "react-router-dom"

function GalerijElement({data}){
    const navigate = useNavigate()
    const cast_image = require(`../Assets/Images/${data.thumbnail.afbeelding}`);

    return (
        <div className="galerij_element" onClick={() => navigate(data.thumbnail.link)}>
            <div>
                <img className="galerij_afbeelding" src={cast_image}></img>
                <div>
                <p>{data.thumbnail.naam}</p>
                <p className="galerij_jaar">{data.thumbnail.jaar}</p>
                </div>

            </div>
        </div>
    )
}

export default GalerijElement

