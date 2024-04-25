import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../../API/index.js";
import PokemonCard from "../pokemonCard/PokemonCard.jsx";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const pokemonData = await getAllPokemon();
        console.log("Pokemon Data : ", pokemonData);
        setPokemons(pokemonData);
        // setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getPokemonData();
  }, []);
  //   console.log({ pokemons, error, isLoading });

  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (!isLoading) {
    return <p>Loading Pokemon...</p>;
  } else {
    return (
      <>
        <div className="container">
          <h1>Pokemon Data</h1>
          <div className="left-content">
            {pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
            <div className="btn-group">
              <button>Prev</button>
              <button>Next</button>
            </div>
          </div>
          <div className="right-content"></div>
        </div>
      </>
    );
  }
};

export default Pokemon;

{
  /* return <li key={index}> {pokemon.name}</li>; */
}
