import React from 'react'
import {  Routes, Route } from "react-router-dom";
import App from './App'
import RecipeView from './components/RecipeView'
import SearchContainer from './components/SearchContainer'

function PageRoutes() {
  return (
    <Routes>
        <Route  path='/' index element={<SearchContainer/>} />
        <Route path='/:id' element={<RecipeView/>}/>
        
    </Routes>
  )
}

export default PageRoutes