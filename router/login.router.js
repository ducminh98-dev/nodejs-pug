const express = require('express');
const authen = require('../controllers/authenControllers');
const router = express.Router();


router.get('/',authen.login);

router.post('/',authen.postLogin);
router.get('/delete',authen.logout);

module.exports = router