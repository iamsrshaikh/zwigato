import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";

import styles from "./Body.module.css";

const Body = ({ resDetails }) => {
  return (
    <div className={styles.body}>
      <div className={styles.resContainers}>
        {!resDetails || resDetails.length === 0 ? (
          <Shimmer />
        ) : (
          resDetails?.map((details) => (
            <RestaurantCard key={details.id} details={details} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
