import React, { Component } from 'react';


export default function AttemptedGuess(props){
  return <div>
    <ul>
      {props.attempts.map(attempt =><li>{attempt}</li>)}
    </ul>
  </div>
}