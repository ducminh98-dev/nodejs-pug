const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/',productControllers.get);
router.post('/',productControllers.post);
router.get('/:id',productControllers.detail);
router.delete('/:id',productControllers.delete);
router.put('/:id',productControllers.put);
router.patch('/:id',productControllers.patch)

module.exports = router;