const express = require('express');
const router = express.Router();

const controller = require('../controller/carritoControler');
const sessionUserCheck = require('../middlewares/sessionUserCheck');


router.get('/', sessionUserCheck, controller.vistaCart);

router.post('/agregar/:id', controller.agregar);


module.exports = router;