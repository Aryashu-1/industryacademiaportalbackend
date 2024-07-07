const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndustryDesignedCourseSchema = new Schema({
  courseName: {
    type: String,
    required: true
  },
  imageUrls: [String],
  industryPartner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('IndustryDesignedCourse', IndustryDesignedCourseSchema);
