import React from 'react';
import './SingleMovie.scss';

const SingleMovie = ({movie}) => {
  return (
    <div className='single-movie-container'>
      <h2>{movie.title}</h2>
      <img src={movie.backdrop_path} alt={movie.title + ' cover'}/>
      <p>{movie.average_rating.toFixed(1)}</p>
      <p>{movie.release_date}</p>
    </div>
  )
}
export default SingleMovie;
