var url = require('url')


this.list = function(callback){
    var str = 'SELECT * FROM prize_manage'
    CON(str,function(err,row){
        if(err){
            throw Error(err)
        }else{
            callback(row)
            console.log(row)
        }
    })
}
this.prizeAdd = function(name,price,imgUrl,callback){
        var str1 = 'INSERT INTO prize_manage(prize_name,price,prize_class,round,imgUrl) VALUES("'+name+'","'+price+'","三等奖","3","'+imgUrl+'")';
        CON(str1,function(err,result){
            if(err){
                throw Error(err)
            }else{
                callback(result)
            }
        })
}