const mongoose = require('mongoose');

// const db = mongoose.connection;
const { Schema } = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

// Medication Schema
const MedicationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  side_effect: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  warning: {
    type: String,
    required: true,

    pregnancy: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Medication', MedicationSchema);
