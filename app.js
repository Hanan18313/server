var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var mysql = require('mysql');
var https = require('https');
var multer = require('multer');
var request = require('request');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
global.CONFIG = JSON.parse(fs.readFileSync('./config.json').toString());

var app = express();
var objMulter = multer({dest : 'public/images'})
app.use(objMulter.any());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/index')(app)

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//创建连接池
var Pool = mysql.createPool({
  host : CONFIG.mysql_host,
  user : CONFIG.mysql_user,
  port : CONFIG.mysql_port,
  password : CONFIG.mysql_password,
  database : 'wx_node'
  
})
global.CON = function(sql,callback){
  Pool.getConnection(function(err,conn){
    if(err){
      callback(err)
    }else{
      conn.query(sql,function(err,val,field){
        if(err){
          callback(err)
        }else(
          callback(err,val,field)
        )
      })
    }
  })
};
global.WXID = function(code,callback){
  var appid = "wx238ca91cc7a15764";
  var secret = "655d3bf13a70671966abdd4d2c6be206";
  var infoUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&js_code='+code+'&grant_type=authorization_code';
  request.get(infoUrl,function(err,response,result){
    if(err){
      //throw Error(err)
      callback(err)
    }else{
      callback(result)
    }
  })
}
module.exports = app;
