import React, { useEffect, useState } from "react";
import styles from "./Fleches.module.scss";
import arrowUp from "../../assets/img/arrowUp.png";
import arrowDown from "../../assets/img/arrowDown.png";

function Fleche({ scrollUp, scrollDown }) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.main}>
      {scrollTop !== 0 ? (
        <img
          className={styles.arrowUp}
          onClick={scrollUp}
          title="Remonter en haut de la page"
          src={arrowUp}
          alt="Flèche vers le haut"
        />
      ) : (
        ""
      )}

      {scrollTop !== document.body.offsetHeight - window.innerHeight ? (
        <img
          className={styles.arrowDown}
          onClick={scrollDown}
          title="Descendre en bas de la page"
          src={arrowDown}
          alt="Flèche vers le bas"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Fleche;
