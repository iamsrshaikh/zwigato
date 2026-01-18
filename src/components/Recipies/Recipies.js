import styles from "./RecipeDetails.module.css";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <img
          src={recipe.image}
          alt={recipe.name}
          className={styles.image}
        />

        <div className={styles.info}>
          <h1 className={styles.title}>{recipe.name}</h1>

          <div className={styles.meta}>
            <span>⭐ {recipe.rating}</span>
            <span>• {recipe.cuisine}</span>
            <span>• {recipe.difficulty}</span>
          </div>

          <div className={styles.time}>
            <span>Prep: {recipe.prepTimeMinutes} mins</span>
            <span>Cook: {recipe.cookTimeMinutes} mins</span>
            <span>Serves: {recipe.servings}</span>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <section className={styles.section}>
        <h2>Ingredients</h2>
        <ul className={styles.list}>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className={styles.section}>
        <h2>Instructions</h2>
        <ol className={styles.steps}>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Footer Info */}
      <div className={styles.footer}>
        <span>🔥 {recipe.caloriesPerServing} kcal / serving</span>
        <span>📝 {recipe.reviewCount} reviews</span>
      </div>
    </div>
  );
};

export default RecipeDetails;
