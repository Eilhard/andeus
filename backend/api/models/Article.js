const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required
  },
  body: {
    type: [
      {
        sectionTitle: {
          type: String,
          default: ''
        },
        sectionBody: {
          type: String,
          default: ''
        },
      }
    ]
  },
})

module.exports = mongoose.model('article', articleSchema);
