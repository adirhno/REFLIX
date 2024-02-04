import React from 'react'
import Movie from './Movie'
import RemoveBtn from './RemoveBtn'

export default function Rented({movies,handleRemoveBtn ,handleMovieDetails}) {
   
  return (
    <>
    <div className='titles'>Rented:</div>
    <div className='catalog'>{movies.map((m, index)=> <Movie key={index} handleRemoveBtn={handleRemoveBtn} movie={m} handleMovieDetails={handleMovieDetails} addBtn={false} />)}</div>
    </>
  )
}
