const fs = require('fs');
const productos = require('../data/products')
const path = require('path');

module.exports ={
    detalle: function(req,res){
        
        let id = req.params.id;
        let producto = productos.filter(producto=>{
            return producto.id == id
        });

        res.render('productDetail', {
            product : producto[0],
            title: 'Detalle del Producto',
            css: 'productDetail.css',
            user:req.session.user
        });
    },
    listarProductos:function(req,res){
        res.render('carta',{
            productos : productos,
            title: 'Carta',
            css: 'carta.css',
            user:req.session.user
        });
    },
    agregar:function(req,res){
    
        res.render('productAdd', {
            title: 'agregar Producto',
            css: 'productAdd.css',
            user:req.session.user
        });
    },
    publicar: function(req,res,next){

        let lasId = 1;
        
        productos.forEach(producto=>{
            if(producto.id > lasId){
                lasId = producto.id
            }
        })
        
        let newProduct ={
            id: lasId+1,
            nombre: req.body.nombre,
            precio:Number(req.body.precio),
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: (req.files[0])?req.files[0].filename:"default-image.png"
        }
        productos.push(newProduct);

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(productos), 'utf-8');

        res.redirect('/products/carta');

    },
    eliminar : function(req,res) {
        let id = req.params.id;
        let producto;

        productos.forEach(product => {
            if(product.id == id){
                producto = productos.indexOf(product);
            }
        });

        productos.splice(producto,1);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productos))

        res.redirect('/products/carta');
    },
    formularioEdit:function(req,res){
        let id = req.params.id;
        let resultado = productos.filter(producto=>{
            return producto.id == id
        });
        res.render('productEdit', {
            producto: resultado[0],
            title: 'Editar Producto',
            css: 'productEdit.css',
            user:req.session.user
        });
    },
    editar:function(req,res){
        let id = req.params.id;
        
        productos.forEach(producto => {
            if(producto.id == id){
                producto.id = Number(id);
                producto.nombre = req.body.nombre.trim();
                producto.precio = Number(req.body.precio);
                producto.categoria = req.body.categoria.trim();
                producto.descripcion = req.body.descripcion.trim();
                producto.imagen = (req.files[0]? req.files[0].filename : producto.imagen);

            }
        });
        productosJSON = JSON.stringify(productos);

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json') , productosJSON);

        res.redirect('/products/carta');
    },
    vistaCart: function(req,res){
        res.render('productCart',{
            title: 'Carrito',
            css: 'productCart.css',
            user:req.session.user
        }
        );
    },
    Sucursal: function(req,res){
        res.render('sucursal', {
            title: 'Sucursales',
            css: 'sucursal.css',
            user:req.session.user
        });
    },
    eventos: function(req,res){
        res.render('eventos', {
            title: 'Eventos',
            css: 'eventos.css',
            user:req.session.user
        });
    }
}