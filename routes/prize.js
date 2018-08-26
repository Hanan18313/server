var express = require('express');
var ConPrize = require('../controller/prize.js');

module.exports = function(app){

    app.get('/prize',function(req,res,next){
        ConPrize.list(req,res,next)  
    });
    app.get('/prize/orderByDraw',function(req,res,next){
        ConPrize.orderByDraw(req,res,next)
    })
    app.post('/prize/prizeAdd',function(req,res,next){
        ConPrize.prizeAdd(req,res,next)
    })
    app.post('/prize/uploadImage',function(req,res,next){
        ConPrize.uploadImage(req,res,next)
    })
    app.put('/prize/prizeUpdate',function(req,res,next){
        ConPrize.prizeUpdate(req,res,next)
    })
    app.delete('/prize/prizeDelete',function(req,res,next){
        ConPrize.prizeDelete(req,res,next)
    })
}