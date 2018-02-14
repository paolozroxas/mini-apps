const _ = require('underscore');

module.exports.convert = (json) => {
  //get fields
  var fields = Object.keys(json);
  fields = _.filter(fields, (el) => {
    return el !== 'children';
  })



};

module.exports.traverse = (obj, callback) => {
  
}
