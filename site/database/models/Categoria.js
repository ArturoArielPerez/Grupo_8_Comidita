module.exports = (sequelize, dataTypes)=>{

    let alias = 'Categorias';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        tableName: 'categorias',
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Productos,{
            as: 'productos',
            foreingKey: 'id_categoria'
        });
    }

    return Categoria;
}