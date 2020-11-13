const db = require('../database/models')

const { check, validationResult, body } = require('express-validator');

module.exports = [
    check('categoria')
    .isLength({
        min: 1
    })
    .withMessage('Debes Ingresar la categoraia del producto'),

    check('nombre')
    .isLength({
        min: 1
    })
    .withMessage('Debes Ingresar el nombre del producto'),

    check('precio')
    .isDecimal({
        min: 1
    })
    .withMessage('Ingresar precio de producto'),
    check('descripcion')
    .isLength({
        min:20
    })
    .withMessage('Debes ingresar una descpcion del producto')    
    
]