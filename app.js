var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send(template());
  console.log("GET for / received")
});

app.post('/', function (req, res) {
  res.json({ user: 'tobi' });
  // TO DO: echo back the input values from the user as a JSON object
  // res.send('Got a POST request');
  console.log("POST for / received")
  console.log("Req is: ", req)
});

app.listen(3000, function () {
  console.log('Tree Tracker app listening on port 3000!');
});