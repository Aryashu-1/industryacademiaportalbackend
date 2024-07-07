const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpcomingEventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  eventUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('UpcomingEvent', UpcomingEventSchema);
