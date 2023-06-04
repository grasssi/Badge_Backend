const express = require('express');
const router = express.Router();
// reuire Controller
const efccmController = require('../controllers/efccmController')

// get all efccms
router.get('/alleffcms', efccmController.allEffcms)

// add one efccm
router.post('/addeffcm', efccmController.addEffcm)

//getone efccm by id
router.get('/geteffcmbyid/:id', efccmController.getEffcmbyid)

//getone user by effcm
router.post('/foundefccm', efccmController.foundEffcm)

// update efccm by id
router.put('/updateeffcm/:id', efccmController.updateEffcm)

// delete efccm by id
router.delete('/removeeffcm/:id', efccmController.removeEffcm)

module.exports = router;