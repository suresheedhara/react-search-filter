import React from 'react'
import RecipeIngredients from './RecipeIngredients'
import Recipemaking from './Recipemaking'

function Recipedetails({recipe}) {
    const{name,rating,reviewCount,ingredients,instructions,difficulty,prepTimeMinutes,cookTimeMinutes,servings,cuisine,caloriesPerServing,}=recipe
  return (
    <div className='card1 text-start'>
        <h1>{name}</h1>
        <div className='info d-flex flex-md-row flex-wrap'>        
        <p className='w-50'>Prep Time : <strong>{prepTimeMinutes}</strong></p>
        <p className='w-50'>Cook Time : <strong>{cookTimeMinutes}</strong></p>
        <p className='w-50'>Difficulty: <strong>{difficulty}</strong></p>
        <p className='w-50'>cuisine : <strong>{cuisine}</strong></p>
        <p className='w-50'>servings : <strong>{servings} {servings > 1?'persons':'person'}</strong> </p>
        <p className='w-50'>caloriesPerServing : <strong>{caloriesPerServing}</strong></p>

        </div>
        <div className='ingredients'>
            <h4>Ingredients</h4>
            <p>{ingredients.join(',')} </p>
            {/* <RecipeIngredients ingredients={ingredients}/> */}
        </div>
        <div className='instructions'>
            {/* <Recipemaking instructions={instructions}/> */}
             <h4>Instructions</h4>
            <ul>
                {instructions.map(item=><li key={item}>{item}</li>)}
            </ul>
        </div>
        
    </div>
  )
}

export default Recipedetails