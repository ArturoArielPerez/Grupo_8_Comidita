const fs = require('fs');
const productos = require('../data/products.json')
const path = require('path');

module.exports ={
    detalle: function(req,res){
        
        let id = req.params.id;
        let producto = productos.filter(producto=>{
            return producto.id == id
        });

        res.render('productDetail', {product : producto[0]});
    },
    vistaCart: function(req,res){
        res.render('productCart');
    },
    listarProductos:function(req,res){
        res.render('carta',{productos : productos});
    },
    agregar:function(req,res){
        let product;
        
        if(req.query.product){
            producto = req.query.producto
        }
        res.render('productAdd', {product : productos});
}


}