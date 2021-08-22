const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  ghID: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
