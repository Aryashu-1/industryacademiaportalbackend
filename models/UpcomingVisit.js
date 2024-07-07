const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpcomingVisitSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  companyLocation: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('UpcomingVisit', UpcomingVisitSchema);
