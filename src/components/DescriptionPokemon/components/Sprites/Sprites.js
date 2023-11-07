import React, { useState } from "react";
import styles from "./Sprites.module.scss";
import classNameType from "../SwitchType";
import shinyEmpty from "../../../../assets/img/shinyempty.png";
import shinyFull from "../../../../assets/img/shinyfull.png";

function Sprites({ pokemon }) {
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

      <div className={classNameType(pokemon.types[0].name, styles)}></div>
      <div className={styles.images}>
        <img src={shiny ? imageShinyUrl : imageUrl} alt={pokemon.name.fr} />
        {/* <img src={imageUrl} alt={pokemon.name.fr} />
        {imageShinyUrl ? <img src={imageShinyUrl} alt={pokemon.name.fr} /> : ""} */}
      </div>
    </div>
  );
}

export default Sprites;
