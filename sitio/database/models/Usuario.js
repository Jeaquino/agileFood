module.exports = (sequelize,dataTypes) => {
    let alias = "usuarios";
    let cols = {
        idUsuario:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremet: true,
            allowNull:false,
        },
        nombre:{
            type: dataTypes.STRING(100),
            allowNull:false,
        },
        apellido:{
            type: dataTypes.STRING(100),
            allowNull:false,
        },
        dni:{
            type: dataTypes.INTEGER(8)
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        constraseña:{
            type: dataTypes.STRING(100),
        },
        idDomicilio:{
            type: dataTypes.INTEGER
        },
        categoria:{
            type: dataTypes.STRING(100)
        },
        imagen:{
            type: dataTypes.STRING(100)
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias,cols,config)

    Usuario.associate = function(models) {

        Usuario.belongsToMany(models.productos, {
            as: 'producto',
            through: "usuario_producto",
            foreignKey: "idUsuario",
            otherKey: "idProducto",
            timestamps: false
        })

        Usuario.hasMany(models.domicilios, {
            as: "domicilio",
            ForeignKey: "idUsuario",
        })
    }
        

    return Usuario

}