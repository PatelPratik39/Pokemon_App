import React, { useEffect, useState } from "react";
// import { getAllPokemon } from "../../API/index.js";
import PokemonCard from "../pokemonCard/PokemonCard.jsx";
import axios from "axios";
import PokemonDetails from "../PokemonDetails.jsx";

const Pokemon = () => {
  const [pokeData, setPokeData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
   const [pokeDex, setPokeDex] = useState();

  const getPokemons = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log("API Response:", response.data); // Log the response
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      getPokemon(response.data.results);
      // console.log(response);
      // console.log(response.data);
      // console.log(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const getPokemon = async (response) => {
    response.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (isLoading) {
    // Check isLoading instead of !isLoading
    return <p>Loading Pokemon...</p>;
  } else {
    return (
      <>
        <div className="container">
          <div className="left-content">
            <PokemonCard
              pokemon={pokeData}
              isLoading={isLoading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />

            <div className="btn-group">
              {prevUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(prevUrl);
                  }}
                >
                  Previous
                </button>
              )}

              {nextUrl && (
                <button
                  onClick={() => {
                    setPokeData([]);
                    setUrl(nextUrl);
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="right-content">
            <PokemonDetails data={pokeDex} />
          </div>
        </div>
      </>
    );
  }
};

export default Pokemon;

{
  /* return <li key={index}> {pokemon.name}</li>; */
}

// useEffect(() => {
//     const getPokemonData = async () => {
//       try {
//         const pokemonData = await getAllPokemon();
//         console.log("Pokemon Data : ", pokemonData);
//         setPokeData(pokemonData.results);
//         // getPokemon(pokemonData.results);

//         setIsLoading(false); // Set loading state to false after data is fetched
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };
//     getPokemonData();
//   }, []);

// //   useEffect(() => {
// //     const getPokemon = async (pokeData) => {
// //       pokeData.map(async (item) => {
// //         //   console.log(item.url);
// //         const result = await axios.get(item.url);
// //         setPokeData((state) => {
// //           state = [...state, result.data];
// //           return state;
// //         });
// //       });
// //     };
// //     getPokemon();
// //   }, []);
