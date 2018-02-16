import React from 'react';

var SelectNumber = (props) => {
  var buttons = [];
  var count = 1;
  for (var i = 0; i < 3; i++) {
    var buttonCol = [];
    for (var j = 0; j < 3; j++) {
      buttonCol.push(<div className="num-btn" key={j}>{count}</div>)
      count++;
    }
    buttons.push(<div className="num-btn-col" key={i}>{buttonCol}</div>)
  }
  return (
    <div className="select-number">
      <div className="select-number-heading">
        Number of Pins Hit:
      </div>
      <div className="select-number-numbers">
        {buttons}
      </div>
      <div className="select-number-random">
        <div className="random-btn">10</div>
        <div className="random-btn">Random</div>
      </div>
    </div>
  );
};




module.exports = SelectNumber;
