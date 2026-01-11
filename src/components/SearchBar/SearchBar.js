import React from "react";
import searchIcon from "../../assets/search_icon.png";
import styles from "./SearchBar.module.css";

const SearchBar = ({searchValue, setSearchValue}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputBox}
        type="text"
        placeholder="Search for restaurants or cuisines..."
        value={searchValue}
        onInput={(e) => setSearchValue(e.target.value)}
      />
      <img className={styles.icon} src={searchIcon} alt="Search" />
    </div>
  );
};

export default SearchBar;
