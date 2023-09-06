import "./styles.css"

const PokemonCard =  ({name,id,sprites,types,alt}) =>{
    return(
        <div className="pokecard__container">
            <div className="pokecard__information">
                <h3>{name.toUpperCase()}</h3>
                <span>#{id}</span>
            </div>
           <div className="pokecard__image-type">
            <img src={sprites} alt="" />
            <div className="types">
                {types.map((type, index) => (
                    <span key={index} className={`type_${type}`}>
                        {type}
                    </span>
                ))}
            </div>

           </div>
            
        </div>
    )
}

export default PokemonCard;