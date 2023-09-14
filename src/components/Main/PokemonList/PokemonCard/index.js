import "./styles.css"

import {PokemonCardStyled , PokecardInformationTitle,PokeCardImg, PokeCardTypes,PokeCardInformationStyled} from './styles.js';

const PokemonCard =  ({name,id,sprites,types,alt}) =>{
    return(
        <PokemonCardStyled className="pokecard__container shadow-md shadow-gray-700">
            <PokeCardInformationStyled className="pokecard__information">
                <PokecardInformationTitle>{name.toUpperCase()}</PokecardInformationTitle>
                <span>#{id}</span>
            </PokeCardInformationStyled>
           <div className="pokecard__image-type">
            <PokeCardImg src={sprites} alt="" />
            <div className="types">
                {types.map((type, index) => (
                    <PokeCardTypes key={index} color={type}>
                        {type}
                    </PokeCardTypes>
                ))}
            </div>

           </div>
            
        </PokemonCardStyled>
    )
}

export default PokemonCard;