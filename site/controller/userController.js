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

            db.Usuarios.create({

                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                contraseña: bcrypt.hashSync(req.body.contraseña.trim(), 10),
                avatar: (req.files[0]) ? req.files[0].filename : 'image-not-found.png',
                rol: 'usuario'
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
         
            db.Usuarios.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(user=>{
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }

                if (req.body.recordatorio) {
                    res.cookie('Comidita', req.session.usuario, { maxAge: 1000 * 60 * 2 })
                }

                res.locals.user = req.session.user;
                return res.redirect('/');
            })
            
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
    profile:function(req,res){
        if(req.session.user){
            db.Usuarios.findByPk(req.session.user.id)
            .then(user => {
                res.render('profile',{
                    title:"Perfil de Usuario",
                    css:'profile.css',
                    usuario:user
        
                })
            })
        }
    },
    updateProfile: function(req,res){
        db.Usuarios.update({
            avatar: (req.files[0]) ? req.files[0].filename : req.session.user.avatar
        },
        {
            where:{
                id: req.params.id
            }
        }
        )
        .then(result =>{
            console.log(result);
            return res.redirect('/users/profile');
        })
        .catch(error =>{
            console.log(error);
        })
    },
    delete: function(req,res){
        if(fs.existsSync('public/images'+req.session.user.avatar)&&req.session.user.avatar != "image-not-found.png"){
            fs.unlinkSync('public/images'+req.session.user.avatar)
        }
        req.session.destroy();
        if(req.cookies.userComidita){
            res.cookie('userComidita','',{maxAge:-1});
        }
        db.Usuarios.destroy({
            where:{
                id:req.params.id
            }
        })
        return res.redirect('/')
    }
    

}