import React from "react";
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = (props) => {

  return (
    <div className='app-container'>
      <div className='navbar-container'>
        <ul className='nav'>
          <li>
            <NavLink to='/' className='nav-link' activeClassName='selected' exact={true}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='nav-link' activeClassName='selected'>Sign up!</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar