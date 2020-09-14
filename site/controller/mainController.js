module.exports ={
    vista: function(req,res){
        res.render('index',{
            title: 'Comidita',
            css: 'index.css',
            user:req.session.user
        });
    }
}