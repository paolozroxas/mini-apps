import React from 'react';
import _ from 'underscore';
import $ from 'jquery';

import SelectPins from './SelectPins.jsx';
import SelectNumber from './SelectNumber.jsx';
import GameStatus from './GameStatus.jsx';
import ScoreCardList from './ScoreCardList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <div className="title">
          <h2>Bowling Score Card</h2>
          <h4>By Paolo Z. Roxas</h4>
        </div>
        <div className="selectors">
          <SelectPins />
          <div className = 'or'>or</div>
          <SelectNumber />
        </div>
        <GameStatus />
        <ScoreCardList />

        <div className="footer">
          February 15, 2018
        </div>

      </div>
    )
  }
}

module.exports = App;
