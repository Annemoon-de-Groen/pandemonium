import crew from '../Assets/Data/crew.json'
import CastMember from './CastMember'

function Cast() {
    return (<>
    {display('Cast')}
    {display('Band')}
    {display('Kostuum')}
    </>
    )
}

function display(name){
    return(
        <>
        <h2>{name}</h2>
    {crew.crew.map(x => {
        if (x.category === name.toLowerCase())
            return <CastMember person={x}/>
        return <></>
    })}</>
    )
}


export default Cast