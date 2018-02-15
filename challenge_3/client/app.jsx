//require dependencies
import React from 'react';
import _ from 'underscore';
//require jsx files
import Title from './title.jsx';
import Board from './board.jsx';
import GameStatus from './gameStatus.jsx'
import Footer from './footer.jsx';

// var players = [
//   {name: 'Player 1', token: 'R', color: 'red', wins: 0},
//   {name: 'Player 2', token: 'Y', color: 'yellow', wins: 0}
// ];

//The props to pass in to App:
//boardHeight, boardWidth, players

//create stateful component ConnectFour
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      currentPlayer: 0,
      resolved: false
    };
    this.state.gameStatus = props.players[this.state.currentPlayer].name + '\'s Turn';

    //create game board
    for (var i = 0; i < props.boardHeight; i++) {
      var row = [];
      for (var j = 0; j < props.boardWidth; j++) {
        row.push(' ');
      }
      this.state.board.push(row);
    }

  }//end constructor

  clickHandler(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div className="app">
        <Title />
        <Board board={this.state.board}
          currentPlayer={this.props.players[this.state.currentPlayer]}
          resolved={this.state.resolved}
          clickHandler={this.clickHandler.bind(this)} />
        <GameStatus message={this.state.gameStatus} />
        <Footer />
      </div>
    );
  }


}

module.exports = App;
