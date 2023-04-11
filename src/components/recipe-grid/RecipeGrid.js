import React, { useState, useEffect } from "react";
import axios from 'axios';

import classes from './RecipeGrid.module.css'

import RecipeCard from "../recipe-card/RecipeCard";

function RecipeGrid({ recipes, columns }) {
  return (
    <div className={classes['recipe-grid-container']}>
      <div className={classes['recipe-grid']} style={{gridTemplateColumns: "1fr ".repeat(columns)}}>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
}

export default RecipeGrid;
