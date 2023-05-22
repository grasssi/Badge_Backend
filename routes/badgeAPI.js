const express = require('express');
const router = express.Router();
// reuire Controller
const badgeController = require('../controllers/badgeController')

// get all user
router.get('/allbadges', badgeController.allBadges)

// add one user
router.post('/addbadge', badgeController.addBadge)

//getone user by id
router.get('/getbadge/:id', badgeController.getBadge)

// update user by id
router.put('/updatebadge/:id', badgeController.updateBadge)

// delete user by id
router.delete('/removebadge/:id', badgeController.removeBadge)

module.exports = router;