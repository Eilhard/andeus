const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const userSchema = new Schema({
  date: {
    type: Number,
    default: Date.now
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
  login: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  access: {
    isMaster: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 0
    }
  },
  characters: [
    {
      ref: 'characters',
      type: Schema.Types.ObjectId
    }
  ],
  achievements: [
    {
      ref: 'achievements',
      type: Schema.Types.ObjectId,
    }
  ],
  refreshToken: {
    type: String
  }
});

module.exports = mongoose.model('users', userSchema);
