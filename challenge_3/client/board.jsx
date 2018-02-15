//require dependencies
import React from 'react';
import _ from 'underscore';

//props passed to Board: board, player, clickHandler

var Board = (props) => {
  var board = props.board;

  //get array of columns. this corresponds to the board's columns, left to right
  var columns = [];
  for (var idxCol = 0; idxCol < board[0].length; idxCol++) {
    var column = [];
    for (var i = 0; i < board.length; i++) {
      column.push(board[i][idxCol]);
    }
    columns.push(column);
  }

  //create Column components
  var columnComponents = _.map(columns, (column, index) => {
    return (<Column column={column} key={index} onClick={props.clickHandler} />)
  });

  return (
    <div className="board">
      {columnComponents}
    </div>
  );

};


var Column = (props) => {
  var circleComponents = _.map(props.column, (value, index) => {
    return (<Circle value={value} key={index} idxCol={props.idxCol}  />);
  });

  return(
    <div className="column">
      {circleComponents}
    </div>
  )
};

var Circle = (props) => (
  <div className="circle">{props.value}</div>
);

module.exports = Board;
