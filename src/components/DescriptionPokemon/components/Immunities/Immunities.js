import React from "react";
import styles from "./Immunities.module.scss";
import classNameType from "../SwitchType";

function Immunities({ pokemon }) {
  let immunity = false;

  return (
    <div className={styles.main}>
      <h3>Immunitées</h3>
      <div className={styles.container}>
        {pokemon.resistances
          ? Object.keys(pokemon.resistances).map((immunities, index) => {
              if (
                pokemon.resistances[immunities].multiplier === 0 &&
                !immunity
              ) {
                immunity = true;
              }
              return pokemon.resistances[immunities].multiplier === 0 ? (
                <div
                  key={index}
                  className={classNameType(
                    pokemon.resistances[immunities].name,
                    styles
                  )}
                >
                  <span>{pokemon.resistances[immunities].name}</span>
                </div>
              ) : null;
            })
          : "Unknow"}
        {!immunity ? <span>Aucune</span> : ""}
      </div>
    </div>
  );
}

export default Immunities;
