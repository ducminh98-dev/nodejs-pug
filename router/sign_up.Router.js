const express = require('express');
const login_router =require('../controllers/sign_upControllers');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads'})
const router = express.Router();

router.get('/',login_router.getSign_up);

router.post('/',upload.single('avatar'),login_router.postSign_up);

module.exports = router;