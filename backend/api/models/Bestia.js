const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bestiaSchema = new Schema({
  name: {
    type: String,
    required
  },
  race: {
    type: String,
    default: 'Animal'
  },
  lvl: {
    type: Number,
    default: 1
  },
  hp: {
    type: Number,
    default: 1
  },
  energy: {
    type: Number,
    default: 1
  },
  description: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    default: ''
  },
  loot: [
    {
      item: {
        ref: 'items',
        type: Schema.Types.ObjectId
      },
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 1
      },
      chance: {
        type: Number,
        default: 0
      },
    }
  ]
})

module.exports = mongoose.model('bestia', bestiaSchema);
