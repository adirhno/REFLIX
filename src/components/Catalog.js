import React from 'react'
import Movie from './Movie'

export default function Catalog({movies, handleMovieDetails, handleAddBtn, handleRemoveBtn}) {
  return (
   <>
   <div className='titles'>Catalog: </div>
    <div className='catalog'>{movies.map((m,index)=> <Movie key={index} movie={m} handleAddBtn={handleAddBtn} handleRemoveBtn={handleRemoveBtn} handleMovieDetails={handleMovieDetails} addBtn={true}/>)}</div>
   </>
  )
}
