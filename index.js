var fs = require('fs')
var https = require('https')
var express = require('express')
var bodyParser = require('body-parser') // to extract data from the request body
var exphbs = require('express-handlebars') // handlebars templating
var sqlite = require('sqlite3')

var app = express()

// ----- set up DB ----- //

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/abarada_db.sqlite'
  },
  useNullAsDefault: true
})

var db = require('./db.js')(knex)

// ----- set up middleware ----- //

// ----- handlebars ----- //
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    list: function () {
      return 'LIST'
    }
  }
}))
app.set('view engine', '.hbs')
// ----- body parser to read the content of a request body ----- //
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
// ----- timestamp ----- //
app.use(function (req, res, next) {
  var d = new Date()
  console.log('server-index.js> Time: %s', d)
  next()
})
// ----- set up static files ----- //
app.use(express.static('public'))
// ----- error handling ----- //
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// ----- routes ----- //

app.get('/', function (req, res) {
  console.log('server-index.js> GET received on / ')
  console.log('server-index.js> will render handlebars home.hbs')
  console.log('server-index.js> req.query is: ', req.query)
  var message = 'Please make your choice below.'
  if (req.query.message) {
    message = req.query.message
    console.log('server-index.js> req.query.message is: ', req.query.message)
  }
  res.render('home', { message: message})
})

app.get('/add', function (req, res) {
  console.log('server-index.js> GET received on /add')
  console.log('server-index.js> will render handlebars add.hbs')
  res.render('add', { message: 'Please choose a type of tree, and add a place, and notes.'})
})
app.get('/show', function (req, res) {
  console.log('server-index.js> GET received on /show')
  console.log('server-index.js> will render handlebars show.hbs')
  res.render('show', { message: 'I found these trees...'})
})

app.get('/trees', function (req, res) {
  // check if it has a query string, if so then...
  if (Object.keys(req.query).length !== 0) {
    console.log('server-index.js> GET received on /trees with parameters')
    console.log('server-index.js> req.query is: ', req.query)
    // use knex to do 'SELECT * FROM trees WHERE fieldY = paramX' to sqlite DB
    db.findOne('trees', { id: req.query.id }, function (err, tree) {
      console.log('server-index.js> tree is: ', tree)
      res.json({ 'trees': [ tree ]})
    })
  } else {
    console.log('server-index.js> GET received on /trees')
    console.log('server-index.js> req.query is: ', req.query)
    // use knex to do 'SELECT * FROM trees' to sqlite DB
    db.getAll('trees', function (err, trees) {
      console.log('server-index.js> trees is: ', trees)
      res.json({ 'trees': trees })
    })
  }
})

app.get('/trees/:id', function (req, res) { // not currently used
  console.log('server-index.js> GET received on /trees/:id')
  // use knex to do 'SELECT * FROM trees WHERE id=3' to sqlite DB
  db.findOne('trees', { id: req.params.id }, function (err, tree) {
    console.log('server-index.js> GET/trees/:id tree is: ', tree)
    res.json({ 'trees': [ tree ]})
  })
})

app.post('/tree', function (req, res) {
  console.log('server-index.js> POST received on /tree')
  // create new tree in DB
  console.log('server-index.js> req is: ', req)
  console.log('server-index.js> req.body is: ', req.body)
  console.log('server-index.js> req.query is: ', req.query)
  // use knex to insert specific tree to DB and assign own unique tree ID
  db.add('trees', req.body, function (err, tree) {
    console.log('server-index.js> err is: ', err)
    console.log('server-index.js> tree added to DB: ', tree)
  // res.json({ 'trees': [ tree ]})
  })
  res.redirect('/?message=Your tree was added.')
// res.render('/', function () { console.log('Your tree has been added.')})
})

// ----- testing routes ----- //

app.post('/ping', function (req, res, next) {
  console.log('server-index.js> POST for /ping received')
  console.log('server-index.js> req.body is: ', req.body)
  res.json(req.body)
// console.log("req.query is: ",req.query)
// console.log("Req.body is of type: ", (typeof req.body))
})

app.get('/test', function (req, res) {
  console.log('server-index.js> GET received on /test')
  res.render('test', { message: 'this is the test'})
})

app.get('/https_test', function (req, res) {
  console.log('server-index.js> GET recived on /https_test')
  res.header('Content-type', 'text/html')
  return res.end('<h1>Hello, Secure World!</h1>')
})

// ----- set up port on server ----- //

// app.listen(3000, function () {
//   console.log('abarada app listening on port 3000!')
// })

// ----- HTTPS server ----- //

https.createServer({
  key: fs.readFileSync(__dirname + '/key.pem'),
  cert: fs.readFileSync(__dirname + '/cert.pem')
}, app).listen(5000, function () {
  console.log('server-index.js> SECURE abarada app listening on port 55555')
})

// ----- bogus function for testing ----- //

function sayBoo () {
  return 'Boo!'
}

// this is a comment

module.exports = {
  sayBoo: sayBoo,
}
