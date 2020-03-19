const express = require('express');
const multer  = require('multer')
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validate = require('../validate/user_validate');

const upload = multer({ dest: './public/uploads'})

router.get('/',userControllers.index);

router.get('/search',userControllers.search);

router.get('/create',userControllers.getCreate);

router.post('/create',upload.single('avatar'),validate.postCreate,userControllers.postCreate );

router.get('/:id',userControllers.view);

router.get('/:id/delete',userControllers.delete);

router.get('/:id/edit',userControllers.edit);

module.exports =  router;
