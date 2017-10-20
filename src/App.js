import React, { Component } from 'react';
import './App.css';
//import GuessButton from './components/guess-button' ;
//import GuessInput from './components/guess-button' ;
//import HotColdDisplay from './components/guess-button' ;
//import NewGameButton from './components/guess-button'; 
//import WhatButton from './components/guess-button' ;
import NavigationBar from './components/navigation-bar';
import Game from './components/game';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: 0,
      recent: 0,
      counter: 0,
      feedback: 0,
    }
  }

  render() {
    return (
      <div className='App'>  
        <NavigationBar />

        <Game />
      </div>
    );
  }
}

