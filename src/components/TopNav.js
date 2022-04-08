import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png';

export default function TopNav() {
  return (
    <header className='top-nav'>
        <img src={logo} alt="logo" className='logo' />
        <NavLink to='/login' className="no-drag">Logout</NavLink>
    </header>
  )
}
