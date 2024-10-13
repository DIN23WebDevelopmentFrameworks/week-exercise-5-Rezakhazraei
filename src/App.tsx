import React, { useState, useEffect } from 'react';
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";

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

const App: React.FC = () => {

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]); // Ensure initial state is an empty array


  // Fetching tags
  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  // Fetching recipes based on the selected tag
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('API Response:', data); // Inspect the API response
          if (data && Array.isArray(data.recipes)) {
            setRecipes(data.recipes); // Set the recipes state to the recipes array
          } else {
            setRecipes([]); // Clear recipes if the response is not as expected
          }
        })
        .catch((error) => {
          console.error('Error fetching recipes:', error);
          setRecipes([]); // Clear recipes on error
        });
    }
  }, [selectedTag]);
  

  const handleSelectTag = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const handleGoBack = () => {
    setSelectedTag(null);  // Reset the selected tag to null
  };



  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        {selectedTag ? (
        // Render the RecipeList when a tag is selected
        <RecipeList recipes={recipes} onGoBack={handleGoBack} />
      ) : (
        // Render the RecipeTagList when no tag is selected
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      )}

    </div>
  );
};

export default App;
