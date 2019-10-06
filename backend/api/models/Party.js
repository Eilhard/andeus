const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partySchema = new Schema({
  date: {
    type: Number,
    default: Date.now
  },
  title: {
    type: String,
    default: 'Unnamed party'
  },
  members: [
    {
      ref: 'characters',
      type: Schema.Types.ObjectId,
    }
  ],
  description: {
    type: String,
    default: ''
  },
  achievements: [
    {
      ref: 'achievements',
      type: Schema.Types.ObjectId,
    }
  ],
  imgSrc: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('party', partySchema);
