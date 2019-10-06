const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
  date: {
    type: Number,
    default: Date.now
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
  party: {
    ref: 'party',
    type: Schema.Types.ObjectId,
  },
  nickname: {
    type: String,
    default: "Unknown"
  },
  name: {
    firstname: {
      type: String,
      default: "Unknown"
    },
    lastname: {
      type: String,
      default: "Wanderer"
    }
  },
  gender: {
    type: String,
    default: "unknown"
  },
  age: {
    type: Number,
    default: 20
  },
  attributes: {
    strength: {
      type: Number,
      default: 10
    },
    agility: {
      type: Number,
      default: 10
    },
    dexterity: {
      type: Number,
      default: 10
    },
    intelligence: {
      type: Number,
      default: 10
    },
    vitality: {
      type: Number,
      default: 10
    },
  },
  achievements: [
    {
      ref: 'achievements',
      type: Schema.Types.ObjectId,
    }
  ],
  money: [
    {
      title: {
        type: String,
        default: ''
      },
      amount: {
        type: Number,
        default: 0
      },
    }
  ],
  experience: [
    {
      title: {
        type: String,
        default: ''
      },
      amount: {
        type: Number,
        default: 0
      },
    }
  ]
});

module.exports = mongoose.model('characters', charactersSchema);
