import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { NAV_TABS } from "../../enums/navTabs";
import {  useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState(NAV_TABS[0].id);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="App Logo" />
        </div>

        <div className={styles.nav}>
          <ul className={styles.navItems}>
            {NAV_TABS.map((tab) => (
              <div key={tab.id}>
                <Link to={tab.to} onClick={() => setActiveTab(tab.id)} className={`${styles.link} ${activeTab === tab.id ? styles.active : ""}` }>
                  {tab.title}
                </Link>
              </div>
            ))}
            <li className="cart">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
