import React from 'react'

export default function MovieDetail({movieDetails, handleAddBtn}) {

  return (
    <div className='movieDetails'>
    <div className='movieTitle'>{movieDetails.title}({movieDetails.year})</div>
    <img className='detailsImg' src={movieDetails.img} />
    <div className='description' >{movieDetails.descrShort}</div>
    <button className='movieDetailsAddBtn addBtn' onClick={()=> handleAddBtn(movieDetails)} >+</button>
    </div>
  )
}
