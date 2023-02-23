const express = require('express')
const router = express.Router()
const { newDetect } = require('../controllers/detectControllers')

router.post('/',  newDetect)

module.exports = router