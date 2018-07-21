import React, { Component } from 'react';

export default class Guess extends React.Component{

state = {
  guess:""
}

updateGuess = (event) => {
  const value = event.target.value
  this.setState(()=>({
    guess:value
  }))
}

handleGuess = () => {
  this.props.onGuess(parseInt(this.state.guess))
  this.setState(()=>({
    guess: ""
  }))
}

  render(){
    return(
      <div>
        <input type="number" value={this.state.guess} onChange={this.updateGuess} />
        {!this.props.gameStatus && <button onClick={this.handleGuess}>Guess</button>}
      </div>
    )
  }
}

