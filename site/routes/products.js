var express = require('express');
var router = express.Router();

const controller = require('../controller/productController');

router.get('/detail/:id', controller.detalle);
router.get('/cart', controller.vistaCart);
router.get('/carta',controller.listarProductos);
router.get('/create', controller.agregar);


module.exports = router;