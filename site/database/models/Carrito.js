module.exports = (sequelize, dataTypes)=>{

    let alias = 'Carrito';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        cantidad:{
            type: dataTypes.INTEGER(11)
        },
        fecha:{
            type: dataTypes.INTEGER(11),
        },
        total:{
            type: dataTypes.DATE()
        }
       
    }

    let config = {
        tableName: 'carrito',
        timestamps: false
    }

    const Carrito = sequelize.define(alias, cols, config);

    return Carrito;
}