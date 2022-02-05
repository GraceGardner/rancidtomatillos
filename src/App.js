import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
// import movieData from './movieData'
import api from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }

  componentDidMount() {
    api.get('movies')
    .then(data => this.setState({movies: data.movies}));
    console.log(this.state.movies)
  }

  selectMovie = (id) => {
    api.getSingleMovie(id)
    .then(data => this.setState({selectedMovie: data.movie}))
  }
  // const movie = this.state.movies.find(movie => movie.id === id);

  clearSelection = () => {
    this.setState({selectedMovie: null})
  }

  render() {
    return (
      <main>
        <Navbar
          selectedMovie={this.state.selectedMovie}
          clearSelection={this.clearSelection}/>
        {!this.state.selectedMovie && <AllMovies
            movies={this.state.movies}
            selectMovie={this.selectMovie}/>
        }
        {this.state.selectedMovie && <SingleMovie
          movie={this.state.selectedMovie}/>
        }
      </main>
    )
  }
}

export default App;
