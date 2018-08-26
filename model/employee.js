

this.checkManager = function(openid,callback){
    var str = 'SELECT * FROM employee WHERE open_id = "'+openid+'"'
    CON(str,function(err,result){
        if(err){
            throw Error(err)
        }else{
            callback(result)
        }
    })
}