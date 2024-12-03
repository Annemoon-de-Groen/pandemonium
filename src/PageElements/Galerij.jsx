import GreenThingy from "./GreenThingy"
import history from '../Assets/Data/history.json'
import GalerijElement from "./GalerijElement"
import '../Stylesheets/Galerij.css'


function Galerij(){
    return (<><GreenThingy text='Galerij' format='../Assets/Images/cast_image.jpg'/>
    <div className="galerij_list">
    {
        history.history.map(x => {
            return <GalerijElement data={x}/>
        })
    }
    </div>


</>)
}

export default Galerij