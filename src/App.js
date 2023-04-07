import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Paper, Container, Button, List, ListItem, Typography, ListItemAvatar, ListItemText, Avatar, Grid, IconButton } from '@mui/material';
import axios from 'axios';

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
      {recipes.map((recipe) => (
        <>
          <span>{recipe.title}</span>
        </>
      ))}
    </div>
  );
}

export default App;
