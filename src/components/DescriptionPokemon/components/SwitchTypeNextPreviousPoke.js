export default function colorNamePreviousPoke(type, styles) {
  switch (type) {
    case "Acier":
      return "#0e7490";
    case "Combat":
      return "#f97316";
    case "Dragon":
      return "#4f46e5";
    case "Eau":
      return "#2563eb";
    case "Électrik":
      return "#facc15";
    case "Fée":
      return "#f472b6";
    case "Feu":
      return "#dc2626";
    case "Glace":
      return "#22d3ee";
    case "Insecte":
      return "#84cc16";
    case "Normal":
      return "#a3a3a3";
    case "Plante":
      return "#16a34a";
    case "Poison":
      return "#7e22ce";
    case "Psy":
      return "#f43f5e";
    case "Roche":
      return "#b0aa82";
    case "Sol":
      return "#92400e";
    case "Spectre":
      return "#4a044e";
    case "Ténèbres":
      return "#020617";
    case "Vol":
      return "#7dd3fc";
    default:
      return "#689a8d";
  }
}
