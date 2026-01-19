import styles from "./OfflineCard.module.css";

const OfflineCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}>📡</div>

        <h2 className={styles.title}>No Internet Connection</h2>

        <p className={styles.text}>
          Please check your network settings and try again.
        </p>

        <button
          className={styles.retryBtn}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default OfflineCard;
