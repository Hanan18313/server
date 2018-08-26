var express = require('express');
var url = require('url');
var ModMember = require('../model/member.js');

this.signIn = function(req,res){
    var code= url.parse(req.url,true).query.code;
    var unionid = '';
    var openid = ''
    WXID(code,function(result){
        unionid = JSON.parse(result).unionid;
        ModMember.signIn(unionid,function(result){ 
            res.send(result)
            res.end();  
        })
    })
};
this.checkSignIn = function(req,res){
    var unionid = url.parse(req.url,true).query.unionid;
    console.log(unionid)
    ModMember.checkSignIn(unionid,function(result){
        res.send(result)
        res.end();
    })
};
this.create_signIn_id = function(req,res){
    var unionid =  url.parse(req.url,true).query.unionid;
    ModMember.create_signIn_id(unionid,function(result){
        res.send(result);
        res.end();
    })
}