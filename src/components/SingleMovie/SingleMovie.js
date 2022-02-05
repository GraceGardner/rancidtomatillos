import React from 'react';
import './SingleMovie.css';

const SingleMovie = ({movie}) => {
  return (
    <div className='single-movie-container'>
      <h2>{movie.title}</h2>
      <h3>{movie.tagline}</h3>
      <img src={movie.backdrop_path} alt={movie.title + ' cover'}/>
      <div className='details-row'>
        <div className='movie-datails'>
          <p>Genre: {movie.genres}</p>
          <p>Rating: {movie.average_rating.toFixed(1)}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}
export default SingleMovie;
