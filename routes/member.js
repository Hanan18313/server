var express = require('express');
var router = express.Router();
var ConMember = require('../controller/member.js');


module.exports = function(app){
    app.get('/member/signIn',function(req,res,next){
        ConMember.signIn(req,res,next)
    });
    app.get('/member/checkSignIn',function(req,res,next){
        ConMember.checkSignIn(req,res,next)
    })
    app.get('/member/signIn/create_signIn_id',function(req,res,next){
        ConMember.create_signIn_id(req,res,next)
    })
}