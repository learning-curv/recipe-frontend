import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Paper, Container, Button, List, ListItem, Typography, ListItemAvatar, ListItemText, Avatar, Grid, IconButton } from '@mui/material';
import axios from 'axios';

function App() {

  const [hw, setHW] = useState("")

  const getHW = async () => {
    axios
      .get('http://localhost:4000/api/hello_world')
      .then(response => {
        setHW(response.data)
      })
      .catch(error => console.error(`There was an error retrieving the items list: ${error}`))
  }

  useEffect(() => {
    getHW()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography >DISPLAY {hw}</Typography>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
