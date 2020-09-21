var express = require('express');
var router = express.Router();

const controller = require('../controller/userController');

const registerValidator = require('../validators/registerValidator');
const loginValidator = require('../validators/loginValidator');

const multerUser = require('../middlewares/multerAvatar');
const sessionUserCheck = require('../middlewares/sessionUserCheck');

router.get('/register', controller.register);
router.post('/register',multerUser.any(),registerValidator,controller.processRegister);

router.get('/login',controller.login);
router.post('/login',loginValidator,controller.processLogin);

router.get('/logout', controller.logout);

router.get('/profile',sessionUserCheck,controller.profile);




module.exports = router;