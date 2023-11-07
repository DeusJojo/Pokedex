import React, { useState, useEffect } from "react";
import styles from "./DetailsSearch.module.scss";
import { useForm } from "react-hook-form";
import { getTypes } from "../../api/Type";
import getTalent from "./components/getTalent";

function DetailsSearch({
  setSuggestions,
  pokemons,
  setCurrentPage,
  setRecherche,
  recherche, // a supprimé quand test terminé
}) {
  const [types, setTypes] = useState([]);
  const talents = getTalent(pokemons).sort();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function searchByTalent(talents, regexTalent, pokemon, matches) {
    if (talents != null) {
      Object.keys(talents).map((talent) => {
        if (talents[talent].name.match(regexTalent)) {
          matches.push(pokemon);
        }
        setRecherche(true);
        console.log(recherche);
      });
    }
  }

  const onSubmit = (data) => {
    let talent = null;
    let tabType = [];
    Object.keys(data).map((item) => {
      if (item === "talents" && data[item] !== "...") {
        talent = data[item];
      } else if (data[item] && data[item] !== "..." && item !== "selectType") {
        tabType.push(item);
      }
    });

    let matches = [];
    let regexTalent = null;
    let regexType = null;

    if (pokemons) {
      pokemons.filter((pokemon) => {
        if (talent) {
          regexTalent = new RegExp(`${talent}`, "gi");
        }
        if (data.selectType == 1) {
          if (tabType.length > 0) {
            for (let i = 0; i < tabType.length; i++) {
              regexType = new RegExp(`${tabType[i]}`, "gi");
              if (pokemon.types != null && pokemon.talents != null) {
                Object.keys(pokemon.types).map((type) => {
                  if (pokemon.types[type].name.match(regexType)) {
                    if (talent) {
                      searchByTalent(
                        pokemon.talents,
                        regexTalent,
                        pokemon,
                        matches
                      );
                    } else {
                      matches.push(pokemon);
                    }
                  }
                });
                setRecherche(true);
              }
            }
          } else if (talent) {
            searchByTalent(pokemon.talents, regexTalent, pokemon, matches);
          } else {
            setRecherche(false);
          }
        } else if (data.selectType == 2) {
          if (tabType.length > 0) {
            if (pokemon.types != null && pokemon.talents != null) {
              if (
                tabType.every((element) =>
                  pokemon.types.some((item) => item.name === element)
                )
              ) {
                if (talent) {
                  Object.keys(pokemon.talents).map((talent) => {
                    if (
                      pokemon.talents[talent].name.match(regexTalent) &&
                      tabType.every((element) =>
                        pokemon.types.some((item) => item.name === element)
                      )
                    ) {
                      matches.push(pokemon);
                    }
                  });
                } else {
                  matches.push(pokemon);
                }
              }
              setRecherche(true);
            }
          } else if (talent) {
            searchByTalent(pokemon.talents, regexTalent, pokemon, matches);
          } else {
            setRecherche(false);
          }
        }
      });
    }
    if (matches.length > 0) {
      matches = matches.filter((matche, i) => matches.indexOf(matche) === i);
    }
    setSuggestions(matches);
    setCurrentPage(1);
  };

  useEffect(() => {
    async function getTypeLoad() {
      const types = await getTypes();
      setTypes(types);
    }
    getTypeLoad();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>RECHERCHE AVANCÉE</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.rechercheType}>
          <span>Types</span>
          <select className={styles.selectType} {...register("selectType")}>
            <option value={1}>Tout type</option>
            <option value={2}>Double type</option>
          </select>
        </div>
        <div className={styles.type}>
          {types.map((type, index) => {
            return (
              <div key={index}>
                <input type="checkbox" {...register(type.name, {})} />
                <img src={type.image} alt={type.name} />
              </div>
            );
          })}
        </div>

        <span>Talents</span>
        <div className={styles.talent}>
          <select {...register("talents")}>
            <option>...</option>
            {talents.map((label, index) => (
              <option key={index + 1} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.button}>
          <button className={styles.search} type="submit">
            Rechercher
          </button>

          <button
            className={styles.emptyFilter}
            type="submit"
            onClick={() => {
              reset();
            }}
          >
            Vider le filtre
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailsSearch;
