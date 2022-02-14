import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './UserRating.scss';

const UserRating = ({rating, setRating}) => {

const fillStars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  star => {
    let icon;
    if(star <= rating){
      icon = faSolidStar
    } else {
      icon = faStar
    }
    return(<button
      className='star'
      key={star}
      onClick={() => setRating(star)}
    >
      <FontAwesomeIcon icon={icon} />
    </button>)
  })

  return (
  <div className='user-rating-container'>
    <p className='user-rating'>Your Rating:</p>
    <div className='star-container'>
      {fillStars}
    </div>
  </div>)}

export default UserRating;
