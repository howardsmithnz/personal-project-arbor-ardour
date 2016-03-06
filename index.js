var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());  // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// app.use(function (req, res, next) {
//   console.log('Time: %d', Date.now());
//   next();
// });

app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send(template());
  // var user_id = req.params.id
  // console.log("GET for / received")
  // console.log("User ID is: ", user_id)
  // res.send(user_id)
});

app.post('/', function (req, res, next) {
  // TO DO: echo back the input values from the user as a JSON object
  res.json(req.body);
  // res.se
  console.log("POST for / received")
  console.log("req.body is: ",req.body)
  // console.log("req.query is: ",req.query)
  // console.log("Req.body is of type: ", (typeof req.body))
});

app.listen(3000, function () {
  console.log('ArborArdour app listening on port 3000!');
});

function sayBoo() {
	return "Boo!"
}

module.exports = {
	sayBoo: sayBoo
}