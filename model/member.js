var express = require('express');
var mysql = require('mysql')
this.signIn = function(unionid,callback){
    var signInStr = 'SELECT * FROM vip_basic WHERE unionid = "'+unionid+'"'
    CON(signInStr,function(err,result){
        if(err){
            throw Error(err)
        }else{
            callback(result);
        }
    })
};
//检查签到状态
this.checkSignIn = function(unionid,callback){
    var checkSignInStr = 'SELECT signIn_id FROM vip_basic WHERE unionid = "'+unionid+'"'
    CON(checkSignInStr,function(err,result){
        if(err){
            LOG(err)
        }else{
            callback(result)
        }
    })
};
//签到分配signIn_id
this.create_signIn_id = function(unionid,callback){
    var create_signIn_idStr = 'SELECT MAX(signIn_id) FROM vip_basic'
    CON(create_signIn_idStr,function(err,result){
        if(err){
            LOG(err)
        }else{
            if(result[0]['MAX(signIn_id)'] == null){
                let signIn_id = 1
                var new_signIn_id = 'UPDATE vip_basic SET signIn_id = "'+signIn_id+'" WHERE unionid = "'+unionid+'"';
                CON(new_signIn_id,function(err,result){
                    if(err){
                        LOG(err)
                    }
                })
            }else{
                let signIn_id = result[0]['MAX(signIn_id)'] + 1
                let new_signIn_id = 'UPDATE vip_basic SET signIn_id = "'+signIn_id+'"WHERE unionid = "'+unionid+'"';
                CON(new_signIn_id,function(err,result){
                    if(err){
                        LOG(err)
                    }
                })
            }
            let signIn_id = 'SELECT signIn_id FROM vip_basic WHERE unionid = "'+unionid+'"';
            CON(signIn_id,function(err,result){
                if(err){
                    LOG(err)
                }else{
                    callback(result)
                }
            })
        }
    })
}