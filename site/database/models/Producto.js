module.exports = (sequelize, dataTypes)=>{

    let alias = 'Productos';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        precio:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        descripcion:{
            type: dataTypes.STRING(300),
            allowNull: false
        },
        imagenes:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_categoria:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
       
    }

    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Categorias,{
            as: 'categorias',
            foreingKey: 'id'
        });
    }

    return Producto;
}