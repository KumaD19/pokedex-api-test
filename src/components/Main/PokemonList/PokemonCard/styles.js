import styled from 'styled-components'


const PokemonCardStyled = styled.div`
    border: 1px solid #000;
    display: flex;
    align-items: center;
    width: 320px;
    flex-direction: column;
    padding: 20px;
    background-color: #1C1B1E;
    border-radius: 15px;
    color: #eee;

    &:hover {
        background-color: #3b3a3b;
        cursor:pointer;
        transition: ease-in-out .2s;
    }

    
`

const PokeCardInformationStyled = styled.div`
   display: flex;
   width: 100%;
   padding: 0 16px;
   justify-content: space-between;
   
   margin: 5px 0;

   
   
`




const PokecardInformationTitle = styled.h3`
    font-weight: 300;
    font-size: clamp(0.7rem,5vw,1rem);

`

const PokeCardImg = styled.img`
 height: 180px;
 width: 180px;
`

const PokeColorTypes = color =>{
    switch (color) {
        case "normal":
            return " background-color: #a8a878;"
        case "fighting":
            return " background-color: #c03028; "
        case "flying":
            return " background-color: #a890f0;"
        case "poison":
            return "background-color: #a040a0; "
        case "ground":
            return "background-color: #e0c068;" 
        case "rock":
            return "background-color: #b8a038;"
        case "bug":
            return "background-color: #a8b820;"
        case "ghost":
            return "background-color: #705898;"
        case "fire":
            return "background-color: #f08030;"
        case "water":
            return "background-color: #6890f0;" 
        case "grass":
            return "background-color: #78c850;"  
        case "electric":
            return "background-color: #f8d030;"
        case "psychic":
            return "background-color: #f85888;" 
        case 'ice':
            return " background-color: #98d8d8;"  
        case "dragon":
            return "background-color: #7038f8;"
        case "dark":
            return "background-color: #705848;"
        case "fairy":
            return "background-color: #ee99ac;"
        case "steel":
           return "background-color: #b8b8d0;";
                                    
        default:

    }
}

const PokeCardTypes = styled.span`
${({ color }) => PokeColorTypes(color)};
`

export {
    PokemonCardStyled,
    PokecardInformationTitle,
    PokeCardImg,
    PokeCardTypes,
    PokeCardInformationStyled    
}