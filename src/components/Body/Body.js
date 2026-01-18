import { Link } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Body.module.css";

const Body = ({
  resDetails,
  searchValue,
  setSearchValue,
  filterByRatings,
  sortOrder,
}) => {
  return (
    <div className={styles.body}>
      {/* Actions */}
      <div className={styles.actions}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

        <button className={styles.sortBtn} onClick={filterByRatings}>
          {sortOrder === "ASC" ? "Filter By Ratings ▼" : "Filter By Ratings ▲"}
        </button>
      </div>

      {/* Restaurant List */}
      <div className={styles.resContainers}>
        {!resDetails || resDetails.length === 0 ? (
          <h3>No Restaurants Found</h3>
        ) : (
          resDetails.map((details) => (
            <Link to={`recipies/${details.id}`} key={details.id} className={styles.link}>
              <RestaurantCard  details={details} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
