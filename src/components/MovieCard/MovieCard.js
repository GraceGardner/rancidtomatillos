import React from 'react';
import './MovieCard.css';

const MovieCard = ({image, title, id}) => {
  return (
    <button
      className='card'
      id={id}
      onClick={() => console.log("I did a thing")}>
      <img className='card-image' src={image} alt={title + ' cover'}/>
      <h2>{title}</h2>
    </button>
  )
}

export default MovieCard;
