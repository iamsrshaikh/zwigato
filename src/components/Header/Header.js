import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

const Header = ({ searchValue, setSearchValue, filterByRatings }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="App Logo" />
        </div>

        <div className={styles.nav}>
          <ul className={styles.navItems}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li className="cart">Cart</li>
          </ul>
        </div>
      </div>
      <div className={styles.actions}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

        <button className={styles.sortBtn} onClick={filterByRatings}>
          Filter By Ratings ▼
        </button>
      </div>
    </div>
  );
};

export default Header;
