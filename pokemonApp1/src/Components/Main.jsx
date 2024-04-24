// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import PokemonDetails from "./PokemonDetails";
// import axios from "axios";

// const Main = () => {
//  const [pokeData, setPokeData] = useState([]);
//  const [loading, setLoading] = useState(true);
//  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//  const [nextUrl, setNextUrl] = useState();
//  const [prevUrl, setPrevUrl] = useState();
//  const [pokeDex, setPokeDex] = useState();

// //   const pokeFun = async () => {
// //     setLoading(true);
// //     const res = await axios.get(url);
// //     // console.log(res.data.results);
// //     setNextUrl(res.data.next);
// //     setPrevUrl(res.data.previous);
// //     getPokemon(res.data.results);
// //     setLoading(false);
// //     // console.log(pokeData);
// //   };

// //   const getPokemon = async (res) => {
// //     res.map(async (item) => {
// //       //   console.log(item.url);
// //       const result = await axios.get(item.url);
// //       //   console.log(result.data);
// //       setPokeData((state) => {
// //         //storing data into a set Array
// //         state = [...state, result.data];
// //         state.sort((a, b) => (a.id > b.id ? 1 : -1)); //sorting the array based on id
// //         return state;
// //       });
// //     });
// //   };

// //   useEffect(() => {
// //     pokeFun();
// //   }, [url]);

// const pokeFun = async () => {
//   setLoading(true);
//   const res = await axios.get(url);
//   setNextUrl(res.data.next);
//   setPrevUrl(res.data.previous);
//   getPokemon(res.data.results);
//   setLoading(false);
// };
// const getPokemon = async (res) => {
//   res.map(async (item) => {
//     const result = await axios.get(item.url);
//     setPokeData((state) => {
//       state = [...state, result.data];
//       state.sort((a, b) => (a.id > b.id ? 1 : -1));
//       return state;
//     });
//   });
// };
// useEffect(() => {
//   pokeFun();
// }, [url]);

//   return (
//     <>
//       <div className="container">
//         <div className="left-content">
//           <Card pokemon={pokeData} loading={loading} />

//           <div className="btn-group">
//             <button> Prev </button>
//             <button> Next </button>
//           </div>
//         </div>
//         <div className="right-content">
//           <PokemonDetails />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;

import React from "react";
import Card from "./Card";
import PokemonDetails from "./PokemonDetails";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      console.log("API Response:", res.data); // Log the response
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const getPokemon = async (res) => {
    try {
      // Create an array of promises for fetching each Pokemon data
      const promises = res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      });

      // Wait for all promises to resolve
      const pokemonData = await Promise.all(promises);

      // Update the state with the resolved data
      setPokeData((prevState) => {
        const newData = [...prevState, ...pokemonData];
        newData.sort((a, b) => (a.id > b.id ? 1 : -1));
        return newData;
      });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      setLoading(false); // Set loading to false to stop showing "Loading"
    }
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  //   random Pokemon

//   const fetchRandomPokemon = async () => {
//     try {
//       // Fetch a random Pokémon ID (example: between 1 and 151)
//       const randomPokemonId = Math.floor(Math.random() * 151 + 1);
//       const response = await axios.get(`{url}+ ${randomPokemonId}`);
//       setPokeDex(response.data);
//     } catch (error) {
//       console.error("Error fetching random Pokémon:", error);
//     }
//   };

//    useEffect(() => {
//      fetchRandomPokemon();
//    }, []);
  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
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
                Prev
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
          {pokeDex && <PokemonDetails data={pokeDex} />}
        </div>
      </div>
    </>
  );
};
export default Main;
