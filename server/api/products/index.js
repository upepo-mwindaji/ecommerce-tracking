'use strict';

var express = require('express');
var controller = require('./products.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/categories', controller.categories);
router.get('/categories/:name', controller.category);
router.get('/:sku', controller.show);
router.post('/', controller.create);
router.put('/:sku', controller.update);
router.patch('/:sku', controller.update);
router.delete('/:sku', controller.destroy);

module.exports = router;
