module.exports = function(sequelize, dataTypes) {
    let alias = "admin";
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
        imagen: {
            type: dataTypes.STRING(45),
            allowNull: false
        }


    }
    let config = {
        tableName: "admin",
        timestamps: false
    }

    const Admin = sequelize.define(alias, cols, config);


    return Admin;
}