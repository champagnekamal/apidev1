const express = require('express')
const router = express.Router()
const {user} = require('../controllers/usercontroller')
const {signin} = require('../controllers/signincontroller')

router.route('/signup').post(user)
router.route('/signin').post(signin)

module.exports = router 