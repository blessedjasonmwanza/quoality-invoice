import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftNav() {
  return (
    <header className="left-nav">
        <h1 className='brand-name'>Invoice</h1>
        <nav className="nav-features">
            <NavLink to='/new'className={({ isActive }) =>
            isActive ? 'active' : undefined
          }>
                Create
            </NavLink>
            <NavLink to='/paid' >Paid</NavLink>
            <NavLink to='/overdue' >Overdue</NavLink>
            <NavLink to='/unpaid' >Unpaid</NavLink>
        </nav>
    </header>
  )
}
