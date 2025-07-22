import React from 'react'

function Recipemaking({instructions}) {
  return (
    <>
    <h2>Instructions</h2>
    <ul>
        {instructions.map(item=><li key={item}>{item}</li>)}
    </ul>
     
    </>
  )
}

export default Recipemaking