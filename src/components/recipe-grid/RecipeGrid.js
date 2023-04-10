import React, { useState, useEffect } from "react";
import axios from 'axios';

import classes from './RecipeGrid.module.css'

import RecipeCard from "../recipe-card/RecipeCard";

function RecipeGrid({ columns }) {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    axios
      // .get('http://localhost:4000/api/recipes?limit=15&offset=300')
      .get('http://localhost:4000/api/recipes/cook/bcc9569b-cedb-4b28-ab2a-28d9e9c03a49?threshold=0.70')
      .then(response => {
        setRecipes(response.data)
      })
      .catch(error => console.error(`There was an error retrieving the items list: ${error}`))
  }

  useEffect(() => {
    getRecipes()
  }, [])

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
