import { useParams } from "react-router-dom";
import { getPokemonById } from "../../api/Pokemon";
import styles from "./Description.module.scss";
import { useEffect, useState } from "react";
import DescriptionPokemon from "../../components/DescriptionPokemon/DescriptionPokemon";
import Loading from "../../components/Loading/Loading";

function Description() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    async function getPokemonLoadById(pokemonId) {
      const pokemon = await getPokemonById(pokemonId);
      setPokemon(pokemon);
    }
    // Récupérer le pokemonId de l'url
    getPokemonLoadById(pokemonId);
  }, [pokemonId]);

  return (
    <div className={styles.main}>
      {!pokemon ? <Loading /> : <DescriptionPokemon pokemon={pokemon} />}
    </div>
  );
}

export default Description;
