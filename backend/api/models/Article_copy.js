const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
  },
  imgSrc: {
    type: String,
    default: ''
  },
  body: [
    {
      sectionType: {
        type: String,
        default: 'section' // Could be 'section' 'list'
      },
      sectionTitle: {
        type: String,
        default: ''
      },
      sectionBody: {
        type: String,
        default: ''
      },
      imgSrc: {
        type: String,
        default: ''
      },
      listItems: [String]
    }
  ]
})

module.exports = mongoose.model('articleTest', articleSchema);
