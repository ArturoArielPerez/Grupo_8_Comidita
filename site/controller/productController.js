module.exports ={
    vista: function(req,res){
        res.render('productDetail');
    },
    vistaCart: function(req,res){
        res.render('productCart');
    },
    vistaCarta:function(req,res){
        res.render('productAdd');
    }
}