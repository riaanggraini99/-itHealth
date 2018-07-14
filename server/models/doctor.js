const mongoose = require('mongoose');

// const db = mongoose.connection;
const { Schema } = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

// doctor Schema
const DoctorSchema = new Schema({
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
  specialist: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,

    occupation: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
});

module.exports = mongoose.model('Doctor', DoctorSchema);
