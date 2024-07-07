// models/Startup.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FounderSchema = new Schema({
  name: String,
  phone: String,
  email: String,
});

const StartupSchema = new Schema({
  name: String,
  founder: FounderSchema,
  description: String,
  logo: String,
});

module.exports = mongoose.model('Startup', StartupSchema);
