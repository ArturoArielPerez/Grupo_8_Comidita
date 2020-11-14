 const fs = require('fs');
 const productos = require('../data/products')
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
                         product: producto,
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
         let id = req.params.id;
         let producto;
         db.Productos.destroy({
                 where: {
                     id: req.params.id
                 }
             })
             /* productos.forEach(product => {
                 if (product.id == id) {
                     producto = productos.indexOf(product);
                 }
             }); */

         /* productos.splice(producto, 1); */

         /* fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos)) */

         res.redirect('/products');
     },
     formularioEdit: function(req, res) {

         db.Productos.dinsByPk(req.params.id, {
                 include: {
                     association: 'categoria'
                 }
             })
             .then(producto => {
                 res.render('productEdit', {
                     producto: resultado[0],
                     title: 'Editar Producto',
                     css: 'productEdit.css',
                     user: req.session.user
                 });
             })
             /*  */
         let id = req.params.id;
         let resultado = productos.filter(producto => {
             return producto.id == id
         });
         res.render('productEdit', {
             producto: resultado[0],
             title: 'Editar Producto',
             css: 'productEdit.css',
             user: req.session.user
         });
     },
     editar: function(req, res) {
         let id = req.params.id;

         productos.forEach(producto => {
             if (producto.id == id) {
                 producto.id = Number(id);
                 producto.nombre = req.body.nombre.trim();
                 producto.precio = Number(req.body.precio);
                 producto.categoria = req.body.categoria,
                     producto.descripcion = req.body.descripcion.trim();
                 producto.imagen = (req.files[0] ? req.files[0].filename : producto.imagen);

             }
         });
         productosJSON = JSON.stringify(productos);

         fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), productosJSON);

         res.redirect('/products/carta');
     },
     vistaCart: function(req, res) {
         let categoria = db.Categorias.findAll({
             where: {
                 id: 1
             }
         })


         /* Promise.all([pelicula, generos, actores])
             .then(([pelicula, generos, actores]) => {

                 res.render('moviesEdit', {
                     actores: actores,
                     generos: generos,
                     pelicula: pelicula,
                     estreno: moment(pelicula.release_date).format('YYYY-MM-DD')
                 })

             }) */


         res.render('productCart', {
             title: 'Carrito',
             css: 'productCart.css',
             user: req.session.user
         });


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