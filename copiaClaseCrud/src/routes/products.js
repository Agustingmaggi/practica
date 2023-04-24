const express = require('express')
const controller = require('../controllers/products')
const router = express.Router()

router.get('/',controller.index)  
router.get('/crear',controller.create)

module.exports = router