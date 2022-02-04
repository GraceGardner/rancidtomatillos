import React from 'react';

const MovieCard = ({image, title, id, key}) => {
  return (
    <div className='card' id={id} key={id}>
      <img src={image} />
      <h2>{title}</h2>
    </div>
  )
}

export default MovieCard;
