var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').createServer(app);
var urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log(__dirname);
app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index" );
})




var io = require('socket.io')(http);

app.get('/chat', function (req, res) {
   res.sendFile(__dirname + "/view/chat.html" );
})


io.on('connection', function(){
  console.log('a user connected');
});



app.post('/listuser', urlencodedParser,function (req, res) {
   
  res.end("insert hereree");
 
})  

var server = app.listen(3000, function () {
  console.log("Example app listening at123");
})

var databaseUrl = "localhost:27017/test"; // "username:password@example.com/mydb"
var collections = ["tbl_user", "test"]
var db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
	console.log('database error', err)
})
 
db.on('connect', function () {
	console.log('database connected')
})

db.tbl_user.insert({"name":"shera"});





db.tbl_user.find({ "name" : { "$exists" : true } },function(err, users) {
  if( err || !users) console.log("No shera users found");
  else users.forEach( function(sherauser) {
	
   // console.log(sherauser.name);
	
  } );
});

 db.tbl_user.find().count(function(err, count) {
    // console.log(count+"counts");
        db.close();
      })
	  

