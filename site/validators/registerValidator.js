const db = require('../database/models')

const { check, validationResult, body } = require('express-validator');


module.exports = [

    check('nombre')
    .isLength({
        min: 1
    })
    .withMessage('Debes ingresar tu nombre'),

    check('apellido')
    .isLength({
        min: 1
    })
    .withMessage('Debes ingresar tu apellido'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
    .custom(function(value) {

        return db.Usuarios.findOne({
                where: {
                    email: value
                }
            })
            .then(user => {
                if (user) {
                    return Promise.reject('Este email ya esta registrado ')
                }
            })
    }),

    check('contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('contraseña2')
    .custom(function(value, { req }) {
        if (value != req.body.contraseña) {
            return false
        }
        return true
    })
    .withMessage('Las contraseñas no coinciden'),


]