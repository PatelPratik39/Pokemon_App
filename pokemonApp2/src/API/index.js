const APIURL = "https://pokeapi.co/api/v2/pokemon/";
// const APIURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

 export const getAllPokemon = async () => {
  try {
    const response = await fetch(APIURL);
    const responseAPI = await response.json();
    console.log(responseAPI.results);
    return responseAPI.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// getAllPokemon();
