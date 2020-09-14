const usuarios = require('../data/users');

module.exports = function(req,res,next){
    if(req.cookies.userComidita){
        req.session.user = req.cookies.userComidita;
        next()
    }else{
        next()
    }
}