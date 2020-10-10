module.exports = (sequelize,dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        idProducto:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        nombre:{
            type: dataTypes.STRING
        },
        precio:{
            type: dataTypes.DECIMAL
        },
        descuento:{
            type: dataTypes.INTEGER
        },
        categoria:{
            type: dataTypes.STRING
        },
        clasificacion:{
            type: dataTypes.STRING
        },
        puntaje:{
            type: dataTypes.DECIMAL
        },
        stock:{
            type: dataTypes.INTEGER
        },
        descripcion:{
            type: dataTypes.STRING
        },
        imagen:{
            type: dataTypes.STRING
        },
    };

    let config = {
        tableName: "Usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias,cols,config)

    return Usuario

}