import React, { Component } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';
import UserRating from '../UserRating/UserRating';
import { Link } from 'react-router-dom'
import api from '../../apiCalls';
import tomatillo from '../../assets/tomatillo.svg';
import './SingleMovie.scss';


class SingleMovie extends Component {
  constructor({ userId, id }) {
    super()
    this.state = {
      id: id,
      movie: null,
      userId: userId,
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

      if (this.state.userId) {
        this.getUserRating(this.state.userId)
      }

  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.userId !== this.props.userId) {
      this.setState({userId: this.props.userId})
      this.getUserRating(this.props.userId)
    }
  }

  getUserRating = (userId) => {
    api.getRatings()
      .then(data => {
        this.checkForRating(userId, data.ratings)
      })
  }

  checkForRating = (userId, ratings) => {
    const userRating = ratings.find(rating => {
      return rating.user_id === parseInt(userId) && rating.movie_id === parseInt(this.state.id)
    });
    if (userRating) {
      this.setState({userRating: userRating.rating});
    } else {
      this.setState({userRating: 0})
    }
  }

  setRating = (rating) => {
    api.postRating({
      user_id: this.state.userId,
      movie_id: parseInt(this.state.id),
      rating: parseInt(rating)
    })
    .then(data => this.setState({userRating: rating}))
  }

  render() {
    const movie = this.state.movie;

    const errorModal = this.state.error &&
      <ErrorModal
        error={this.state.error}
      />

    const userRating = this.state.userId &&
    <UserRating
      rating={this.state.userRating}
      setRating={this.setRating}
    />

    const movieContainer = movie &&
      <div className='page-container'>
        <div className='button-container'>
          <Link to='/'>
            <button className='back-button'>&laquo; Back</button>
          </Link>
        </div>
        <div className='single-movie-container'>
          <header className='single-movie-header'>
            <div className='title-container'>
              <h2 className='movie-title'>{movie.title}</h2>
              <p className='movie-tagline'>{movie.tagline}</p>
            </div>
            <div className='header-details'>
              <div className='runtime-container'>
                <p className='bold-text runtime-title'>Runtime:</p>
                <p className='runtime'>{movie.runtime}</p>
              </div>
              <div className='rating-container'>
                <img className='sm-logo' src={tomatillo} alt='tomitillo'/>
                <p className='bold-text rating-title'>Rating:</p>
                <p className='rating-text'>{movie.average_rating}</p>
              </div>
              {userRating}
            </div>
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
