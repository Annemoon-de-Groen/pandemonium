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


    console.log(imageList)
    return (<>
    <GreenThingy text='De cast en crew van Pandemonium' format='../Assets/Images/cast_image.jpg'/>
    <div className='cast_page'>
    {display('Cast', imageList)}
    {display('Band', imageList)}
    {display('Kostuum', imageList)}
    </div>
    </>
    )
}

function display(name, imageList){
    return(
        <>
        <h2 className='category'>{name}</h2>
        <div className='crewList'>
    {crew.crew.map(x => {
        if (x.category === name.toLowerCase())
        {
            x.image = imageList.find(i => i.includes(x.first_name))
            return <CastMember person={x}/>

        }
        return <></>
    })}
    </div>
    </>
    )
}


export default Cast