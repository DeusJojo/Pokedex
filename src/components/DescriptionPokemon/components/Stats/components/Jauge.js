import React from "react";
import styles from "./Jauge.module.scss";
import SwitchBackgroundColor from "./SwitchBackgroundColor";

const Jauge = ({ valeurMax, valeurActuelle, pokeStat }) => {
  const pourcentageRemplissage = (valeurActuelle / valeurMax) * 100;

  return (
    <div className={styles.main}>
      <div
        className={SwitchBackgroundColor(pokeStat, styles)}
        style={{
          width: `${pourcentageRemplissage}%`,
        }}
      >
        <span>{pokeStat}</span>
      </div>
    </div>
  );
};

export default Jauge;
