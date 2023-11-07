import axios from "axios";

const API_URL = "https://pokebuildapi.fr/api/v1/types";

export async function getTypes() {
  try {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
