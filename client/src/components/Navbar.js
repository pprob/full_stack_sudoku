import React from "react";
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = (props) => {

  return (
    <div className='app-container'>
      <div className='navbar-container'>
        <ul className='nav-list'>
          <li className="list-item">
            <NavLink to='/' className='nav-link' activeClassName='selected' exact={true}>Home</NavLink>
          </li>
          <li className="list-item">
            <NavLink to='/signup' className='nav-link' activeClassName='selected'>Sign up</NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/login' className='nav-link' activeClassName='selected'>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar