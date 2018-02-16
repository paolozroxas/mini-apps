import React from 'react';

module.exports.Frame = (props) => (
  <div className="frame">
    <div className="frame-round">{props.identifier}</div>
    <div className="frame-score">
      <div className="frame-score-leftbox">L</div>
      <div className="frame-score-rightbox">R</div>
    </div>
    <div className="frame-total">Total</div>
  </div>
)

module.exports.Frame10 = (props) => (
  <div className="frame frame-10">
    <div className="frame-round">{props.identifier}</div>
    <div className="frame-score">
      <div className="frame-score-leftbox">L</div>
      <div className="frame-score-rightbox">M</div>
      <div className="frame-score-rightbox">R</div>
    </div>
    <div className="frame-total">Total</div>
  </div>
)

module.exports.FrameTotal = (props) => (
  <div className="frame frame-final">
    <div className="frame-round">{props.identifier}</div>
    <div className="frame-score">Total</div>
    <div className="frame-total">Total</div>
  </div>
)
