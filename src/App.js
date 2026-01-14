import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./index.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    const filtered = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredRestaurants(filtered);
  }, [searchValue, restaurants]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const resData = await response.json();

    setRestaurants(resData?.recipes);
    setFilteredRestaurants(resData.recipes);
  };

  const filterByRatings = () => {
    if (sortOrder === "ASC") {
      const sorted = [...filteredRestaurants].sort(
        (a, b) => a.rating - b.rating
      );
      setFilteredRestaurants(sorted);
      setSortOrder("DESC");
      return;
    }

    setSortOrder("ASC");
    const sorted = [...filteredRestaurants].sort((a, b) => b.rating - a.rating);
    setFilteredRestaurants(sorted);
  };

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterByRatings={filterByRatings}
        sortOrder={sortOrder}
      />
      <Body resDetails={filteredRestaurants} />
      <Footer />
    </div>
  );
}

export default App;
