import React from 'react';
import $ from 'jquery';
import _ from 'underscore';

class SelectPins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: []
    }
    //create state array of pins
    for (var i = 4; i > 0; i--) {
      var arr = [];
      for (var j = 0; j < i; j++) {
        arr.push(1);
      }
      this.state.pins.push(arr);
    }
  }

  render() {
    var pins = [];
    var count = 0;
    for (var i = 0; i < this.state.pins.length; i++) {
      var pinCol = [];
      for (var j = 0; j < this.state.pins[i].length; j++) {
        pinCol.push(<Pin value={this.state.pins[i][j]} key={count} identifier={count}/>);
        count++;
      }
      pins.push(<div className="pin-col" key={i}>{pinCol}</div>);
    }

    return (
      <div className="select-pins">
        <div className="pins">{pins}</div>
        <div className="button-container">
          <div className="button">Set Outcome</div>
        </div>
    </div>
    );
  }
};


var Pin = (props) => {
  var style = {};
  if (props.value === 0) {
    style['visibility'] = 'hidden';
  }
  return (
    <div className="pin" style={style}></div>
  )
}



module.exports = SelectPins;
