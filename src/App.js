import React, {Component} from 'react';
import AllMovies from './components/AllMovies/AllMovies';
import movieData from './movieData'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieSelected: false
    }
  }

  componentDidMount() {
    this.setState({movies: movieData.movies});
  }

  render() {
    return (
      <main>
        <AllMovies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
