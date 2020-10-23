module.exports = (sequelize, dataTypes)=>{

    let alias = 'Sucursal';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        direcccion:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        localidad:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
       
    }

    let config = {
        tableName: 'sucursales',
        timestamps: false
    }

    const Sucursal = sequelize.define(alias, cols, config);

    return Sucursal;
}