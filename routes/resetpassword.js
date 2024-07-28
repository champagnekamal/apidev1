const express = require('express')
const router = express.Router()
const {reset} = require('../controllers/resetpass')

router.route('/').post(reset)


module.exports = router 