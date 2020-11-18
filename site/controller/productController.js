 const fs = require('fs');
 const path = require('path');
 const { validationResult, body } = require('express-validator');
 const db = require('../database/models');
 const { brotliDecompress } = require('zlib');

 module.exports = {
     detalle: function(req, res) {
         db.Productos.findByPk(req.params.id, {
                 include: {
                     association: 'categoria'
                 }
             })
             .then(
                 (producto) => {
                     res.render('productDetail', {
                         producto: producto,
                         title: 'Detalle del Producto',
                         css: 'productDetail.css',
                         user: req.session.user
                     });
                 }

             )



     },
     listarProductos: function(req, res) {
         db.Productos.findAll({
                 include: [{
                         association: "categoria"
                     },

                 ]


             })
             .then(productos => {

                 res.render('carta', {
                     productos: productos,
                     title: 'Carta',
                     css: 'carta.css',
                     user: req.session.user
                 });

             })
             .catch(errores => {
                 res.send(errores)
             })
     },
     agregar: function(req, res) {
         db.Categorias.findAll()
             .then(categorias => {
                 res.render('productAdd', {
                     title: 'agregar Producto',
                     css: 'productAdd.css',
                     user: req.session.user,
                     categorias: categorias
                 });
             })
             .catch(errores => {
                 res.send(errores)
             })
     },

     publicar: function(req, res, next) {

         let errors = validationResult(req);
         console.log(req.body)

         if (errors.isEmpty()) {

             db.Productos.create({

                 categoria_id: req.body.categoria,
                 id_usuario: req.session.user.id,
                 nombre: req.body.nombre.trim(),
                 precio: Number(req.body.precio),
                 descripcion: req.body.descripcion.trim(),
                 imagenes: (req.files[0]) ? req.files[0].filename : '',
                 id_usuario: req.session.user.id
             })

             .then(result => {
                     console.log(result);
                     return res.redirect('/products')

                 })
                 .catch(errores => {
                     console.log(errores);
                 })

         } else {

             console.log(errors.errors)
             db.Categorias.findAll()
                 .then(categorias => {
                     res.render('productAdd', {
                         title: 'agregar Producto',
                         css: 'productAdd.css',
                         user: req.session.user,
                         categorias: categorias,
                         errors: errors.mapped()
                     });

                 })
         }

     },
     eliminar: function(req, res) {

         db.Productos.destroy({
                 where: {
                     id: req.params.id
                 }
             })

         res.redirect('/products');
     },
     formularioEdit: function(req, res) {

         db.Productos.findByPk(req.params.id, {
                 include: {
                     association: 'categoria'
                 }
             })
             .then(producto => {
                 res.render('productEdit', {
                     producto: producto,
                     title: 'Editar Producto',
                     css: 'productEdit.css',
                     user: req.session.user
                 });
             })
     },
     editar: function(req, res) {

         db.Productos.update({

            nombre: req.body.nombre,
            precio : Number(req.body.precio),
            categoria : req.body.categoria,
            descripcion : req.body.descripcion.trim(),
            imagenes :  (req.files[0] ? req.files[0].filename : req.session.user.imagenes),
         },
         {
            where : {
                id: req.params.id
            }
         }
         )
         .then(result =>{
            console.log(result);
            res.redirect('/products');
        })
        .catch(error =>{
            console.log(error);
        })
    
     },

     Sucursal: function(req, res) {
         res.render('sucursal', {
             title: 'Sucursales',
             css: 'sucursal.css',
             user: req.session.user
         });
     },
     eventos: function(req, res) {
         res.render('eventos', {
             title: 'Eventos',
             css: 'eventos.css',
             user: req.session.user
         });
     },
     enviarEvento: function(req, res) {

     }
 }