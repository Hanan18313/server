var express = require('express');
var url = require('url');
var Promise = require('promise');
var fs = require('fs');
var Path = require('path');
var ModPrize = require('../model/prize.js');

this.list = function(req,res){
    ModPrize.list(function(result){
        var len = result.length
        if(len >= 0){
            res.send(result);
            res.end();
        }
    })
};
//按抽奖排序
this.orderByDraw = function(req,res){
    ModPrize.orderByDraw(function(result){

    })
};
//添加奖品
this.prizeAdd = function(req,res){
    var query = req.body.value;
    var name = query.prize_name;
    var price = query.price;
    var number = query.numbers;
    var imgUrl = req.body.connImgUrl
    if(number == 1){
        ModPrize.prizeAdd(name,price,imgUrl,function(result){
            console.log(result)
        })
    }else if(number > 1){
        var resultArr = [];
        new Promise((resolve,reject) => {
            resolve()
        }).then(() =>{
            for(let i = 0; i < number; i++){
                ModPrize.prizeAdd(name,price,imgUrl,function(result){
                    resultArr.push(result.insertId)
                    console.log(result)
                })
            }
        }).then(() => {
            console.log('111')
        })
    }
};
//uploadImage
this.uploadImage = function(req,res){
        var findPath= String(req.files[0].destination).match(/images/g) + '/' + req.files[0].filename + Path.parse(req.files[0].originalname).ext;
        var filePath = req.files[0].destination + '/' + req.files[0].filename + Path.parse(req.files[0].originalname).ext;
        fs.rename(req.files[0].path,filePath,function(err,data){
            if(err){
                throw Error(err)
            }else{
                res.send(findPath);
            }
    })
}
//删除奖品
this.prizeDelete = function(req,res){
    ModPrize.prizeDelete(function(result){

    })
};
//update
this.prizeUpdate = function(req,res){
    ModPrize.prizeUpdate(function(result){

    })
}