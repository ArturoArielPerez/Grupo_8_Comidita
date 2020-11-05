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

    check('telefono')
    .isNumeric()
    .withMessage('ingresar un número'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('comentario')
    .isLength({
        min: 20
    })
    .withMessage('Dejar un comentario de al menos 20 caracteres')
]
