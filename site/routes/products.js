var express = require('express');
var router = express.Router();


const controller = require('../controller/productController');

const multerProduct = require('../middlewares/multerProduct');

router.get('/carta',controller.listarProductos);
router.get('/detail/:id', controller.detalle);


router.get('/create', controller.agregar);
router.post('/create',multerProduct.any(),controller.publicar);

router.get('/:id/edit', controller.formularioEdit);
router.put('/:id/edit',multerProduct.any(), controller.editar);

router.delete('/:id',controller.eliminar);
router.get('/cart', controller.vistaCart);

router.get('/sucursal', controller.Sucursal);
router.get('/eventos', controller.eventos);



module.exports = router;