// models/Event.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: String,
  date: String,
  img: String,
  venue: String,
  description: String,
  eventUrl: String,
});

module.exports = mongoose.model('Event', EventSchema);
