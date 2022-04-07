import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TopNav() {
  return (
    <header className='top-nav'>
        <NavLink to='/logout' >Logout</NavLink>
    </header>
  )
}
