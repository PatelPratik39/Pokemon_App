// const POKEAPI = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";

const getAllPokemons = async () => {
  try {
    const response = await fetch(POKEAPI);
    const resJson = await response.json();
    console.log(resJson.data);
    return resJson.data;
  } catch (error) {
    console.error(error);
  }
};
getAllPokemons;