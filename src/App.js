import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import ErrorModal from './components/ErrorModal/ErrorModal';
import { Route, Switch } from 'react-router-dom';
import api from './apiCalls';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      // selectedMovie: null
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

  selectMovie = (id) => {
    api.getSingleMovie(id)
    .then(data => this.setState({selectedMovie: data}))
    .catch(error => this.setState({error: error}))
  }

  // clearSelection = () => {
  //   this.setState({selectedMovie: null})
  // }

  render() {

    const singleMovie = this.state.selectedMovie &&
      <SingleMovie
        movie={this.state.selectedMovie}
      />

    return (
      <main>
        <Navbar
          selectedMovie={this.state.selectedMovie}
          clearSelection={this.clearSelection}
        />
        <Switch>
        <Route path='/home' render={() => <AllMovies
          movies={this.state.movies}
          selectMovie={this.selectMovie}
        />}
        <Route exact path='/:id' render={({match}) =>
         <SingleMovie
          movie={this.state.selectedMovie}}
        />}
        <Route path='/error' render={() => <ErrorModal
          error={this.state.error}
        />
        {allMovies}
        {singleMovie}
        {errorModal}
        </Switch>
      </main>
    )
  }
}

export default App;
