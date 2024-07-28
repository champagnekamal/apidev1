const express = require('express')
const router = express.Router()
const {getallProducts,getallProductstesting} = require('../controllers/products')


router.route('/').get(getallProducts)
router.route('/testing').get(getallProductstesting)

module.exports = router 