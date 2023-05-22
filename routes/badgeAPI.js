const express = require('express');
const router = express.Router();
// reuire Controller
const userController = require('../controllers/badgeController')

// get all user
router.get('/allbadges', userController.allBadges)

// add one user
router.post('/addbadge', userController.addBadge)

//getone user by id
router.get('/getbadge/:id', userController.getBadge)

// update user by id
router.put('/updatebadge/:id', userController.updateBadge)

// delete user by id
router.delete('/removebadge/:id', userController.removeBadge)

module.exports = router;