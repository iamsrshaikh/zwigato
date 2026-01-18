import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const PageError = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorTitle}>Page Not Found</h2>
      <p className={styles.errorText}>
        Sorry, the page you’re looking for doesn’t exist or was moved.
      </p>

      <Link to="/" className={styles.errorBtn}>
        Go Back Home
      </Link>
    </div>
  );
};

export default PageError;
