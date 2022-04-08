import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftNav() {
  return (
    <header className="left-nav no-drag">
        <h1 className='brand-name'>Invoice</h1>
        <nav className="nav-features">
            <NavLink to='/new' className={({ isActive }) =>
              isActive ? 'no-drag active' : 'no-drag'
            }>
              Create
            </NavLink>
            <NavLink to='/paid' className={({ isActive }) =>
              isActive ? 'no-drag active' : 'no-drag'
            }>
              Paid
            </NavLink>
            <NavLink to='/overdue' className={({ isActive }) =>
              isActive ? 'no-drag active' : 'no-drag'
            }>
              Overdue
            </NavLink>
            <NavLink to='/unpaid' className={({ isActive }) =>
              isActive ? 'no-drag active' : 'no-drag'
            }>
              Unpaid
            </NavLink>
            <NavLink to='/settings' className={({ isActive }) =>
              isActive ? 'no-drag active' : 'no-drag'
            }>
              Settings
            </NavLink>
        </nav>
    </header>
  )
}
