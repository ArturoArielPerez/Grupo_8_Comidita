const usuarios = require('../data/users');

const {check,validationResult,body} = require('express-validator');
const bcrypt = require('bcrypt')

module.exports = [
    
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
    .custom(function(value){
       let user = usuarios.filter(function(usuario){
           return usuario.email == value
       })

       if(user == false){
           return false
       }else{
           return true
       }
    })
    .withMessage('El usuario no está registrado'),
    
    body('contraseña')
    .custom(function(value,{req}){
        let result = true;
        usuarios.forEach(usuario => {
            if(usuario.email == req.body.email){
                if(!bcrypt.compareSync(value,usuario.contraseña)){
                    result = false
                }
            }
        });
        if (result == false){
            return false
        }else{
            return true
        }
    })
    .withMessage("Contraseña incorrecta"),

    check('recordatorio')
    .isString('on')
    .withMessage('aceptar para mejor experiencia')
]