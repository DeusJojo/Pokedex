import React from "react";
import styles from "./Weakness.module.scss";
import classNameType from "../SwitchType";

function Weakness({ pokemon }) {
  return (
    <div className={styles.main}>
      <h3>Faiblesses</h3>
      <div className={styles.container}>
        {pokemon.resistances
          ? Object.keys(pokemon.resistances).map((faiblesse, index) => {
              return pokemon.resistances[faiblesse].multiplier > 1 ? (
                <div
                  key={index}
                  className={classNameType(
                    pokemon.resistances[faiblesse].name,
                    styles
                  )}
                >
                  <span>{pokemon.resistances[faiblesse].name}</span>
                </div>
              ) : null;
            })
          : "Unknow"}
      </div>
    </div>
  );
}

export default Weakness;
