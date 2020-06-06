import React from "react";
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = (props) => {
  const { loggedIn } = props
  return (
    <div className='app-container'>
      <div className='navbar-container'>
        <ul className='nav-list'>
          <li className="list-item">
            <NavLink to='/' className='nav-link' activeClassName='selected' exact={true}>Game</NavLink>
          </li>
          {!loggedIn &&
          <li className="list-item">
            <NavLink to='/signup' className='nav-link' activeClassName='selected'>Sign up</NavLink>
          </li>}
          {!loggedIn &&
          <li className='list-item'>
            <NavLink to='/login' className='nav-link' activeClassName='selected'>Login</NavLink>
          </li>}
          {loggedIn &&
          <li className='list-item'>
            <NavLink to='/profile' className='nav-link' activeClassName='selected'>Your profile</NavLink>
          </li>}
          <li className='list-item'>
            <NavLink to='/leaderboard' className='nav-link' activeClassName='selected'>Leaderboard</NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/how-to-play' className='nav-link' activeClassName='selected'>How to play</NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='/donate' className='nav-link' activeClassName='selected'>Donate!</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar