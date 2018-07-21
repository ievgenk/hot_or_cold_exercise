import React, { Component } from 'react';
import './App.css';
import Guess from './components/Guess'
import AttemptedGuess from './components/AttemptedGuess'

class App extends Component {



  state = {
      correctAnswer: Math.floor((Math.random() * 100)) + 1,
      guess: 0,
      attemptedGuesses: [],
      won: false,
      message: 'Make Your Guess!'
  }

  newGame = () => {
    this.setState(()=>({
      correctAnswer: Math.floor((Math.random() * 100)) + 1,
      guess: 0,
      attemptedGuesses: [],
      won: false,
      message: 'Make Your Guess!'
    }))
  }

  handleUserGuess = (guess)=> {
    let feedback = ''
   let winningStatus = false
    if (this.state.correctAnswer === guess){
      feedback = 'This is correct! Start a new Game!'
      winningStatus = true;
    }
    else if(this.state.correctAnswer - guess <= 10 || this.state.correctAnswer - guess <= -10){
      feedback = 'Hot!'
     }
     else {
      feedback = 'Cold!'
     }
     this.setState((prevState)=>({
      guess,
      attemptedGuesses: [...prevState.attemptedGuesses, guess],
      won:winningStatus,
      message:feedback
    }))
  }



  render() {
    const {correctAnswer, guess, attemptedGuesses, won} = this.state
    return (
      <div className='app'>
        <h1>Hot or Cold</h1>
        <h3>{this.state.message}</h3>
        <button onClick={this.newGame}>New Game</button>
        <Guess onGuess={this.handleUserGuess} gameStatus={this.state.won}/>
        <h3>Guess#{this.state.attemptedGuesses.length}</h3>
        <AttemptedGuess attempts={attemptedGuesses}/>
      </div>
    );
  }
}

export default App;
