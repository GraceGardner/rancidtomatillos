import React from 'react';
import './MovieCard.css';

const MovieCard = ({image, title, id, selectMovie}) => {
  return (
    <button
      className='card'
      id={id}
      onClick={() => selectMovie(id)}>
      <img className='card-image' src={image} alt={title + ' cover'}/>
      <h3>{title}</h3>
    </button>
  )
}

export default MovieCard;
