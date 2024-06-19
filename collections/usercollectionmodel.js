const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  profile: {
    bio: {
      type: String
    },
    interests: [{
      type: String
    }],
    activityHistory: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity'
    }]
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  }
}, {
  timestamps: true
});

const userCollection = mongoose.model('User', userSchema);
module.exports = userCollection;
