var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('sucursal', { title: 'Sucursal' });
});

module.exports = router;