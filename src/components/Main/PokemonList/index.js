import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import PokemonCard from "./PokemonCard";
import axios from "axios";

import "./styles.css"

const PokemonList = () => {
    const { response, loading, error } = useAxios("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (loading) {
            console.log("Loading data...");
        } else if (error) {
            console.error("An error occurred:", error);
        } else if (response) {
            console.log("Data fetched:", response.results);
            const storePokemon = [];
            Promise.all(
                response.results.map(async result => {
                    const { url } = result;
                    try {
                        const res = await axios.get(url);
                        storePokemon.push(res.data);
                    } catch (error) {
                        console.log(error);
                    }
                })
            ).then(() => {
                setPokemons(prevPokemons => [...prevPokemons, ...storePokemon]);
            });
        }
    }, [response, loading, error]);

    const pokeZeros = (id) =>{
       let convertedAmount = id.toString();

       if(convertedAmount.length<4){
            const amountToAdd = 4- convertedAmount.length ;

            for( let i=0;i<amountToAdd;i++){
                convertedAmount = '0' + convertedAmount;
            }
       }

       return convertedAmount
    }

    return (
        <section className="pokemonlist__container">
            {pokemons.map(pokemon => (
                <PokemonCard id={pokeZeros(pokemon.id)} key={pokemon.id} name={pokemon.name} sprites={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types.map(type => type.type.name)} />
            ))}
        </section>
    );
}

export default PokemonList;