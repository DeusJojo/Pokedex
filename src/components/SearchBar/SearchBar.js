import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar({ pokemons, setRecherche, setSuggestions, setCurrentPage }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    let matches = [];

    if (event.target.value.length > 0) {
      matches = pokemons.filter((pokemon) => {
        const regex = new RegExp(`${event.target.value.trim()}`, "gi");
        if (pokemon.name.fr.match(regex)) {
          return pokemon;
        }
      });
      setRecherche(true);
    } else if (event.target.value === "") {
      setRecherche(false);
    }
    setSuggestions(matches);
    setValue(event.target.val);
    setCurrentPage(1);
  }

  return (
    <div className={styles.main}>
      <input
        className={styles.rechercherPokemon}
        id="search"
        type="text"
        placeholder="Rechercher un pokémon"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
