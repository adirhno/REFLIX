import React from 'react'
import User from './User'
import { Link } from 'react-router-dom'

export default function Landing({users, handleUser}) {
  return (
 <div >
  
  <div className='landing'>WHO'S WATCHING?</div>
  <Link className='user' to={'/catalog'}> <div className='users'>{users.map((u)=> <User user={u} handleUser={handleUser} />)} </div>
  </Link>
  </div>
  )
}
