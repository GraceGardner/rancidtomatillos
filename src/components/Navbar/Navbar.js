import React from 'react';
import './Navbar.scss';
import tomatillo from '../../assets/tomatillo.svg'

const Navbar = ({ name, toggleLogin, logoutUser }) => {
  const loginButton = !name && <button className='login-button'>LOGIN</button>
  const logoutButton = name && <button className='logout-button'>LOGOUT</button>
  const userName = name && <h2>name</h2>

  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={tomatillo} alt='tomitillo'/>
        <h1>Rancid Tomatillos</h1>
      </div>
      <div className='logout'>
        {userName}
        {loginButton}
        {logoutButton}
      </div>
    </nav>
  )
}

export default Navbar;
