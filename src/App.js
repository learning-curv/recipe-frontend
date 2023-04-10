import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import RecipeGrid  from "./components/recipe-grid/RecipeGrid";

function App() {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    axios
      .get('http://localhost:4000/api/recipes')
      .then(response => {
        setRecipes(response.data)
      })
      .catch(error => console.error(`There was an error retrieving the items list: ${error}`))
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="App">
      <RecipeGrid columns={5}></RecipeGrid>
    </div>
  );
}

export default App;
