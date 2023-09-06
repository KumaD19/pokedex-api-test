import "./styles.css";

import PokemonList from "./PokemonList"

const Main = () =>{
    return(
        <main className="main__container">
            <h2>All Pokemon</h2>
            <PokemonList></PokemonList>
            
        </main>

    );

}

export default Main;