import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import api from './apiCalls';
import './styles/App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ AllMovies } />
        <Route path='/:id' component={ SingleMovie } />
      </Switch>
    </>
  );
}

export default App;
