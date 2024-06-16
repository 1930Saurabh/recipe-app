import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, cuisineType, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Cuisine: {cuisineType}</p>
            
            <img src={image} alt={title} />
        </div>
    );
};

export default Recipe;
