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
  body: {
    type: String,
    default: ''
  },
  sectionImages: [String],
  sections: [
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
      listItems: [String]
    }
  ]
})

module.exports = mongoose.model('articles', articleSchema);
