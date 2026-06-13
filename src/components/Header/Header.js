import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { NAV_TABS } from "../../enums/navTabs";
import {  useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Header = () => {
  const [activeTab, setActiveTab] = useState(NAV_TABS[0].id);
  const data = useContext(UserContext);

  console.log('data', data);
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
            <li className="user">{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
