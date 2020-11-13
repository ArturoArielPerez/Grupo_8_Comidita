//========= MODULOS =============== //
const express = require('express');
const router = express.Router();

//========= CONTROLADORES =========== //
const controller = require('../controller/productController');

// ============ MIDDLEWARES =========//

const sessionUserCheck = require('../middlewares/sessionUserCheck');
const multerProduct = require('../middlewares/multerProduct');

const createProductValidator = require('../validators/createProductValidator');
const updateProductValidator = require('../validators/updateProductValidator');
const eventoValidator = require('../validators/eventoValidator');

// ============= RUTAS========== //
router.get('/', controller.listarProductos);
router.get('/detail/:id', controller.detalle);

router.get('/create', sessionUserCheck, controller.agregar);
router.post('/create', multerProduct.any(), sessionUserCheck, createProductValidator, controller.publicar);

router.get('/:id/edit', sessionUserCheck, controller.formularioEdit);
router.put('/:id/edit', multerProduct.any(), sessionUserCheck, updateProductValidator, controller.editar);

router.delete('/:id', sessionUserCheck, controller.eliminar);
router.get('/cart', sessionUserCheck, controller.vistaCart);

router.get('/sucursal', controller.Sucursal);

router.get('/eventos', controller.eventos);
router.post('/eventos', eventoValidator, controller.enviarEvento);


module.exports = router;