//require dependencies
import React from 'react';
import _ from 'underscore';
//require jsx files
import Title from './title.jsx';
import Board from './board.jsx';
import GameStatus from './gameStatus.jsx'
import Footer from './footer.jsx';

// var players = [
//   {name: 'Player 1', token: 'R', color: 'darkred', wins: 0},
//   {name: 'Player 2', token: 'Y', color: 'gold', wins: 0}
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
      ongoing: true
    };
    this.state.gameStatus = props.players[this.state.currentPlayer].name + '\'s Turn';

    //create game board
    for (var i = 0; i < props.boardWidth; i++) {
      var col = [];
      for (var j = 0; j < props.boardHeight; j++) {
        col.push('white');
      }
      this.state.board.push(col);
    }
  }//end constructor

  advanceGame(idxCol) {
    //check if game is ongoing
    if (!(this.state.ongoing)) {
      return;
    }

    //update board state
    var i = 0;
    while (this.state.board[idxCol][i] !== 'white' && i < this.props.boardHeight - 1) {
      i++;
    }
    this.state.board[idxCol][i] = this.props.players[this.state.currentPlayer].color;
    this.setState({board: this.state.board});

    //check for win or tie
    if (this.checkForWin(this.props.players[this.state.currentPlayer].color)) {
      this.endGame(this.state.currentPlayer);
      return;
    } else if (this.boardIsFull()) {
      this.endGame();
      return;
    }

    //set currentPlayer state and status message
    if (this.state.currentPlayer === this.props.players.length - 1) {
      this.setState({currentPlayer: 0});
    } else {
      this.setState({currentPlayer: this.state.currentPlayer + 1});
    }
    this.setState({gameStatus: this.props.players[this.state.currentPlayer].name + '\'s Turn'})
  }

  endGame (player) {
    if (player === undefined) {
      this.setState({gameStatus: 'Tied Game!'});
    } else {
      this.setState({gameStatus: `Victory for ${this.props.players[player].name}!`});
    }
    console.log('VICTORY FOR ', player);
    this.setState({ongoing: false});
  }

  boardIsFull() {
    var count = 0;
    for (var i = 0; i < this.props.boardWidth; i++) {
      for (var j = 0; j < this.props.boardHeight; j++) {
        if (this.state.board[i][j] !== 'white') {
          count++;
        }
      }
    }
    return (count >= this.props.boardWidth * this.props.boardHeight);
  }

  checkForWin(color) {
    return this.checkForRowColWin(color, true) ||
    this.checkForRowColWin(color, false) ||
    this.checkForDiagWin(color);
  }

  checkForRowColWin (color, isCol) {
    if (isCol) {
      var iMax = this.props.boardWidth;
      var jMax = this.props.boardHeight;
    } else {
      var iMax = this.props.boardHeight;
      var jMax = this.props.boardWidth;
    }
    for (var i = 0; i < iMax; i++) {
      var count = 0;
      for (var j = 0; j < jMax; j++) {
        if ((isCol ? this.state.board[i][j] : this.state.board[j][i]) === color) {
          count++;
        } else {
          count = 0;
        }
        if (count >= 4) {
          return true;
        }
      }
    }
  }

  checkForDiagWin(color) {
    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 4; i++) {
        if (this.checkForDiagWinHelper(i, j, color, true)) {
          return true;
        }
      }
    }
    for (var j = 3; j < 6; j++) {
      for (var i = 0; i < 4; i++) {
        if (this.checkForDiagWinHelper(i, j, color, false)) {
          return true;
        }
      }
    }
    return false;
  }

  checkForDiagWinHelper (i, j, color, isUp) {
    var count = 0;
    for (var x = 0; x < 4; x++) {
      if (this.state.board[i][j] === color) {
        count++;
      }
      i++;
      isUp ? j++ : j--;
    }
    return count >= 4;
  }

  render() {
    return (
      <div className="app">
        <Title />
        <Board board={this.state.board}
          currentPlayer={this.props.players[this.state.currentPlayer]}
          resolved={this.state.resolved}
          advanceGame={this.advanceGame.bind(this)} />
        <GameStatus message={this.state.gameStatus} />
        <Footer />
      </div>
    );
  }


}

module.exports = App;
