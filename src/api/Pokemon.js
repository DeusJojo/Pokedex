import axios from "axios";

const API_URL = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";

export async function getPokemon() {
  try {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonById(pokemonId) {
  try {
    const { data } = await axios.get(`${API_URL}/${pokemonId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
