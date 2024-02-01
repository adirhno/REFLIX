import React from 'react'

export default function MovieDetail({movieDetails}) {
  return (
    <div className='movieDetails'>
    <div className='movieTitle'>{movieDetails.title}({movieDetails.year})</div>
    <img className='detailsImg' src={movieDetails.img} />
    <div className='description' >{movieDetails.descrShort}</div>
    </div>
  )
}
