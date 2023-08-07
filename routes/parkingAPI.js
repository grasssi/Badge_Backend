const express = require('express');
const router = express.Router();
// reuire Controller
const parkingController = require('../controllers/parkingController')

// get all parkings
router.get('/allparkings', parkingController.allParkings)

// add one parking
router.post('/addparking', parkingController.addParking)

//getone parking by id
router.get('/getparkingid/:id', parkingController.getParkingbyid)

//getone user by Parking
router.post('/foundparking', parkingController.foundParking)

// update parking by id
router.put('/updateParking/:id', parkingController.updateParking)

// delete parking by id
router.delete('/removeParking/:id', parkingController.removeParking)

module.exports = router;