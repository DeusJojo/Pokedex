export default function SwitchBackgroundColor(stat, styles) {
  switch (true) {
    case stat <= 50:
      return styles.verybad;
    case stat > 50 && stat <= 70:
      return styles.bad;
    case stat > 70 && stat <= 80:
      return styles.meh;
    case stat > 80 && stat <= 99:
      return styles.bof;
    case stat === 100:
      return styles.correct;
    case stat > 100 && stat <= 150:
      return styles.nice;
    case stat > 150:
      return styles.veryNice;
    default:
      return "gngn";
  }
}
