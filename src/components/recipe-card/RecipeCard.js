import React, { useState, useRef } from "react";
import axios from 'axios';

import classes from './RecipeCard.module.css'
import Image from '../image/Image'

function RecipeCard({ recipe }) {
  const ref = useRef(null)
  const [expandInfo, setExpandInfo] = useState(false)

  return (
    <div 
      ref={ref}
      className={classes['recipe-card']} 
      onMouseEnter={() => setExpandInfo(true)}
      onMouseLeave={() => setExpandInfo(false)}
    >
      <Image
        src={recipe['image-link']}
        alt={recipe.title}
        parentDimensions={{width: ref.current?.offsetWidth, height: ref.current?.offsetHeight}}
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
