import styles from "./Header.module.scss";
import pokeLogo from "../../assets/img/pokeball.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.main}>
      <Link to="/">
        <img src={pokeLogo} alt="Pokéball icone" />
      </Link>
      <p>Jojo's POKEDEX</p>
    </header>
  );
}

export default Header;
