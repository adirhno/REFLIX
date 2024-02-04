import React, { useState } from 'react'
import Movie from './Movie'
import MovieDetail from './MovieDetail'

export default function Search({search,setInput,results,input, isResults, budget, handleAddBtn}) {
  const updateInput = async (e)=>{
   setInput(e.target.value)
   search(e.target.value)
   
  }
  return (
    <div className='searchInput'><div className='searchBar'>
      <input type='text' placeholder='enter movie name' on onChange={(e)=>updateInput(e)} value={input}></input>
    <div className='titles budget'>Budget :{budget}$</div>
    </div>
    <div>{isResults?results.map((m, index)=><MovieDetail key={index} movieDetails={m} handleAddBtn={handleAddBtn} />):<></>}</div></div>
  )
}
