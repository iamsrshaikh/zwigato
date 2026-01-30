import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({
  searchValue,
  setSearchValue,
  filterByRatings,
  sortOrder,
}) => {
  return (
    <div className='pb-8'>
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
