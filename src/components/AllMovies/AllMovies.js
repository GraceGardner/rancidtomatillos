import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './AllMovies.scss'

const AllMovies = ({movies, selectMovie}) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
      image={movie.poster_path}
      title={movie.title}
      id={movie.id}
      key={movie.id}
      selectMovie={selectMovie}
      />
    )
  })

  return(
    <div className='all-movies'>
    {movieCards}
    </div>
  )
}

export default AllMovies;
