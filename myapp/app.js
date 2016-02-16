var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Enter your tree data below...in a form or something...\nTREE: Rimu AT: 123 XYZ St.\nTREE: Totara AT: 456 ABC Rd.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});