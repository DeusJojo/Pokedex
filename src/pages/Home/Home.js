import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api/Pokemon";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Pagination from "../../components/Pagination/Pagination";
import Fleche from "../../components/Fleches/Fleches";
import SearchBar from "../../components/SearchBar/SearchBar";
import DetailsSearch from "../../components/DetailsSearch/DetailsSearch";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(100);
  const [recherche, setRecherche] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const lastPokemonIndex = currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemons = pokemons.slice(firstPokemonIndex, lastPokemonIndex);
  const currentSuggestions = suggestions.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  // console.log(recherche);

  useEffect(() => {
    async function getPokemonLoad() {
      const pokemons = await getPokemon();
      setPokemons(pokemons);
    }
    getPokemonLoad();
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.main}>
      <Fleche scrollUp={scrollUp} scrollDown={scrollDown} />

      <SearchBar
        pokemons={pokemons}
        setSuggestions={setSuggestions}
        setRecherche={setRecherche}
        setCurrentPage={setCurrentPage}
      />
      <hr />
      <DetailsSearch
        setSuggestions={setSuggestions}
        pokemons={pokemons}
        setCurrentPage={setCurrentPage}
        suggestions={suggestions}
        setRecherche={setRecherche}
        recherche={recherche} // a supprimer quand test terminé
      />
      <div className={styles.grid}>
        {recherche ? (
          currentSuggestions !== "" && suggestions.length > 0 ? (
            currentSuggestions.map((pokemon) =>
              pokemon.pokedexId !== 0 ? (
                <CardPokemon
                  pokemon={pokemon}
                  key={pokemon.name.fr}
                  recherche={recherche}
                />
              ) : (
                ""
              )
            )
          ) : (
            <p className={styles.notFound}>Aucun pokemon trouvé.</p>
          )
        ) : (
          currentPokemons.map((pokemon) =>
            pokemon.pokedexId !== 0 ? (
              <CardPokemon
                pokemon={pokemon}
                key={pokemon.name.fr}
                recherche={recherche}
              />
            ) : (
              ""
            )
          )
        )}
      </div>
      <Pagination
        totalPokemons={pokemons.length}
        totalSuggestions={suggestions.length}
        pokemonsPerPage={pokemonsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        recherche={recherche}
      />
    </div>
  );
}

export default Home;
