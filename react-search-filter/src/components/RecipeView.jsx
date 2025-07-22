import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Recipeimage from './RecipeDetails/Recipeimage'
import Recipedetails from './RecipeDetails/Recipedetails'
import RecipeIngredients from './RecipeDetails/RecipeIngredients'
import Recipemaking from './RecipeDetails/Recipemaking'

function RecipeView() {
  const[recipe,setRecipe]=useState({})
    const { id } = useParams();
    // console.log('viewpage',id)

    useEffect(()=>{
      // axios.get(`https://dummyjson.com/recipes/${id}`)
      // .then(res=>setRecipe(res.data))
      // .catch(error=>console.log(error))
       const cachedrecipesPosts=localStorage.getItem('recipesCache')
       const recipesPosts = JSON.parse(cachedrecipesPosts); 
      //  console.log(recipesPosts)      
       const filtered = recipesPosts.filter(recipe=> recipe.id === Number(id) )
       console.log(filtered[0])
      setRecipe(filtered[0])

    },[id])
  return (
    <>
    {Object.keys(recipe).length <= 0?<p>Recepine not found</p> :
    <div className='container'>
      <div className='row recipe-top p-3 rounded-5'>
        <div className='col-12 col-md-6 image-container'>
          <div className='image-block'>
            <Recipeimage image={recipe.image} name={recipe.name}/>
          </div>
        </div>
        <div className='col-12 col-md-6 details-container'>
          <div className='details-block'>
            <Recipedetails recipe={recipe}/>
          </div>
        </div>
      </div>
      <div className='row recipe-down d-none'>
        <div className='col-12 col-md-6 ingredients'>
          <RecipeIngredients ingredients={recipe.ingredients}/>
        </div>
        <div className='col-12 col-md-6 instructions'>
          <Recipemaking instructions={recipe.instructions}/>
        </div>
      </div>
    </div>
    }
    </>
    
  )
}

export default RecipeView