var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// ----- bogus data for testing ----- //

// var fakeJSONTreeList = { "trees": ["<li>TREE: Kanuka AT: 765 Farm Rd. </li>", "<li>TREE: Kauri AT: 234 Beach Rd. </li>", "<li>TREE: Puriri AT: 23 Raglan Rd. </li>"]}
var fakeJSONTreeList = { "trees": [
                                          {
                                            tree_name: 'rewarewa',
                                            place: 'kelburn',
                                            lat: -42.3,
                                            longd: 172.2,
                                            notes: 'A very tall tree'
                                          }
                                        ]
                                    }

// var dataToPost = {
//       tree_name: tree_name,
//       place: place,
//       lat: lat,
//       longd: longd,
//       notes: notes
//     }



// ----- set up middleware ----- //

app.use(bodyParser.json());  // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});

app.use(express.static('public'));

// ----- routes ----- //

app.get('/', function (req, res) {
  console.log("GET for / received")
});

app.get('/trees', function (req, res) {
  console.log("GET for /trees received")
  // res.send("GET for /trees is OK")
  res.json(fakeJSONTreeList)
});

app.post('/', function (req, res, next) {
  console.log("POST for / received")
  console.log("req.body is: ",req.body)
  res.json(req.body);
  
  // console.log("req.query is: ",req.query)
  // console.log("Req.body is of type: ", (typeof req.body))
});

// ----- set up port on server ----- //

app.listen(3000, function () {
  console.log('ArborArdour app listening on port 3000!');
});

// ----- bogus function for testing ----- //

function sayBoo() {
	return "Boo!"
}

module.exports = {
	sayBoo: sayBoo
}
