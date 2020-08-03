const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('productAdd', { title: 'productAdd' });
});





module.exports = router;
