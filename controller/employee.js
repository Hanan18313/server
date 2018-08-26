var url = require('url');
var ModEmployee = require('../model/employee.js');

this.checkManager = function(req,res){
    var openid = url.parse(req.url,true).query.openid
    ModEmployee.checkManager(openid,function(result){
        res.send(result);
        res.end();
    })
}