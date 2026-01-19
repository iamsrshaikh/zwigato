import { useEffect, useState } from "react";
import Shimmer from "../../components/Shimmer/Shimmer";
import Body from "../../components/Body/Body";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import OfflineCard from "../../components/OfflineCard/OfflineCard";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [loading, setLoading] = useState(false);
  const {isOnline} = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredRestaurants(restaurants);
      return;
    }

    const filtered = restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredRestaurants(filtered);

  }, [searchValue, restaurants]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();

      setRestaurants(data.recipes);
      setFilteredRestaurants(data.recipes);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filterByRatings = () => {
    const sorted = [...filteredRestaurants].sort((a, b) =>
      sortOrder === "ASC" ? a.rating - b.rating : b.rating - a.rating
    );

    setFilteredRestaurants(sorted);
    setSortOrder((prev) => (prev === "ASC" ? "DESC" : "ASC"));
  };

  if (!isOnline) return <OfflineCard />
  if (loading) return <Shimmer />;

  return (
    <Body
      resDetails={filteredRestaurants}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterByRatings={filterByRatings}
      sortOrder={sortOrder}
    />
  );
};

export default HomePage;
