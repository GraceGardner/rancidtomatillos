import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './UserRating.scss';

const UserRating = () => {

  return (
  <div className='user-rating-container'>
    <p className='user-rating'>Your Rating:</p>
    <div className='star-container'>
      <button
        className='star'
        value='1'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='2'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='3'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='4'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='5'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='6'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='7'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='8'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='9'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
      <button
        className='star'
        value='10'
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    </div>
  </div>)}

export default UserRating;
