var express = require('express');
var router = express.Router();

const controller = require('../controller/userController');

router.get('/register', controller.vista);
router.get('/login', controller.vistaL);
router.get('/form', controller.vistaF);


module.exports = router;