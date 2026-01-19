import { useParams } from "react-router-dom";
import RecipeDetails from "../../components/Recipies/Recipies";
import Shimmer from "../../components/Shimmer/Shimmer";
import { useRecipeDetails } from "../../utils/useRecipeDetails";

const RecipiesPage = () => {
  const params = useParams();
  const resId = params.resId;

  const { recipeDetails } = useRecipeDetails(resId);

  return (
    <div>
      {recipeDetails ? (
        <RecipeDetails recipe={recipeDetails} />
      ) : (
        <Shimmer noOfArray={2} />
      )}
    </div>
  );
};

export default RecipiesPage;
