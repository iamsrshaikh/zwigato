import styles from "./RestaurantCard.module.css";

const RestaurantCard = ({ details }) => {
  return (
    <div className={styles.restaurantCard}>
      <img className={styles.thumb} src={details?.image} alt="Restaurant Logo" />

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <div className={styles.name}>{details?.name}</div>
        </div>

        <div className={styles.cuisine}>{details?.cuisine}</div>
        <div className={styles.cuisine}>{details?.mealType?.join(" • ")}</div>


        <div className={styles.meta}>
          <div>⭐ {details?.rating}</div>
          <div>•</div>
          <div>{details?.prepTimeMinutes + details?.cookTimeMinutes}</div>
          <div>•</div>
          <div>₹{details?.caloriesPerServing}</div>
        </div>
      </div>

      <div className={styles.cta}>
        <button className={styles.btn}>Order</button>
      </div>
    </div>
  );
};

export default RestaurantCard;