import styles from "./CardPokemon.module.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import shinyEmpty from "../../assets/img/shinyempty.png";
import shinyFull from "../../assets/img/shinyfull.png";

function CardPokemon({ pokemon, recherche }) {
  const imageUrl = pokemon.sprites.regular;
  const imageShinyUrl = pokemon.sprites.shiny;

  const [shiny, setShiny] = useState(false);

  const displayHideShyni = () => {
    setShiny(!shiny);
  };

  return (
    <div className={styles.main}>
      <div className={styles.icon} onClick={displayHideShyni}>
        {/* Si le pokemon à une forme shiny... Si shiny est true... */}
        {pokemon.sprites.shiny ? (
          shiny ? (
            <img
              className={styles.iconShiny}
              src={shinyFull}
              alt={pokemon.name.fr}
            />
          ) : (
            <img
              className={styles.iconShiny}
              src={shinyEmpty}
              alt={pokemon.name.fr}
            />
          )
        ) : (
          ""
        )}
      </div>

      <Link to={`/description/${pokemon.name.fr}/${pokemon.pokedexId}`}>
        {recherche ? (
          <img src={shiny ? imageShinyUrl : imageUrl} alt={pokemon.name.fr} />
        ) : (
          <img src={shiny ? imageShinyUrl : imageUrl} alt={pokemon.name.fr} />
        )}
      </Link>
    </div>
  );
}

export default CardPokemon;
