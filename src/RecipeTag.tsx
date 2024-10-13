import React from 'react'

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
  }
  
export default function RecipeTag({ tagName, onSelectTag }  : IRecipeTagProps) {
    return (
        <button onClick={() => onSelectTag(tagName)} style={{ margin: '5px', padding: '10px' }}>
        {tagName}
      </button>
);
  }