import React from 'react';
import './Navbar.scss';
import tomatillo from '../../assets/tomatillo.svg'

const Navbar = ({selectedMovie, clearSelection}) => {
  return (
    <nav>
      <div className='logo-container'>
        <img
          className='logo'
          src={tomatillo} alt='tomitillo'/>
        <h1>Rancid Tomatillos</h1>
      </div>
      {selectedMovie && <button
        className='home-button'
        onClick={() => clearSelection()}>Home</button>
      }
    </nav>
  )
}

export default Navbar;
