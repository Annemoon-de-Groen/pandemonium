function CastMember({person}) {
    return (
        <div className="person">
            <div>
             <img className="person_picture" src={`https://github.com/Annemoon-de-Groen/the-25th-annual-putnam-county-spelling-bee/blob/main/src/assets/images/${person.first_name}.JPG?raw=true`} alt={`Image of ${person.first_name}`} />

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