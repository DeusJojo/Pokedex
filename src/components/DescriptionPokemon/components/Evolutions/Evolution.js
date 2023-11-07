import React, { useEffect, useState } from "react";
import styles from "./Evolution.module.scss";
import { getPokemonById } from "../../../../api/Pokemon";
import classNameType from "../SwitchType";
import { Link, useLocation, useParams } from "react-router-dom";

function Evolution({ pokemon }) {
  const pokemonIdEvo = [];
  const [pokemonEvo, setPokemonEvo] = useState([]);

  if (pokemon.evolution) {
    if (pokemon.evolution.pre) {
      Object.keys(pokemon.evolution.pre).map((preEvolution) => {
        pokemonIdEvo.push(pokemon.evolution.pre[preEvolution].pokedexId);
      });
    }
    if (pokemon.evolution.next) {
      Object.keys(pokemon.evolution.next).map((evolution) => {
        pokemonIdEvo.push(pokemon.evolution.next[evolution].pokedexId);
      });
    }
  }

  useEffect(() => {
    async function getPokemonLoadById(pokemonIdEvo) {
      let tab = [];
      for (let i = 0; i < pokemonIdEvo.length; i++) {
        const pokemonEvo = await getPokemonById(pokemonIdEvo[i]);
        tab.push(pokemonEvo);
      }
      setPokemonEvo(tab);
    }
    // Récupérer le pokemonIdEvo de l'url
    getPokemonLoadById(pokemonIdEvo);
  }, [JSON.stringify(pokemonIdEvo)]);

  function display(item, index) {
    return (
      <div key={index} className={styles.infoContainer}>
        <div className={styles.circleAvatar}>
          <Link to={`/description/${item.name.fr}/${item.pokedexId}`}>
            <img src={item.sprites.regular} alt={pokemon.name.fr} />
          </Link>
        </div>
        <span className={styles.name}>
          {item.name.fr} N°
          {item.pokedexId}
        </span>
        <div className={styles.typeContainer}>
          {item.types
            ? Object.keys(item.types).map((type, index) => {
                return (
                  <div
                    key={index}
                    className={classNameType(item.types[type].name, styles)}
                  >
                    <span>{item.types[type].name}</span>
                  </div>
                );
              })
            : "Unknow"}
        </div>
      </div>
    );
  }

  function pre() {
    if (pokemon.evolution) {
      if (pokemon.evolution.pre) {
        return pokemonEvo.map((evolution) => {
          return Object.keys(pokemon.evolution.pre).map(
            (preEvolution, index) => {
              if (
                pokemon.evolution.pre[preEvolution].pokedexId ===
                evolution.pokedexId
              ) {
                return display(evolution, index);
              }
            }
          );
        });
      }
    }
  }
  function next() {
    if (pokemon.evolution) {
      if (pokemon.evolution.next) {
        return pokemonEvo.map((evolution) => {
          return Object.keys(pokemon.evolution.next).map(
            (preEvolution, index) => {
              if (
                pokemon.evolution.next[preEvolution].pokedexId ===
                evolution.pokedexId
              ) {
                return display(evolution, index);
              }
            }
          );
        });
      }
    }
  }

  function current() {
    return display(pokemon);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3>Évolutions</h3>
        {!pokemon.evolution ||
        (!pokemon.evolution.pre && !pokemon.evolution.next) ? (
          <span className={styles.noEvolution}>Ce pokémon n'évolue pas.</span>
        ) : (
          ""
        )}
        <div className={styles.pokeContainer}>
          {pre()}
          {current()}
          {next()}
        </div>
      </div>
    </div>
  );
}

export default Evolution;
