'use strict'
module.exports = function(sequelize,DataTypes){
    return sequelize.define(
        'employee',
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
            }
        },
        {
            timestamps : false,
            underscored : true,
            freezeTableName : true,
            TableName : 'EmPloyee',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        }
        
    )
}