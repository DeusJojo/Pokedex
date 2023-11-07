import React, { useEffect, useState } from "react";
import styles from "./NextPokemon.module.scss";
import { getPokemonById } from "../../../../api/Pokemon";
import { Link } from "react-router-dom";
import colorName from "../SwitchTypeNextPreviousPoke";

function NextPokemon({ pokemon }) {
  const pokemonId = pokemon.pokedexId;
  const [nextPokemon, setNextPokemon] = useState(null);

  const type1 = nextPokemon ? nextPokemon.types[0].name : null;
  const type2 = nextPokemon
    ? nextPokemon.types.length > 1
      ? nextPokemon.types[1].name
      : null
    : null;

  useEffect(() => {
    async function getPokemonLoadById(pokemonId) {
      let nextPokemon = await getPokemonById(pokemonId + 1);
      if (!nextPokemon.name) {
        nextPokemon = await getPokemonById(1);
      }
      setNextPokemon(nextPokemon);
    }
    // Récupérer le pokemonId de l'url
    getPokemonLoadById(pokemonId);
  }, [pokemonId]);

  const styleCSS = type2
    ? {
        backgroundImage: `linear-gradient(45deg, ${colorName(
          type1
        )} 50%, ${colorName(type2)} 50%)`,
      }
    : { backgroundColor: colorName(type1) };

  return (
    <div className={styles.main} style={styleCSS}>
      {!nextPokemon ? (
        ""
      ) : (
        <Link
          to={`/description/${nextPokemon.name.fr}/${nextPokemon.pokedexId}`}
        >
          <span className={styles.numero}>N° {nextPokemon.pokedexId} </span>
          <span className={styles.name}>{nextPokemon.name.fr}</span>
        </Link>
      )}
    </div>
  );
}

export default NextPokemon;
