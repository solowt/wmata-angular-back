var express = require('express');
var env = require('./secrets');
var request = require('request');
var cors = require('cors');

var app = express();

app.get('/', cors(), function (req, res){
  request("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/"+req.query.code+"?api_key="+env.api_key, function (err, response){
    res.json(response);
  })
})

app.listen(3000, function(){
  console.log("App listening on port 3000");
})
