import { useEffect, useState } from "react";

export const useRecipeDetails = (resId) => {
  // Logic to fetch and return recipe details based on resId

  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(`https://dummyjson.com/recipes/${resId}`);
      const data = await response.json();
      setRecipeDetails(data);
    };

    fetchRecipeDetails();
  }, [resId]);

  return { recipeDetails, setRecipeDetails };
};
