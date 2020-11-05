const db = require('../database/models')

const { check, validationResult, body } = require('express-validator');

module.exports = [
    check('nombre')
    .isLength({
        min: 5
    })
    .withMessage('El nombre debe tener al menos 5 caracteres'),

    check('precio')
    .isDecimal({
        min: 1
    })
    .withMessage('Debe ingresar un número'),
    check('descripcion')
    .isLength({
        min:20
    })
    .withMessage('Debes ingresar una descpcion del producto')
]