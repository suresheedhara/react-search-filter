import React from 'react'

function Recipeimage({image,name}) {
  return (
    <>
    <div className='card rounded-5'>
        <img src={image} className="img-fluid" alt={name}/>
    </div>    
    </>
  )
}

export default Recipeimage