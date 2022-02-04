import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import movieData from './movieData'
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
