module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuarios';

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
        apellido: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        contraseña: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100)
        },
        rol: {
            type: dataTypes.STRING(100)
        }

    }

    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config);


    return Usuario;
}