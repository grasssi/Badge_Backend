const express = require('express');
const router = express.Router();
// reuire Controller
const efccmController = require('../controllers/efccmController')

// get all user
router.get('/alleffcms', efccmController.allEffcms)

// add one user
router.post('/addeffcm', efccmController.addEffcm)

//getone user by id
router.get('/geteffcm/:id', efccmController.getEffcm)

// update user by id
router.put('/updateeffcm/:id', efccmController.updateEffcm)

// delete user by id
router.delete('/removeeffcm/:id', efccmController.removeEffcm)

module.exports = router;