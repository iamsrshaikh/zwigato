import RestaurantCard from "../RestaurantCard/RestaurantCard";

import styles from "./Body.module.css";

const Body = ({res_details}) => {
  return (
    <div className={styles.body}>
      <div className={styles.resContainers}>
        {res_details.map((details) => (
          <RestaurantCard key={details.id} details={details} />
        ))}
      </div>
    </div>
  );
};

export default Body;
