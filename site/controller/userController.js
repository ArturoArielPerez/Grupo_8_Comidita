module.exports = {
    vista: function(req, res) {
        res.render('register',{
            title: 'Registrarse',
            css: 'register.css'
        });
    },
    vistaL: function(req, res) {
        res.render('login', {
            title: 'Login',
            css: 'login.css'
        });
    },
    
}