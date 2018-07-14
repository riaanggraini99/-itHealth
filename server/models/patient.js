const mongoose = require('mongoose');

// const db = mongoose.connection;
const { Schema } = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

// Patient Schema
const PatientSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  adress: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // bcrypt  : true
    occupation: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
});

module.exports = mongoose.model('Patient', PatientSchema);
