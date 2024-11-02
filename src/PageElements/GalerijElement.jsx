import { useNavigate } from "react-router-dom"

function GalerijElement({data}){
    const navigate = useNavigate()
    return (
        <div className="galerij_element" onClick={() => navigate(data.thumbnail.link)}>
            <div>
                <img className="galerij_afbeelding" src={data.thumbnail.afbeelding}></img>
                <p>{data.thumbnail.naam}</p>
                <p>{data.thumbnail.jaar}</p>
            </div>
        </div>
    )
}

export default GalerijElement

