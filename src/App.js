import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieSelected: false
    }
  }

  render() {
    return (
      <main>
        <h1>This is our beautiful app!</h1>
      </main>
    )
  }
}

export default App;
