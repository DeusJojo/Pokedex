import React from "react";
import styles from "./Stats.module.scss";
import Jauge from "./components/Jauge";

function Stats({ pokemon }) {
  const valeurMax = 255;

  const hp = pokemon.stats.hp;
  const atk = pokemon.stats.atk;
  const def = pokemon.stats.def;
  const speAtk = pokemon.stats.spe_atk;
  const speDef = pokemon.stats.spe_def;
  const vit = pokemon.stats.vit;
  return (
    <div className={styles.main}>
      <table>
        <thead>
          <tr>
            <th colSpan="2">STATISTIQUES DU POKÉMON</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PV</td>
            <td>
              <Jauge valeurMax={valeurMax} valeurActuelle={hp} pokeStat={hp} />
            </td>
          </tr>
          <tr>
            <td>Attaque</td>
            <td>
              <Jauge
                valeurMax={valeurMax}
                valeurActuelle={atk}
                pokeStat={atk}
              />
            </td>
          </tr>
          <tr>
            <td>Défense</td>
            <td>
              <Jauge
                valeurMax={valeurMax}
                valeurActuelle={def}
                pokeStat={def}
              />
            </td>
          </tr>
          <tr>
            <td>Attaque spé</td>
            <td>
              <Jauge
                valeurMax={valeurMax}
                valeurActuelle={speAtk}
                pokeStat={speAtk}
              />
            </td>
          </tr>
          <tr>
            <td>Défense spé</td>
            <td>
              <Jauge
                valeurMax={valeurMax}
                valeurActuelle={speDef}
                pokeStat={speDef}
              />
            </td>
          </tr>
          <tr>
            <td>Vitesse</td>
            <td>
              <Jauge
                valeurMax={valeurMax}
                valeurActuelle={vit}
                pokeStat={vit}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stats;
