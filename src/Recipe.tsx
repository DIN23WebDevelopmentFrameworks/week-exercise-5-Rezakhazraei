interface IRecipeProps {
    recipeData: {
      name: string;
      image: string;
      ingredients: string[];
      instructions: string[];
      prepTimeMinutes: number;
      cookTimeMinutes: number;
      servings: number;
      difficulty: string;
      cuisine: string;
      caloriesPerServing: number;
      rating: number;
      reviewCount: number;
      mealType: string[];
    };
  }
  
  export default function Recipe({ recipeData }: IRecipeProps) {
    if (!recipeData) {
      return <p>No recipe data available.</p>; // Better user feedback
    }
  
    return (
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
        <h3>{recipeData.name}</h3>
        <img src={recipeData.image} alt={recipeData.name} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
        <h4>Ingredients</h4>
        <ul>
          {recipeData.ingredients && recipeData.ingredients.length > 0 ? (
            recipeData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))
          ) : (
            <li>No ingredients listed.</li>
          )}
        </ul>
        <h4>Instructions</h4>
        <ol>
          {recipeData.instructions && recipeData.instructions.length > 0 ? (
            recipeData.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))
          ) : (
            <li>No instructions available.</li>
          )}
        </ol>
        <p>Prep Time: {recipeData.prepTimeMinutes} minutes</p>
        <p>Cook Time: {recipeData.cookTimeMinutes} minutes</p>
        <p>Servings: {recipeData.servings}</p>
        <p>Difficulty: {recipeData.difficulty}</p>
        <p>Cuisine: {recipeData.cuisine}</p>
        <p>Calories per Serving: {recipeData.caloriesPerServing}</p>
        <p>Rating: {recipeData.rating}</p>
        <p>Review Count: {recipeData.reviewCount}</p>
        <p>Meal Type: {recipeData.mealType ? recipeData.mealType.join(', ') : 'Not specified'}</p>
      </div>
    );
  }