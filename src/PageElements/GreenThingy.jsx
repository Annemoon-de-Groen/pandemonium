import '../Stylesheets/GreenThingy.css'

function GreenThingy({text, format}){
    const voorstelling = window.location.href
    const slug = voorstelling.split('/').pop();
    const image = require(`../Assets/Images/GreenThingy/${slug}.JPG`);
    
    return (<div className='green'>
        
        <h3 className="greenText">{text}</h3>
        <img className="green_picture" src={image} alt="" />

        </div>)
}

export default GreenThingy