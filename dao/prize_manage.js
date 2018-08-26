'use strict'
module.exports = function(sequelize,DataTypes){
    return sequelize.define(
        'prize_manage',
        {
            id : {
                type : DataTypes.INTEGER(11),
                autoIncreament : true,
                unique : true,
                primaryKey : true,
            },
            prize_name : {
                type : DataTypes.STRING,
            },
            price : {
                type : DataTypes.DECIMAL
            },
            prize_class : {
                type : DataTypes.STRING
            },
            round : {
                type : DataTypes.INTEGER(11)
            },
            isDraw : {
                type : DataTypes.INTEGER(11)
            }
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName : true,
            tableName : 'prize_manage',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        }
    )
}