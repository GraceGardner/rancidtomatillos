import React, {Component} from 'react';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import movieData from './movieData'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      }
    }
  }

  componentDidMount = () => {
    this.setState({movies: movieData.movies});
  }

  selectMovie = (id) => {
    const movie = this.state.movies.find(movie => movie.id === id);
    this.setState({selectedMovie: movie})
    console.log(this.state.selectedMovie)
  }

  clearSelection = () => {
    this.setState({selectedMovie: null})
  }

  render() {
    return (
      <main>
        <SingleMovie movie={this.state.selectedMovie}/>
      </main>
    )
  }
}

export default App;

// <AllMovies movies={this.state.movies} selectMovie={this.selectMovie}/>
