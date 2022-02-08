import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import ErrorModal from './components/ErrorModal/ErrorModal';
import api from './apiCalls';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }

  componentDidMount = () => {
    api.getAllMovies('movies')
    .then(data => {
      this.setState({movies: data})
    })
    .catch(error => this.setState({error: error}))
  }

  selectMovie = (id) => {
    api.getSingleMovie(id)
    .then(data => this.setState({selectedMovie: data}))
    .catch(error => this.setState({error: error}))
  }

  clearSelection = () => {
    this.setState({selectedMovie: null})
  }

  render() {
    const navbar = <Navbar
      selectedMovie={this.state.selectedMovie}
      clearSelection={this.clearSelection}/>

    const allMovies = !this.state.selectedMovie && <AllMovies
        movies={this.state.movies}
        selectMovie={this.selectMovie}/>

    const singleMovie = this.state.selectedMovie && <SingleMovie
      movie={this.state.selectedMovie}/>

    const errorModal = this.state.error && <ErrorModal
      error={this.state.error}/>

    return (
      <main>
        {navbar}
        {allMovies}
        {singleMovie}
        {errorModal}
      </main>
    )
  }
}

export default App;
