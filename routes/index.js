var express = require('express');
var router = express.Router();

/* GET home page. */
var users=[];
router.get('/newrouter', function(req, res) {
 
 var username="suhas";
 
  res.end("herere");
});

module.exports = router;
