const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  imgSrc: {
    type: String,
  }
})

module.exports = mongoose.model('article', articleSchema);
