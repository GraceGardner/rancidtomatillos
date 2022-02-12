import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import Login from './components/Login/Login';
import api from './apiCalls';
import './styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      id: null,
      showLogin: false
    }
  }

  toggleLogin() {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }))
  }

  logoutUser() {
    this.setState({
      name: null,
      id: null
    })
  }

  render() {

    const loginModal = this.state.showLogin &&
      <Login/>

    return (
      <>
      <Navbar
        name={ this.state.name }
        toggleLogin={ this.toggleLogin }
        logoutUser={ this.logoutUser }
      />
      {loginModal}
      <Switch>
      <Route exact path='/' component={ AllMovies } />
      <Route path='/:id' component={ SingleMovie } />
      </Switch>
      </>
    );
  }
}


export default App;
