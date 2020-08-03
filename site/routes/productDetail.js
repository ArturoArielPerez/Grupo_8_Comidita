const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('productDetail', { title: 'productDetail' });
});





module.exports = router;
