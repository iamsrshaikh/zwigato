import React from "react";
import searchIcon from "../../assets/search_icon.png";
import crossIcon from "../../assets/cross_icon.png";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchValue, setSearchValue }) => {
  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputBox}
        type="text"
        placeholder="Search for restaurants or cuisines..."
        value={searchValue}
        onInput={(e) => setSearchValue(e.target.value)}
      />
      {searchValue ? (
        <img
          className={styles.icon}
          src={crossIcon}
          alt="cross"
          onClick={clearSearch}
        />
      ) : (
        <img className={styles.icon} src={searchIcon} alt="Search" />
      )}
    </div>
  );
};

export default SearchBar;
