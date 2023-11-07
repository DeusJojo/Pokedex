import React, { useState } from "react";
import styles from "./Resistances.module.scss";
import classNameType from "../SwitchType";

function Resistances({ pokemon }) {
  const [resistances, setResistances] = useState(false);

  return (
    <div className={styles.main}>
      <h3>Resistances</h3>
      <div className={styles.container}>
        {pokemon.resistances
          ? Object.keys(pokemon.resistances).map((resistance, index) => {
              if (
                pokemon.resistances[resistance].multiplier < 1 &&
                pokemon.resistances[resistance].multiplier > 0 &&
                !resistances
              ) {
                setResistances(true);
              }
              return pokemon.resistances[resistance].multiplier < 1 &&
                pokemon.resistances[resistance].multiplier > 0 ? (
                <div
                  key={index}
                  className={classNameType(
                    pokemon.resistances[resistance].name,
                    styles
                  )}
                >
                  <span>{pokemon.resistances[resistance].name}</span>
                </div>
              ) : null;
            })
          : "Unknow"}
        {!resistances ? <span>Aucune</span> : ""}
      </div>
    </div>
  );
}

export default Resistances;
