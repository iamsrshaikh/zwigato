import { res_details } from "../../enums/restaurant";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

import styles from "./Body.module.css";

const Body = () => {
  return (
    <div className="body">
      <div> Search</div>
      <div className={styles.resContainers}>
        {res_details.map((details) => (
          <RestaurantCard key={details.id} details={details} />
        ))}
      </div>
    </div>
  );
};

export default Body;
