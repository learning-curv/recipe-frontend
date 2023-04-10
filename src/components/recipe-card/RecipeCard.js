import React, { useState, useEffect } from "react";
import axios from 'axios';

import classes from './RecipeCard.module.css'

function RecipeCard({ recipe }) {

  const [expandInfo, setExpandInfo] = useState(false)

  console.log(recipe)

  return (
    <div 
        className={classes['recipe-card']} 
        onMouseEnter={() => setExpandInfo(true)}
        onMouseLeave={() => setExpandInfo(false)}
    >
      <img 
        className={classes['recipe-image']} 
        src={recipe['image-link']}
        alt={recipe.title}
      />
      <div className={classes['recipe-info'] + ' ' + (expandInfo ? classes['open'] : '')}>
        <span className={classes['recipe-title']}>{recipe.title}</span>
        {expandInfo ? 
          <>
            <span className={classes['recipe-author']}>{recipe.author}</span> 
            <span className={classes['recipe-description']}>{recipe.description}</span> 
            <span className={classes['recipe-servings']}>{recipe.servings}</span> 
            <span className={classes['recipe-time']}>{parseFloat(recipe['prep-time']) + parseFloat(recipe['cook-time'])}</span> 
          </>
          : null
        }
      </div>
    </div>
  );
}

export default RecipeCard;
