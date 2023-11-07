import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  totalPokemons,
  totalSuggestions,
  pokemonsPerPage,
  setCurrentPage,
  currentPage,
  recherche,
}) => {
  let pages = [];

  if (recherche) {
    for (let i = 1; i <= Math.ceil(totalSuggestions / pokemonsPerPage); i++) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
      pages.push(i);
    }
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <div
            className={
              page === currentPage ? styles.superball : styles.pokeball
            }
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            <div className={styles.redMarques}>
              <div
                className={page === currentPage ? styles.redMarque1 : ""}
              ></div>
              <div
                className={page === currentPage ? styles.redMarque2 : ""}
              ></div>
            </div>
            <div
              className={
                page === currentPage
                  ? styles.superball__button
                  : styles.pokeball__button
              }
              onClick={() => setCurrentPage(page)}
            >
              {" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
