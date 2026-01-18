import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../../components/Recipies/Recipies";
import Shimmer from "../../components/Shimmer/Shimmer";

const RecipiesPage = () => {
  const [recepiesInfo, setRecipiesInfo] = useState(null);
  const params = useParams();
  const resId = params.resId;

  const fetchRecipies = async () => {
    //fetch recipies info
    const data = await fetch(`https://dummyjson.com/recipes/${resId}`);
    const response = await data.json();
    setRecipiesInfo(response);
  };

  useEffect(() => {
    fetchRecipies();
  }, [resId]);

  return (
    <div>
        {recepiesInfo ? <RecipeDetails recipe={recepiesInfo} /> : <Shimmer noOfArray={2} />}
      
    </div>
  );
};

export default RecipiesPage;
