import React from 'react'
import './Navbar.css';

const Navbar = ({selectedMovie, clearSelection}) => {
  return (
    <nav>
      <h1>Rotten Tomatillos</h1>
      {selectedMovie && <button
        className='home-button'
        onClick={() => clearSelection()}>Home</button>
      }
    </nav>
  )
}

export default Navbar;
