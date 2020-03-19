const express = require('express');
const router = express.Router();
const tranferController = require('../controllers/tranferController');
const tranfer_validate = require('../validate/tranfer_validate')


router.get('/',tranferController.get_tranfer);

router.post('/',tranfer_validate.validate,tranferController.post_tranfer)

module.exports = router;