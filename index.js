var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-hbs') // handlebars
var session = require('express-session') // for logins
var sqlite = require('sqlite3')

var app = express()

// ----- set up DB ----- //

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/arbor_ardour_db.sqlite'
  },
  useNullAsDefault: true
})

var db = require('./db.js')(knex)

// ----- bogus data for testing ----- //

// var fakeJSONTreeList = { "trees": ["<li>TREE: Kanuka AT: 765 Farm Rd. </li>", "<li>TREE: Kauri AT: 234 Beach Rd. </li>", "<li>TREE: Puriri AT: 23 Raglan Rd. </li>"]}
var fakeJSONTreeList = { 'trees': [
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

// ----- handlebars ----- //
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname + '/views/layout'
}))

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
})

app.use(express.static('public'))

app.use(session({ // for logins
  secret: 'ssshhhhhh! Top secret!',
  saveUninitialized: true,
  resave: true,
  db: knex
}))

// ----- logins ----- //

app.get('/sign-in', function (req, res) {
  res.render('sign-in')
})

app.post('/sign-in', function (req, res) {
  req.session.userId = 7
  res.redirect('/')
})

app.get('/sign-up', function (req, res) {
  res.render('sign-up')
})

app.post('/sign-up', function (req, res) {
  req.session.userId = 8
  res.redirect('/')
})

// Logout endpoint
app.get('/sign-out', function (req, res) {
  // Add logout code here
  req.session.destroy()
  res.redirect('/sign-in')
})

// app.get('/', function (req, res) {
//   res.render('index', {id: req.session.userId})
// })

// ----- routes ----- //

app.get('/', function (req, res) {
  console.log('GET for / received')
})

app.get('/trees', function (req, res) {
  // check if it has a query string, if so then...
  if (Object.keys(req.query).length !== 0) {
    console.log('GET received on /trees with parameters')
    console.log('req.query is: ', req.query)
    // use knex to do 'SELECT * FROM trees WHERE fieldY = paramX' to sqlite DB
    db.findOne('trees', { id: req.query.id }, function (err, tree) {
      console.log('tree is: ', tree)
      res.json({ 'trees': [ tree ]})
    })
  } else {
    console.log('GET received on /trees')
    console.log('req.query is: ', req.query)
    // use knex to do 'SELECT * FROM trees' to sqlite DB
    db.getAll('trees', function (err, trees) {
      console.log('tree', trees)
      res.json({ 'trees': trees })
    })
  }
})

app.get('/trees/:id', function (req, res) {
  console.log('GET received on /trees/:id')
  // use knex to do 'SELECT * FROM trees WHERE id=3' to sqlite DB
  db.findOne('trees', { id: req.params.id }, function (err, tree) {
    console.log(tree)
    res.json({ 'trees': [ tree ]})
  })
})

app.post('/', function (req, res) {
  console.log('POST received on /')
  // create new tree in DB
  console.log('req.body is: ', req.body)
  // use knex to insert specific tree to DB and assign own unique tree ID
  db.add('trees', req.body, function (err, tree) {
    console.log('err is: ', err)
    console.log('tree added to DB: ', tree)
    res.json({ 'trees': [ tree ]})
  })
})

app.get('/faketrees', function (req, res) {
  console.log('GET for /trees received')
  // res.send("GET for /trees is OK")
  res.json(fakeJSONTreeList)
})

app.post('/ping', function (req, res, next) {
  console.log('POST for /ping received')
  console.log('req.body is: ', req.body)
  res.json(req.body)

// console.log("req.query is: ",req.query)
// console.log("Req.body is of type: ", (typeof req.body))
})

// ----- test of handlebars templating ----- //

app.get('/hbstest', function (req, res) {
  res.render('mytest', { name: 'Bob'})
})

// ----- set up port on server ----- //

app.listen(3000, function () {
  console.log('ArborArdour app listening on port 3000!')
})

// ----- bogus function for testing ----- //

function sayBoo () {
  return 'Boo!'
}

module.exports = {
  sayBoo: sayBoo
}
