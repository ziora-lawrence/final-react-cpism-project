import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <img src={logo} alt="logo" className='logo' />
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>about us</li></Link>
          <Link to='/tours'><li>Tour packages</li></Link>
          <Link to='/contact'><li>contact us</li></Link>
        </ul>
        <div className='nav-btns'>
          <select>
            <option value='eng'>eng</option>
            <option value='fr'>fr</option>
          </select>
          <button className='login'>Login</button>
          <button className='signup'>sign up</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
