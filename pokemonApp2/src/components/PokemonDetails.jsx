import React from "react";

const PokemonDetails = ({ data }) => {
  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {data.abilities ? (
              data.abilities.map((ability, index) => (
                <div className="group" key={index}>
                  <h2>{ability.ability.name}</h2>
                </div>
              ))
            ) : (
              <p>No abilities available</p>
            )}
          </div>
          <div className="stats">
            {data.stats ? (
              data.stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <h3>
                    {stat.stat.name} : {stat.base_stat}
                  </h3>
                </div>
              ))
            ) : (
              <p>No stats available</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonDetails;
