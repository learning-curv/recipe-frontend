import React, { useState, useEffect } from "react";
import axios from 'axios';

import RecipeGrid from "../components/recipe-grid/RecipeGrid";

function Browse() {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    axios
      // .get('http://nuans-macbook-air.local:4000/api/recipes?limit=100&offset=15')
      .get('http://localhost:4000/api/recipes?limit=150&offset=15')
      .then(response => {
        setRecipes(response.data)
      })
      .catch(error => console.error(`There was an error retrieving the items list: ${error}`))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <RecipeGrid recipes={recipes}></RecipeGrid>
  );
}

export default Browse;
