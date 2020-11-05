module.exports = function(sequelize, dataTypes) {

    let alias = "Users"

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATEONLY()
        },
        avatar: {
            type: dataTypes.STRING(45)
        },
        direccion: {
            type: dataTypes.STRING(45)
        },
        ciudad: {
            type: dataTypes.STRING(45)
        },
        provincia: {
            type: dataTypes.STRING(45)
        },
        rol: {
            type: dataTypes.STRING(45)
        }
    }
    let config = {
        tableName: "users",
        timestamps: true,    
        underscored: true

    }
    const User = sequelize.define(alias, cols, config);
    // Movie.belongsTo(models.Generos,{
    //     as : 'genero',
    //     foreignKey : 'genre_id'
    // })
    User.associate = function(models) {
        User.belongsToMany(models.Productos,{
            as : 'products', // Users.products
            through : 'cart',//tabla intermedia 
            foreignKey : 'user_id',//la clave foranea de este modelo en esa tabla intermedia
            otherKey : 'product_id'//la otra clave foranea del otro modelo en cuestion en esa tabla intermedia
        })
    }
    return User;
}