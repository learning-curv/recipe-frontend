import React, { useState, useEffect } from "react";
import axios from 'axios';

import classes from './RecipeGrid.module.css'

import RecipeCard from "../recipe-card/RecipeCard";
import useResize from "../../hooks/useResize";

function RecipeGrid({ recipes }) {
  const { isMobile, isTablet } = useResize()

  const getColumnCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 3;

    return 5;
  }

  return (
    <div className={classes['recipe-grid-container']}>
      <div className={classes['recipe-grid']} style={{gridTemplateColumns: "1fr ".repeat(getColumnCount())}}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
}

export default RecipeGrid;
