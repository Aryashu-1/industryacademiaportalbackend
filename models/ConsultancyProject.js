// models/ConsultancyProject.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsultancyProjectSchema = new Schema({
  projectName: String,
  client: String,
  description: String,
  projectUrl: String,
  popular: Boolean,
});

module.exports = mongoose.model('ConsultancyProject', ConsultancyProjectSchema);
