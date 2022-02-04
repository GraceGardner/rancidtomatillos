import React from 'react';

const MovieCard = ({id, title, image}) => {
  return (
    <div className='card' id={id} key={id}>
      <img{image}/>
      <h2>{title}</h2>
    </div>
  )
}


export default MovieCard;
