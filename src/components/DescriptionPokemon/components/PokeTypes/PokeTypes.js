import React from "react";
import styles from "./PokeTypes.module.scss";
import classNameType from "../SwitchType";

function PokeTypes({ pokemon }) {
  return (
    <div className={styles.main}>
      <h3>Type(s)</h3>
      <div className={styles.container}>
        {pokemon.types
          ? Object.keys(pokemon.types).map((type, index) => {
              return (
                <div
                  key={index}
                  className={classNameType(pokemon.types[type].name, styles)}
                >
                  <span>{pokemon.types[type].name}</span>
                </div>
              );
            })
          : "Unknow"}
      </div>
    </div>
  );
}

export default PokeTypes;
