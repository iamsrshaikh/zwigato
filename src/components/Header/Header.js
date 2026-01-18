import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="App Logo" />
        </div>

        <div className={styles.nav}>
          <ul className={styles.navItems}>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/about' className={styles.link}>About Us</Link>
            <Link to='/contact' className={styles.link}>Contact Us</Link>
            <li className="cart">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
