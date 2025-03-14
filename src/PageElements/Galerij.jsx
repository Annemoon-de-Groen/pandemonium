import GreenThingy from "./GreenThingy"
import history from '../Assets/Data/history.json'
import GalerijElement from "./GalerijElement"
import '../Stylesheets/Galerij.css'
import { useEffect } from "react"


function Galerij(){
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return (<><GreenThingy text='Galerij' format='../Assets/Images/cast_image.jpg'/>
    <div className="galerij_list">
    {
        history.history.map((x, i) => {
            return <GalerijElement key={`galerij_element_${i}`} data={x}/>
        })
    }
    </div>


</>)
}

export default Galerij