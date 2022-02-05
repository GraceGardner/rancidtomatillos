import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
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

  componentDidMount = () => {
    api.get('movies')
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: error}))
  }

  selectMovie = (id) => {
    api.getSingleMovie(id)
    .then(data => this.setState({selectedMovie: data.movie}))
    .catch(error => this.setState({error: error}))
  }

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
        {this.state.error && <h2>{this.state.error}</h2>}
      </main>
    )
  }
}

export default App;
