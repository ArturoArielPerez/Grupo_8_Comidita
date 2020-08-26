var express = require('express');
var router = express.Router();

const controller = require('../controller/productController');

router.get('/detail', controller.vista);
router.get('/cart', controller.vistaCart);
router.get('/carta', controller.vistaCarta);


module.exports = router;