import React from 'react';
import './SingleMovie.scss';

const SingleMovie = ({movie}) => {
  return (
    <div className='single-movie-container'>
      <header className='single-movie-header'>
      <div className='title-container'>
        <h2 className='movie-title'>{movie.title}</h2>
        <p>{movie.tagline}</p>
      </div>
      <div className='header-details'>
        <div className='runtime-container'>
          <p className='bold-text'>Runtime:</p>
          <p>{movie.runtime} minutes</p>
        </div>
        <div className='rating-container'>
          <p className='bold-text'>Rating:</p>
          <p>{movie.average_rating.toFixed(1)}</p>
        </div>
      </div>
      </header>
      <div className='image-container'>
        <img className='side-img' src={movie.poster_path} alt={movie.title + ' cover'}/>
        <img className='backdrop-img' src={movie.backdrop_path} alt={movie.title + ' backdrop image'}/>
      </div>
      <div className='details-row'>
        <div className='movie-details'>
          <p><span className='bold-text'>Genre:</span> {movie.genres.join(', ')}</p>
          <p><span className='bold-text'>Release Date:</span> {movie.release_date}</p>
          <p><span className='bold-text'>Budget:</span> ${movie.budget}</p>
          <p><span className='bold-text'>Revenue:</span> ${movie.revenue}</p>
        </div>
        <p className='movie-overview'>{movie.overview}</p>
      </div>
    </div>
  )
}
export default SingleMovie;
