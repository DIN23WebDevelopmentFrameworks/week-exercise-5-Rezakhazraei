import React from 'react';
import Recipe from './Recipe';

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface RecipeListProps {
  recipes: IRecipe[];
  onGoBack: () => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onGoBack }) => {
  return (
    <div>
      <button onClick={onGoBack}>Go Back</button>
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipeData={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;