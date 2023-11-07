import React from "react";
import styles from "./Infos.module.scss";
import { IoFemaleSharp } from "react-icons/io5";
import { IoMaleSharp } from "react-icons/io5";

function Infos({ pokemon }) {
  return (
    <div className={styles.main}>
      <div className={styles.column1}>
        <ul>
          <li>
            <span className={styles.title}>Taille</span>
            {pokemon.height ? (
              <span className={styles.value}>{pokemon.height}</span>
            ) : (
              "Unknow"
            )}
          </li>
          <li>
            <span className={styles.title}>Poids</span>
            {pokemon.weight ? (
              <span className={styles.value}>{pokemon.weight}</span>
            ) : (
              "Unknow"
            )}
          </li>
          <li>
            <span className={styles.title}>Sexe</span>
            <span className={styles.value}>
              {pokemon.sexe
                ? Object.keys(pokemon.sexe).map((sexe, index) => {
                    if (sexe === "male") {
                      return (
                        <span key={index} className={styles.value}>
                          <IoMaleSharp />
                        </span>
                      );
                    }
                    if (sexe === "female") {
                      return (
                        <span key={index} className={styles.value}>
                          <IoFemaleSharp />
                        </span>
                      );
                    }
                  })
                : "Unknow"}
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.column2}>
        <ul>
          <li>
            <span className={styles.title}>Catégorie</span>
            {pokemon.category ? (
              <span className={styles.value}>{pokemon.category}</span>
            ) : (
              "Unknow"
            )}
          </li>
          <li>
            <span className={styles.title}>Talent(s)</span>
            {pokemon.talents
              ? Object.keys(pokemon.talents).map((talent, index) => {
                  return (
                    <span key={index} className={styles.value}>
                      {pokemon.talents[talent].name}
                    </span>
                  );
                })
              : "Unknow"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Infos;
