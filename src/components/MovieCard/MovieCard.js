import React from 'react';
import './MovieCard.css';

const MovieCard = ({image, title, id}) => {
  return (
    <div className='card' id={id}>
      <img className='card-image' src={image} />
      <h2>{title}</h2>
    </div>
  )
}

export default MovieCard;
