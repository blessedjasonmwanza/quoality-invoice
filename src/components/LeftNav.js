import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftNav() {
  return (
    <nav className="left-nav">
        <h1 className='brand-name'>Invoice</h1>
        <NavLink to='/new' className='new-btn'>Create</NavLink>
        <NavLink to='/paid' >Paid</NavLink>
        <NavLink to='/overdue' >Overdue</NavLink>
        <NavLink to='/unpaid' >Unpaid</NavLink>
    </nav>
  )
}
