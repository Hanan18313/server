var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// module.exports = router;
module.exports = function(app){

  require('./member')(app);
  require('./prize')(app);
  require('./employee')(app)
}
