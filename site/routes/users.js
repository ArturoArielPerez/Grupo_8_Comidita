var express = require('express');
var router = express.Router();

const controller = require('../controller/userController');

const registerValidator = require('../validators/registerValidator');
const loginValidator = require('../validators/loginValidator');

const multerAvatar = require('../middlewares/multerAvatar');
const sessionUserCheck = require('../middlewares/sessionUserCheck');

router.get('/register', controller.register);
router.post('/register',multerAvatar.any(),registerValidator,controller.processRegister);

router.get('/login',controller.login);
router.post('/login',loginValidator,controller.processLogin);

router.get('/logout', controller.logout);

router.get('/profile',sessionUserCheck,controller.profile);
router.put('/updateProfile/:id', multerAvatar.any(), controller.updateProfile);

router.delete('/delete/:id', controller.delete),



module.exports = router;