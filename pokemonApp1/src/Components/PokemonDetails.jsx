import React from "react";

const PokemonDetails = () => {
  return (
    <>
      <div>
        <h1> Pokemon Details </h1>
        <h2>Charmander</h2>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          alt="Charmander"
        />
        <div className="abilities">
          <div className="group">
            <h2>Blaze</h2>
          </div>
          <div className="group">
            <h2>solar-power</h2>
          </div>
        </div>
        <div className="base-stat">
          <h3>Hp : 30</h3>
          <h3>Attack : 52</h3>
          <h3>Defense : 43</h3>
          <h3>special-attack : 50</h3>
          <h3>Speed</h3>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
