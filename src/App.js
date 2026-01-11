import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { res_details } from "./enums/restaurant";

import "./index.css";

function App() {
  const [restaurants, setRestaurants] = useState(res_details);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue === "") {
      setRestaurants(res_details);
    } else {
      const filteredRestaurants = res_details.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          restaurant.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchValue.toLowerCase())
          )
      );
      setRestaurants(filteredRestaurants);
    }
  }, [searchValue]);

  const filterByRatings = () => {
    const filteredRestaurants = [...restaurants].sort((a , b) => b.rating - a.rating);

    console.log(filteredRestaurants);
    setRestaurants(filteredRestaurants);
  }

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} filterByRatings={filterByRatings}/>
      <Body res_details={restaurants} />
      <Footer />
    </div>
  );
}

export default App;
