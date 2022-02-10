import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import ErrorModal from '../ErrorModal/ErrorModal';
import api from '../../apiCalls';
import './AllMovies.scss';

class AllMovies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: null
    }
  }

  componentDidMount = () => {
    api.getAllMovies('movies')
    .then(data => {
      this.setState({movies: data})
    })
    .catch(error => {
      console.log(error)
      this.setState({error: error})
    })
  }

  render() {
    const movieCards = this.state.movies.map(movie => {
      return (
        <MovieCard
          image={movie.poster_path}
          title={movie.title}
          id={movie.id}
          key={movie.id}
          // selectMovie={selectMovie}
          rating={movie.average_rating}
        />
      );
    });

    const movieCardsContainer = !this.state.error &&
      <div className='all-movies'>
        {movieCards}
      </div>

    const errorModal = this.state.error &&
      <ErrorModal
        error={this.state.error}
      />

    return(
      <>
        { movieCardsContainer }
        { errorModal }
      </>
    );
  }
}

export default AllMovies;
