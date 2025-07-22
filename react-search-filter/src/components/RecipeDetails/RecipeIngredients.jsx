import React from 'react'

function RecipeIngredients({ingredients}) {
    console.log(ingredients.join(', '))
  return (

    <>
    <h4>Ingredients</h4>
    <div>
        {/* {ingredients.map(item=><li key={item}>{item}</li>)} */}
        {ingredients.join(',')}
    </div>
     
    </>
  )
}

export default RecipeIngredients