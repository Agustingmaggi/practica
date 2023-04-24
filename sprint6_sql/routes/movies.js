const express = require('express')
const router = express.Router()
const moviesController = require ('../controllers/moviesController')

router.get('/add',moviesController.list)
router.post('/create',moviesController.create)

module.exports = router