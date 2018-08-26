var express = require('express')
var ConEmployee = require('../controller/employee.js');

module.exports = function(app){
    app.get('/employee/checkManager',function(req,res,next){
        ConEmployee.checkManager(req,res,next)
    })
}