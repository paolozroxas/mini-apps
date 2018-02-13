BOARD_DEGREE = 3;
NUMBER_OF_PLAYERS = 2;
PLAYER_SYMBOLS = ['X', 'O', '+', '*'];

app = {};

app.init = function() {
  //create initial board state
  this.board = [];
  for (var i = 0; i < BOARD_DEGREE; i++) {
    var row = [];
    for (var j = 0; j < BOARD_DEGREE; j++) {
      row.push(' ');
    }
    this.board.push(row);
  }

  //set current player
  this.currentPlayer = 0;

  //places board elements on the DOM
  document.getElementsByClassName('board')[0].innerHTML = '';
  for (var i = 0; i < this.board.length; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    for (var j = 0; j < this.board[i].length; j++) {
      var square = document.createElement('div');
      square.className = 'square';
      square.id = i + ',' + j;
      square.innerText = this.board[i][j];
      row.appendChild(square);
    }
    document.getElementsByClassName('board')[0].appendChild(row);
  }

  //attaches event listeners to the squares
  var squares = document.getElementsByClassName('square');
  for (var k = 0; k < squares.length; k++) {
      squares[k].addEventListener('click', function(event) {
      var i = event.target.id[0];
      var j = event.target.id[2];
      app.placeToken(i, j, PLAYER_SYMBOLS[app.currentPlayer]);
      app.nextTurn();
    })
  }

};

//takes board state and writes it to the DOM board
app.render = function() {
  //renders squares
  var squares = document.getElementsByClassName('square');
  var elementCount = 0;
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board[i].length; j++) {
      squares[elementCount].innerText = this.board[i][j];
      elementCount++;
    }
  }
  
};

//this will change state and call render
app.placeToken = function(i, j, token) {
  this.board[i][j] = token;
  this.render();
};

app.checkForWin = function(token) {
  if (this.checkForWinDiag(token) || this.checkForWinRowCol(token)) {
    return true;
  } else {
    return false;
  }
};

app.checkForWinRowCol = function(token) {
  for (var i = 0; i < app.board.length; i++) {
    var countR = 0;
    var countC = 0;
    console.log('starting row/col, counts are ', countR, countC);
    for (var j = 0; j < app.board[i].length; j++) {
      if (app.board[i][j] === token) {
        countR++;
        console.log('countR is now', countR);
      }
      if (app.board[j][i] === token) {
        countC++;
        console.log('countC is now', countC);
      }
    }
    if (countR === app.board.length || countC === app.board.length) {
      return true;
    }
  }
  return false;
};


app.checkForWinDiag = function(token) {
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < app.board.length; i++) {
    var j1 = i;
    var j2 = app.board.length -1 - i;
    console.log(`d1 is (${i}, ${j1}) and d2 is (${i}, ${j2})`);
    if (app.board[i][j1] === token) {
      count1++;
      console.log('count1 is now ', count1);
    }
    if (app.board[i][j2] === token) {
      count2++;
      console.log('count2 is now ', count2);
    }
  }
  if(count1 === app.board.length || count2 === app.board.length) {
    return true;
  } else {
    return false;
  }
};

app.isBoardFull = function() {
  var count = 0;
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board[i].length; j++) {
      if (this.board[i][j] !== ' ') {
        count++;
      }
    }
  }
  if(count === this.board.length * this.board.length) {
    return true;
  } else {
    return false;
  }
};

app.nextTurn = function() {
  //sees if the current player won
  if(this.checkForWin(PLAYER_SYMBOLS[this.currentPlayer])) {
    this.endGame(this.currentPlayer);
    return;
  } else if (this.isBoardFull()) {
    this.endGame();
    return;
  }

  //changes current player
  if (this.currentPlayer === NUMBER_OF_PLAYERS - 1) {
    this.currentPlayer = 0;
  } else {
    this.currentPlayer++;
  }

  //displays current player
  var gameInfo = document.getElementsByClassName('game-info')[0];
  gameInfo.innerText = 'Player ' + (Number(this.currentPlayer) + 1);

};

app.endGame = function(winner) {
  var gameInfo = document.getElementsByClassName('game-info')[0];
  gameInfo.innerText = ' ';
  var banner = document.getElementsByClassName('game-outcome')[0];
  if(winner === undefined) {
    banner.innerText = 'Tied Game!'
  } else {
    banner.innerText = `Player ${winner + 1} Wins!`;
  }
};



document.addEventListener('DOMContentLoaded', function(event) {
  app.init();
  app.render();


});

