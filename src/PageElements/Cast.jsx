import crew from '../Assets/Data/crew.json'
import CastMember from './CastMember'
import '../Stylesheets/Cast.css'
import GreenThingy from './GreenThingy'
import { useEffect } from 'react'

function Cast() {
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    const images = require.context('../Assets/Images/Cast_and_crew/', true);
    const imageList = images.keys().map(image => images(image));

    return (<>
    <GreenThingy text='De cast en crew van Pandemonium' format='../Assets/Images/cast_image.jpg'/>
    <div className='cast_page'>
    {display('Cast', imageList)}
    {display('Band', imageList)}
    {display('Crew', imageList)}
    </div>
    </>
    )
}

function display(name, imageList){
    return(
        <>
        <h2 className='category'>{name}</h2>
        <div className='crewList'>
    {crew.crew.map((x, i) => {
        if (x.category === name.toLowerCase() && x.actief)
        {
            x.image = imageList.find(i => i.includes(x.first_name))
            return <CastMember key={`cast_member_${i}`} person={x}/>

        }
        return <></>
    })}
    </div>
    </>
    )
}


export default Cast