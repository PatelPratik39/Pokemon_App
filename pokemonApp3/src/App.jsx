import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
// import { getAllPokemons } from "../src/API/index.js";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemons = async () => {
    setIsLoading(true);
    const response = await axios.get(url);
    // console.log(response);
    //  console.log(response.data);
    // console.log(response.data.results);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    getPokemon(response.data.results);
    setIsLoading(false);
    // console.log(pokemons);
  };
  const getPokemon = async(response) =>{
    response.map(async(item) =>{
      // console.log(item.url);
      const result = await axios.get(item.url)
      // console.log(result);
      //  console.log(result.data);
      setPokemons(state => {
        state=[...state, result.data]
        return state;
      });
    })
  }

  useEffect(() => {
    getPokemons();
  }, [url]);
  return (
    <>
      <div className="App">
        <h1> Pokemon App 3 - Pratik</h1>
      </div>
    </>
  );
}

export default App;
