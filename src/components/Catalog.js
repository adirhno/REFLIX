import React, { useState } from 'react'
import Movie from './Movie'
import Rented from './Rented'

export default function Catalog({movies,rentedMovies, handleMovieDetails, handleAddBtn, handleRemoveBtn}) {
  return (
   <>
  {rentedMovies.length>0?<Rented movies={rentedMovies} handleMovieDetails={handleMovieDetails} handleRemoveBtn={handleRemoveBtn} />:<></>}
   <div className='catalogTitles'>
   <div className='titles'>Catalog: </div>
   </div>
    <div className='catalog'>{movies.map((m,index)=> <Movie key={index} movie={m} handleAddBtn={handleAddBtn} handleRemoveBtn={handleRemoveBtn} handleMovieDetails={handleMovieDetails} addBtn={true}/>)}</div>
   </>
  )
}
