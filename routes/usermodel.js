const express = require('express')
const router = express.Router()
const {user} = require('../controllers/usercontroller')
const {signin} = require('../controllers/signincontroller')
const { getUser } = require('../controllers/getUsers')
const authenticateUser = require('../middleware/authenticate')

router.route('/signup').post(user)
router.route('/signin').post(signin)
router.route('/getUsers').get(authenticateUser,getUser)

module.exports = router 