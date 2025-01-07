function CastMember({person}) {
    return (
        <div className="person">
            <div>
             <img className="person_picture" id={`${person.first_name}_id`} src={person.image} alt={`Afbeelding van ${person.first_name}`}/>
            </div>
            <div>
            <p className="name">{person.first_name} {person.last_name}</p>
            <p className="pronouns">{person.pronouns}</p>
            {
                person.functie.map(x => {
                    return <p className="functie">{x}</p>
                })
            }
            </div>

        </div>
    )
}

export default CastMember