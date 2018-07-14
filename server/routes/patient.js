const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// router.get('/', (req, res) => {
//     const errors = {};

//     Patient.find()
//       .populate('', ['name', 'image'])
//       .then(patients => {
//         if (!patients) {
//           errors.nopatient = 'There are no profiles';
//           return res.status(404).json(errors);
//         }

//         res.json(patients);
//       })
//       .catch(err => res.status(404).json({ patient: 'There are no profiles' }));
//   });

router.get('/', (req, res) => {
  Patient.find({}, (err, patients) => {
    // cars.title = 'title'
    res.json(patients);

    // cars: cars
  });
});

module.exports = router;
