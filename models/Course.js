// models/Course.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseName: String,
  imageUrls: [String],
  industryPartner: String,
  description: String,
  url: String,
  expert: String,
  organization: String,
  logo: String,
  popular: Boolean,
});

module.exports = mongoose.model('Course', CourseSchema);
