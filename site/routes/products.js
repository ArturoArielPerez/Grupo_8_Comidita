var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'public', 'images'))
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  let upload = multer({ storage: storage }) 

const controller = require('../controller/productController');

router.get('/carta',controller.listarProductos);
router.get('/detail/:id', controller.detalle);


router.get('/create', controller.agregar);
router.post('/create',upload.any(),controller.publicar);

router.get('/:id/edit', controller.formularioEdit);
router.put('/:id/edit',upload.any(), controller.editar);

router.delete('/:id',controller.eliminar);
router.get('/cart', controller.vistaCart);



module.exports = router;