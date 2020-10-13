const usuarios = require('../data/users');
const productos = require('../data/products');

const db = require('../database/models')
const { validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');


module.exports = {
    register: function(req, res) {
        res.render('register', {
            title: 'Registrarse',
            css: 'register.css',
            user: req.session.user
        });
    },
    processRegister: function(req, res) {
        let errors = validationResult(req);


        if (errors.isEmpty()) {

            db.Users.create({

                nombre: req.body.nombre.trin(),
                apellido: req.body.apellido.trin(),
                email: req.body.email.trin(),
                contraseña: bcrypt.hashSync(req.body.contraseña.trin(), 10),
                avatar: (req.files[0]) ? req.files[0].filesname : 'default.png',
                rol: 'user'
            })

            .then(result => {
                    console.log(result);
                    return res.redirect('/users/login')

                })
                .catch(errores => {
                    console.log(errores);
                })

        } else {
            res.render('register', {
                title: "Registro de usuarios",
                css: 'register.css',
                errors: errors.mapped(),
                old: req.body,
                user: req.session.user
            });
        }
    },
    login: function(req, res) {
        res.render('login', {
            title: 'Login',
            css: 'login.css',
            user: req.session.user
        });
    },
    processLogin: function(req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            usuarios.forEach(usuario => {
                if (usuario.email == req.body.email) {
                    req.session.user = {
                        id: usuario.id,
                        nick: usuario.nombre + ' ' + usuario.apellido,
                        email: usuario.email,
                        avatar: usuario.avatar,
                        rol: usuario.rol
                    }
                }
            })
            if (req.body.recordatorio) {
                res.cookie('Comidita', req.session.usuario, { maxAge: 1000 * 60 * 2 })
            }
            return res.redirect('/');
        } else {
            return res.render('login', {
                title: "Ingreso de Usuarios",
                css: 'login.css',
                errors: errors.mapped(),
                old: req.body,
                user: req.session.user

            })
        }
    },
    logout: function(req, res) {
        req.session.destroy();
        if (req.cookies.userComidita) {
            res.cookie('userComidita', '', { maxAge: -1 })
        }
        res.redirect('/')

    },
    profile: function(req, res) {
        res.render('profile', {
            title: 'Perfil de usuario',
            css: 'profile.css',
            user: req.session.user,
            productos: productos.filter(producto => {
                return producto.categoria != "visited" && producto.categoria != "in-sale"
            })
        })

    }

}