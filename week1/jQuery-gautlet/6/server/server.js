"use strict";
// trying to start this file but something's not working?
// try npm install first

var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var students = [{
  "id" : 1,
  "name" : "Item 1"
}, {
  "id" : 2,
  "name" : "Item 2"
}, {
  "id" : 3,
  "name" : "Item 3"
}, {
  "id": 4,
  "name" : "Item 4"
}];

app.get('/items', function(req, res){
  res.json(students);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
