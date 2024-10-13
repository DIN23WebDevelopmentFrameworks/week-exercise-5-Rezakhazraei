import React from 'react'
import RecipeTag from './RecipeTag';

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}


export default function RecipeTagList({tagList, onSelectTag}: IRecipeTagListProps) {
  return (
    <div>
      <h2>Recipe Tags</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tagList.length === 0 ? (
          <p>No tags available.</p>
        ) : (
          tagList.map((tag, index) => (
            <RecipeTag key={index} tagName={tag} onSelectTag={onSelectTag} />
          ))
        )}
      </div>
    </div>
    );
}