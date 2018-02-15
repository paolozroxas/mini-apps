//require npm dependencies
import ReactDOM from 'react-dom';
import React from 'react';
import _ from 'underscore';
//require jsx files
import App from './app.jsx';


//set board params
var BOARD_HEIGHT = 6;
var BOARD_WIDTH = 7;
var PLAYER_COUNT = 2;

//create players and colors
var players = [
  {name: 'Player 1', color: 'darkred', wins: 0},
  {name: 'Player 2', color: 'gold', wins: 0}
];


//The props to pass in to App:
//boardHeight, boardWidth, players

//TODO: ReactDOM render here
ReactDOM.render(
  <App players={players}
  boardHeight={BOARD_HEIGHT}
  boardWidth={BOARD_WIDTH}
/>,
document.getElementById('app')
);
