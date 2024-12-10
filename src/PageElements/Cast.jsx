import crew from '../Assets/Data/crew.json'
import CastMember from './CastMember'
import '../Stylesheets/Cast.css'
import GreenThingy from './GreenThingy'
import { useEffect } from 'react'

function Cast() {
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return (<>
    <GreenThingy text='Hier is een prachtige tekst over wie wij allemaal zijn' format='../Assets/Images/cast_image.jpg'/>
    <div className='cast_page'>
    {display('Cast')}
    {display('Band')}
    {display('Kostuum')}
    </div>
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