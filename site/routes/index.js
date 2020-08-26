var express = require('express');
var router = express.Router();

const controller = require('../controller/mainController');

router.get('/', controller.vista);

module.exports = router;
