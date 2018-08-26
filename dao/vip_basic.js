'use strict'

module.exports = function(sequelize,DataTypes){
    return sequelize.define(
        'Vip_basic',
        {
            id : {
                type : DataTypes.INTEGER(11),
                autoIncreament : true,
                unique : true,
                primaryKey : true,
            },
            name : {
                type : DataTypes.STRING
            },
            openid : {
                type : DataTypes.STRING
            },
            unionid : {
                type : DataTypes.STRING
            },
            signIn_id : {
                type : DataTypes.INTEGER(11)
            }
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName : true,
            tableName : 'vip_basic',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        }
    )
}