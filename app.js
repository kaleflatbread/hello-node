// run 'node app.js' in terminal to start running on port 3000
var express = require('express');
var app = express();
var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension

app.get('/', function(req, res) {
  // res.send('Hello World!');
  res.send('The area of a square with a width of 4 is ' + square.area(4));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

// console.log('The area of a square with a width of 4 is ' + square.area(4));
