import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

//Components

import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.logo}>
        <i>
          <Link to="/">Sprint Shoes</Link>
        </i>
      </h1>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
