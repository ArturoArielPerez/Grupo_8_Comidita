module.exports = (sequelize, dataTypes)=>{

    let alias = 'Categorias';

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
        imagen:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
       
    }

    let config = {
        tableName: 'categorias',
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
}