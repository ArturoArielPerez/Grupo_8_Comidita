module.exports = function(sequelize, dataTypes) {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        precio: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        descuento: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        imagenes: {
            type: dataTypes.STRING(100),
            allowNull: false
        }

    }
    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        //Pertenece a..
        Product.belongsTo(models.Categories ,
             { 
                 as: 'category', 
                foreingKey: 'id_categoria'
             })

        Product.belongsToMany(models.Users,{
            as : 'users', // Users.products
            through : 'cart',//tabla intermedia 
            foreignKey : 'product_id',//la clave foranea de este modelo en esa tabla intermedia
            otherKey : 'user_id'//la otra clave foranea del otro modelo en cuestion en esa tabla intermedia
        })
    }
    return Product;
}