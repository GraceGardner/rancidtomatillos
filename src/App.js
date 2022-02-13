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
      userId: null,
      showLogin: false,
      errorMessage: null
    }
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }))
  }

  logoutUser = () => {
    this.setState({
      name: null,
      userId: null
    })
  }

  loginUser = (email, password) => {
    api.postUser(email, password)
    .then(response => {
      if(response.error) {
        this.setState({errorMessage: response.error})
      } else {
        this.setState({
        name: response.user.name,
        userId: response.user.id,
        errorMessage: null,
        showLogin: false
      })}
    })
    .catch(error => console.log(error))
  }

  render() {

    const loginModal = this.state.showLogin &&
      <Login
        loginUser={this.loginUser}
        errorMessage={this.state.errorMessage}
        toggleLogin={ this.toggleLogin }
      />

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
      <Route path='/:id'
        render={({ match }) => (
          <SingleMovie userId={this.state.userId} id={match.params.id}/>
        )}
      />
      </Switch>
      </>
    );
  }
}

export default App;
