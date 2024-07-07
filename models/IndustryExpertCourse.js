const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndustryExpertCourseSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  expert: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  img: String
});

module.exports = mongoose.model('IndustryExpertCourse', IndustryExpertCourseSchema);
