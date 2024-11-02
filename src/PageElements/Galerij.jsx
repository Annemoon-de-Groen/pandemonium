import GreenThingy from "./GreenThingy"
import history from '../Assets/Data/history.json'
import GalerijElement from "./GalerijElement"
import '../Stylesheets/Galerij.css'


function Galerij(){
    return (<><GreenThingy text='Galerij' format='https://www.beautifulballad.org/wp-content/uploads/2020/01/LMS-S8_Group_MB0083V4-scaled.jpg'/>
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