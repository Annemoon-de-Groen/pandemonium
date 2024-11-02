import '../Stylesheets/GreenThingy.css'

function GreenThingy({text, format}){
    return (<div className='green'>
        
        <h3 className="greenText">{text}</h3>
        <img className="green_picture" src={format} alt="TODO:  Case picture" />

        </div>)
}

export default GreenThingy