import crew from '../Assets/Data/crew.json'
import CastMember from './CastMember'
import '../Stylesheets/Cast.css'
import GreenThingy from './GreenThingy'

function Cast() {
    return (<>
    <GreenThingy text='Hier is een prachtige tekst over wie wij allemaal zijn' format='../Assets/Images/cast_image.jpg'/>
    {display('Cast')}
    {display('Band')}
    {display('Kostuum')}
    </>
    )
}

function display(name){
    return(
        <>
        <h2 className='category'>{name}</h2>
        <div className='crewList'>
    {crew.crew.map(x => {
        if (x.category === name.toLowerCase())
            return <CastMember person={x}/>
        return <></>
    })}
    </div>
    </>
    )
}


export default Cast