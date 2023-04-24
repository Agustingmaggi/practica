const express = require('express')
const router = express.Router()
const moviesAPIController = require('../../controllers/api/moviesAPIController')

router.get('/movies', moviesAPIController.list)

module.exports = router