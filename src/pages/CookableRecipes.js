import React, { useState, useEffect } from "react";
import axios from 'axios';

import RecipeGrid from "../components/recipe-grid/RecipeGrid";

function CookableRecipes() {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    axios
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
    <RecipeGrid recipes={recipes} columns={5}></RecipeGrid>
  );
}

export default CookableRecipes;
