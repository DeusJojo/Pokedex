import React from "react";
import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.main}>
      <div className={styles.pokeball}>
        <div className={styles.pokeball__button}></div>
      </div>
    </div>
  );
}

export default Loading;
