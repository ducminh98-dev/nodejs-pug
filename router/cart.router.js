const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cartController')


router.get('/add/:productID',cartController.add)

module.exports = router;