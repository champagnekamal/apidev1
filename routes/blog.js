const express = require('express')
const router = express.Router()
const { createblog } = require('../controllers/blogcontroller')
const { getblog } = require('../controllers/getuserblog')
const authenticateUser = require('../middleware/authenticate')
const {getallblogs} = require('../controllers/allblogcontroller')

router.route('/createblog').post(authenticateUser,createblog)
router.route('/getblogs').get(authenticateUser,getblog)
router.route('/getallblogs').get(authenticateUser,getallblogs)
// router.route('/testing').get(getallProductstesting)

module.exports = router 