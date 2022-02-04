import React from 'react';
import '../MovieCard/MovieCard.js'

const AllMovies = ({movies}) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
      image={movie.poster_path}
      title={movie.title}
      id={movie.id}
      key={movie.id}
      />
    )
  })
}

export default AllMovies;
