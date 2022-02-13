import React, { Component } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';
import UserRating from '../UserRating/UserRating';
import { Link } from 'react-router-dom'
import api from '../../apiCalls';
import tomatillo from '../../assets/tomatillo.svg';
import './SingleMovie.scss';


class SingleMovie extends Component {
  constructor({ match }) {
    super()
    this.state = {
      id: match.params.id,
      movie: null,
      userRating: 0
    }
  }

  componentDidMount = () => {
    api.getSingleMovie(this.state.id)
      .then(data => {
        if(data.title) {
          this.setState({movie: data})
        } else {
          throw new Error('Oh no! Looks like this was a rancid tomatillo.')
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({error: error.message})
      })
  }

  render() {
    const movie = this.state.movie;

    const errorModal = this.state.error &&
      <ErrorModal
        error={this.state.error}
      />

    const userRating = <UserRating/>

    const movieContainer = movie &&
      <div>
        <Link to='/'>
          <button className='back-button'>&laquo; Back</button>
        </Link>
        <div className='single-movie-container'>
          <header className='single-movie-header'>
          <div className='title-container'>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-tagline'>{movie.tagline}</p>
          </div>
          <div className='header-details'>
            <div className='runtime-container'>
              <p className='bold-text'>Runtime:</p>
              <p className='runtime'>{movie.runtime}</p>
            </div>
            <div className='rating-container'>
              <p className='bold-text'>Rating:</p>
              <p className='rating'>{movie.average_rating}</p>
            </div>
          </div>
          {userRating}
          </header>
          <div className='image-container'>
            <img className='side-img' src={movie.poster_path} alt={movie.title + ' cover'}/>
            <img className='backdrop-img' src={movie.backdrop_path} alt={movie.title + ' backdrop image'}/>
          </div>
          <div className='details-row'>
            <div className='movie-details'>
              <p className='genre'><span className='bold-text'>Genre:</span> {movie.genres}</p>
              <p className='release-date'><span className='bold-text'>Release Date:</span> {movie.release_date}</p>
              <p className='budget'><span className='bold-text'>Budget:</span> {movie.budget}</p>
              <p className='revenue'><span className='bold-text'>Revenue:</span> {movie.revenue}</p>
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
