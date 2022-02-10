import React from 'react';
import './Navbar.scss';
import tomatillo from '../../assets/tomatillo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={tomatillo} alt='tomitillo'/>
        <h1>Rancid Tomatillos</h1>
      </div>
    </nav>
  )
}

export default Navbar;
