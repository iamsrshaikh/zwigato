import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
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
  );
};

export default Header;