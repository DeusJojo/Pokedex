export default function classNameType(type, styles) {
  switch (type) {
    case "Acier":
      return styles.acier;
    case "Combat":
      return styles.combat;
    case "Dragon":
      return styles.dragon;
    case "Eau":
      return styles.eau;
    case "Électrik":
      return styles.electrik;
    case "Fée":
      return styles.fee;
    case "Feu":
      return styles.feu;
    case "Glace":
      return styles.glace;
    case "Insecte":
      return styles.insecte;
    case "Normal":
      return styles.normal;
    case "Plante":
      return styles.plante;
    case "Poison":
      return styles.poison;
    case "Psy":
      return styles.psy;
    case "Roche":
      return styles.roche;
    case "Sol":
      return styles.sol;
    case "Spectre":
      return styles.spectre;
    case "Ténèbres":
      return styles.tenebres;
    case "Vol":
      return styles.vol;
    default:
      return styles.unknow;
  }
}
