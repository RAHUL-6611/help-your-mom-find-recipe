import React from 'react'
import './recipe.css'

const Recipe = ({data}) => {
    return (
        <div className="card">
            <h2>{data.recipe.label}</h2>
            <h4>{data.recipe.source}</h4>
            <img src={data.recipe.image} alt="" className="img"/>
            <div className="ingredient">
                <h2>Recipe : </h2>
                <ul>
                    {data.recipe.ingredientLines.map(line =>(
                        <li>{line}</li>
                        ))}
                        </ul>
            </div>
        </div>
    )
}

export default Recipe;
