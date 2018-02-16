import React from 'react';
import {Frame, Frame10, FrameTotal} from './Frame.jsx';

var ScoreCardList = (props) => {

  return (
    <div className="scorecard-list">
      <ScoreCard key={0} identifier={0}/>
    </div>
  );
};

var ScoreCard = (props) => {
  var frames = [];
  for (var i = 0; i < 10; i++) {
    frames.push(<Frame key={i} identifier={i} />)
  }
  return (
    <div className="scorecard">
      <div className="scorecard-name">Player 1</div>
      <div className="frames">
        {frames}
        <Frame10 identifier={10}/>
        <FrameTotal identifier={'Total'}/>
      </div>
    </div>
  )
}






module.exports = ScoreCardList;
