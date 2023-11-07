import React from "react";
import Sprites from "./components/Sprites/Sprites";
import styles from "./DescriptionPokemon.module.scss";
import Info from "./components/Infos/Infos";
import Stats from "./components/Stats/Stats";
import PokeTypes from "./components/PokeTypes/PokeTypes";
import Weakness from "./components/Weakness/Weakness";
import Resistances from "./components/Resistances/Resistances";
import Immunities from "./components/Immunities/Immunities";
import Evolution from "./components/Evolutions/Evolution";
import NextPokemon from "./components/NextPokemon/NextPokemon";
import PreviousPokemon from "./components/PreviousPokemon/PreviousPokemon";

function DescriptionPokemon({ pokemon }) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.previous}>
          <PreviousPokemon pokemon={pokemon} />
        </div>
        <div className={styles.next}>
          <NextPokemon pokemon={pokemon} />
        </div>
      </div>
      <h1>
        {pokemon.name.fr} N° {pokemon.pokedexId}
      </h1>
      <div className={styles.grille}>
        <Sprites pokemon={pokemon} />
        <Stats pokemon={pokemon} />
        <Info pokemon={pokemon} />
        <PokeTypes pokemon={pokemon} />
        <Weakness pokemon={pokemon} />
        <Resistances pokemon={pokemon} />
        <Immunities pokemon={pokemon} />
        <Evolution pokemon={pokemon} />
      </div>
    </div>
  );
}

export default DescriptionPokemon;
