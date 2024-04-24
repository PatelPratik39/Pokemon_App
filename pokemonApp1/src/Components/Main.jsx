import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokemonDetails from "./PokemonDetails";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="btn-group">
            <button> Prev </button>
            <button> Next </button>
          </div>
        </div>
        <div className="right-content">
          <PokemonDetails />
        </div>
      </div>
    </>
  );
};

export default Main;
