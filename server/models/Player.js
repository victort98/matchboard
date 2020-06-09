const { Schema, model } = require('mongoose');
const modelName = 'Player';
 
let schema = new Schema({
  name: String
});
 
module.exports = model(modelName, schema);