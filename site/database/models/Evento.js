module.exports = (sequelize, dataTypes)=>{

    let alias = 'Evento';

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
        apellido:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        telefono:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        dia:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        horario: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        comentario:{
            type: dataTypes.STRING(300)
        }
    }

    let config = {
        tableName: 'eventos',
        timestamps: false
    }

    const Evento = sequelize.define(alias, cols, config);

    return Evento;
}