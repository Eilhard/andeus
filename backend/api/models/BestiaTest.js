const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  id: {
    type: Number,
    default: Math.floor(Math.random()* 100)
  },
  name: {
    type: String
  }
})

module.exports = mongoose.model('test', testSchema);
