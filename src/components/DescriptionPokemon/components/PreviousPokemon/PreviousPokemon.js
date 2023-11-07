import React, { useEffect, useState } from "react";
import styles from "./PreviousPokemon.module.scss";
import { getPokemon, getPokemonById } from "../../../../api/Pokemon";
import { Link } from "react-router-dom";
import colorName from "../SwitchTypeNextPreviousPoke";

function NextPokemon({ pokemon }) {
  const pokemonId = pokemon.pokedexId;
  const [previousPokemon, setPreviousPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  // On récupère le/les types du pokémon précédent
  const type1 = previousPokemon ? previousPokemon.types[0].name : null;
  const type2 = previousPokemon
    ? previousPokemon.types.length > 1
      ? previousPokemon.types[1].name
      : null
    : null;

  useEffect(() => {
    async function getPokemonLoad() {
      const pokemons = await getPokemon();
      setPokemons(pokemons);
      setPreviousPokemon(pokemons[pokemons.length - 1]);
    }

    async function getPokemonLoadById(pokemonId) {
      const previousPokemon = await getPokemonById(pokemonId - 1);
      setPreviousPokemon(previousPokemon);
    }

    if (pokemonId - 1 === 0) {
      getPokemonLoad();
    } else {
      getPokemonLoadById(pokemonId);
    }
  }, [pokemonId]);

  // On applique le style en fonction du/des types récupérés grâce au switch (voir fichier SwitchTypeNextPreviousPoke)
  const styleCSS = type2
    ? {
        backgroundImage: `linear-gradient(45deg, ${colorName(
          type1
        )} 50%, ${colorName(type2)} 50%)`,
      }
    : { backgroundColor: colorName(type1) };

  return (
    <div className={styles.main} style={styleCSS}>
      {!previousPokemon ? (
        ""
      ) : (
        <Link
          to={`/description/${previousPokemon.name.fr}/${previousPokemon.pokedexId}`}
        >
          <span className={styles.numero}>N° {previousPokemon.pokedexId} </span>
          <span className={styles.name}>{previousPokemon.name.fr}</span>
        </Link>
      )}
    </div>
  );
}

export default NextPokemon;
