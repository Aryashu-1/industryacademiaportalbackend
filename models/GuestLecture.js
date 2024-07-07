// models/GuestLecture.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestLectureSchema = new Schema({
  topic: String,
  expert: String,
  date: String,
  images: [String],
  title: String,
  timings: String,
  venue: String,
  description: String,
  lectureUrl: String,
});

module.exports = mongoose.model('GuestLecture', GuestLectureSchema);
