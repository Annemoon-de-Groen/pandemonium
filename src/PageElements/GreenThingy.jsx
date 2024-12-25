import '../Stylesheets/GreenThingy.css'

function GreenThingy({text, format}){
    const image = require('../Assets/Images/cast_image.jpg');
    
    return (<div className='green'>
        
        <h3 className="greenText">{text}</h3>
        <img className="green_picture" src={image} alt="TODO:  Case picture" />

        </div>)
}

export default GreenThingy