var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs("http://127.0.0.1:27017/test", []);
db.on('connect', function () {
	res.end('database connected'); 
})

console.log('heree');
db.on('error', function (err) {
	console.log('database error', err);
})
//db.tbl_user.insert({"name":"hera"});

/* GET users listing. */
router.post('/', function(req, res) {
	console.log(req.body.username);
	var u=req.body.username;
   res.send(u);
});

module.exports = router;
