const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/itHealth')
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

module.exports.Patient = require('./patient');
