import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.css";

const Layout = ({
  searchValue,
  setSearchValue,
  filterByRatings,
  sortOrder,
}) => {
  return (
    <div className={styles.app}>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterByRatings={filterByRatings}
        sortOrder={sortOrder}
      />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
