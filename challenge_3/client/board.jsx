//require dependencies
import React from 'react';
import _ from 'underscore';

//props passed to Board: board, player, advanceGame

var Board = (props) => {
  //array columns: this corresponds to the board's columns, left to right
  var columns = props.board;

  //create Column components
  var columnComponents = _.map(columns, (column, index) => {
    return (<Column column={column} key={index} idxCol={index} advanceGame={props.advanceGame} />)
  });

  return (
    <div className="board">
      {columnComponents}
    </div>
  );

};


class Column extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(event) {
    //in this function, i have access to: event.target, this=Column, this.props.advanceGame
    this.props.advanceGame(this.props.idxCol);
  }

  render() {
    var circleComponents = _.map(this.props.column, (value, index) => {
      return (<Circle value={value} key={index} idxRow={index} idxCol={this.props.idxCol}  />);
    });

    return(
      <div className="column" onClick={this.clickHandler.bind(this)}>
        {circleComponents}
      </div>
    )
  }

}


var Circle = (props) => {
  var circleStyle = {borderColor: props.value}
  return (
    <div className="circle" style={circleStyle}></div>
  )
};

module.exports = Board;
