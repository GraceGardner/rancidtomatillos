import React, { Component } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';
import { Link } from 'react-router-dom'
import api from '../../apiCalls';
import tomatillo from '../../assets/tomatillo.svg'
import './SingleMovie.scss';

class SingleMovie extends Component {
  constructor({ match }) {
    super()
    this.state = {
      id: match.params.id,
      movie: null
    }
  }

  componentDidMount = () => {
    api.getSingleMovie(this.state.id)
      .then(data => this.setState({movie: data}))
      .catch(error => {
        console.log(error)
        this.setState({error: error})
      })
  }

  render() {
    const movie = this.state.movie;

    const errorModal = this.state.error &&
      <ErrorModal
        error={this.state.error}
      />

    const movieContainer = movie &&
      <div>
        <Link to='/'>
          <button className='back-button'>&laquo; Back</button>
        </Link>
        <div className='single-movie-container'>
          <header className='single-movie-header'>
          <div className='title-container'>
            <h2 className='movie-title'>{movie.title}</h2>
            <p>{movie.tagline}</p>
          </div>
          <div className='header-details'>
            <div className='runtime-container'>
              <p className='bold-text'>Runtime:</p>
              <p>{movie.runtime}</p>
            </div>
            <div className='rating-container'>
              <p className='bold-text'>Rating:</p>
              <img className='sm-logo' src={tomatillo} alt='tomitillo'/>
              <p>{movie.average_rating}</p>
            </div>
          </div>
          </header>
          <div className='image-container'>
            <img className='side-img' src={movie.poster_path} alt={movie.title + ' cover'}/>
            <img className='backdrop-img' src={movie.backdrop_path} alt={movie.title + ' backdrop image'}/>
          </div>
          <div className='details-row'>
            <div className='movie-details'>
              <p><span className='bold-text'>Genre:</span> {movie.genres}</p>
              <p><span className='bold-text'>Release Date:</span> {movie.release_date}</p>
              <p><span className='bold-text'>Budget:</span> {movie.budget}</p>
              <p><span className='bold-text'>Revenue:</span> {movie.revenue}</p>
            </div>
            <p className='movie-overview'>{movie.overview}</p>
          </div>
        </div>
      </div>

    return (
      <>
        { movieContainer }
        { errorModal }
      </>
    )
  }
}

export default SingleMovie;
