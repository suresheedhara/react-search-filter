import React,{useState,useEffect} from 'react'
// import axios from 'axios'
import Fetchposts from './Fetchposts'
import  Recipecard from "./Recipecard"

function SearchContainer() {
    const [recipes,setRecipes]=useState([])
    const [filterRecipes,setFilterRecipes]=useState([])
    const [debounce,setdebounce]=useState('')
    const[searchInput,setSearchInput]=useState('')
    useEffect(()=>{     
        const posts= Fetchposts.FetchData() 
        posts.then(res=>{
            setRecipes(res);
            setFilterRecipes(res);
        }) 
        .catch(error=>console.log(error))      
        // console.log(posts)
        // axios.get(`https://dummyjson.com/recipes/search?q=${searchInput}`)
        // .then(respone=>setRecipes(respone.data.recipes))
        // .catch(error=>console.log(error));
        
    },[])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setdebounce(searchInput);
        },500)
        return()=>clearTimeout(timer)
    },[searchInput])

    useEffect(()=>{
        const filter=recipes.filter(recipe=>recipe.name.toLowerCase().includes(searchInput.toLowerCase())) 
        // console.log(filter)        
        setFilterRecipes(filter) 
    },[debounce])


  return (
    <>
    <h1 className='title'>Food Recipes App</h1>
    <div className='container my-1'>
       <div className='row'>
            <div className='searchcontainer rounded py-4'>
                {/* <label htmlFor='search'>Search Recipe</label> */}
                <input className='rounded' type='text' id='search' placeholder='Search Food Recipe' value={searchInput} onChange={e=>setSearchInput(e.target.value)}/>
            </div>
        </div> 
    </div>
    <div className='container my-3'>
        <div className='row'>
            <h5 className='my-3 search-title'>Search Result</h5>
            {filterRecipes.length <= 0?<p>recipes not found</p>:
        filterRecipes.map(recipe=><Recipecard key={recipe.id} recipe={recipe}/>) }

        </div>       

    </div>    
    
    </>
  )
}

export default SearchContainer