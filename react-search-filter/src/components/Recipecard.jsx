import React from 'react'
import { Link } from "react-router-dom";

function Recipecard({recipe}) {
    const {id,image,name}=recipe
  return (
    <div className='col-12 col-sm-3 mb-3 recipe'>
        <div className="card" >
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title text-ellipsis">{name}</h5>            
                <Link to={`/${id}`} className="btn  btn-view">View Recipe</Link>
            </div>
        </div>
    </div>
  )
}

export default Recipecard