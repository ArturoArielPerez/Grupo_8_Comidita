var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('formulario', { title: 'formulario' });
});

module.exports = router;