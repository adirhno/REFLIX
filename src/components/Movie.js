import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie, handleMovieDetails, handleAddBtn,handleRemoveBtn,addBtn}) {
  
  return (
   <div className='movie'onClick={()=>handleMovieDetails(movie.title)}><Link to={'/details'}> <img src={movie.img}></img></Link>
   {addBtn?<button className='addBtn' onClick={()=>handleAddBtn(movie)}>+</button>:
   <button className='addBtn' onClick={()=>handleRemoveBtn(movie)}>-</button>}
    </div>
  )
}
