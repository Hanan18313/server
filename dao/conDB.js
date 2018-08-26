'use strict'
var fs = require('fs');
var Sequelize = require('sequelize')

exports.Sequelize = function(){
    var config = JSON.parse(fs.readdirSync('../config.json').toString())
    return new Sequelize(
        'wx_node',
        config.mysql_user,
        config.mysql_password,
        {
            'dialect' : "mysql",
            'host' : config.mysql_host,
            'port' : '3306',
            'define' : {
                'underscored' : true
            }
        }
        
    )
}
