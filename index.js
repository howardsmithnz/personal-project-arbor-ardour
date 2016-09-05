var fs = require('fs')
var https = require('https')
var express = require('express')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars') // handlebars
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
  console.log('Time: %d', Date.now())
  next()
})
// ----- set up static files ----- //
app.use(express.static('public'))

// ----- routes ----- //

app.get('/', function (req, res) {
  console.log('GET received on / ')
  console.log('will render handlebars home.hbs')
  res.render('home', { message: 'this is the Handlebars version'})
})

app.get('/add', function (req, res) {
  console.log('GET received on /add')
  console.log('will render handlebars add.hbs')
  res.render('add', { message: 'this is the add partial'})
})
app.get('/show', function (req, res) {
  console.log('GET received on /show')
  console.log('will render handlebars show.hbs')
  res.render('show', { message: 'this is the show partial'})
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
      console.log('trees is: ', trees)
      res.json({ 'trees': trees })
    })
  }
})

app.get('/trees/:id', function (req, res) { // not currently used
  console.log('GET received on /trees/:id')
  // use knex to do 'SELECT * FROM trees WHERE id=3' to sqlite DB
  db.findOne('trees', { id: req.params.id }, function (err, tree) {
    console.log(tree)
    res.json({ 'trees': [ tree ]})
  })
})

app.post('/tree', function (req, res) {
  console.log('POST received on /tree')
  // create new tree in DB
  console.log('req.body is: ', req.body)
  // use knex to insert specific tree to DB and assign own unique tree ID
  db.add('trees', req.body, function (err, tree) {
    console.log('err is: ', err)
    console.log('tree added to DB: ', tree)
  // res.json({ 'trees': [ tree ]})
  })
  res.redirect('back')
// res.send('I just added a tree')
})

// ----- testing routes ----- //

app.post('/ping', function (req, res, next) {
  console.log('POST for /ping received')
  console.log('req.body is: ', req.body)
  res.json(req.body)
// console.log("req.query is: ",req.query)
// console.log("Req.body is of type: ", (typeof req.body))
})

app.get('/test', function (req, res) {
  console.log('GET received on /test')
  res.render('test', { message: 'this is the test'})
})

app.get('/https_test', function (req, res) {
  console.log('GET recived on /https_test')
  res.header('Content-type', 'text/html')
  return res.end('<h1>Hello, Secure World!</h1>')
})

// ----- set up port on server ----- //

// app.listen(3000, function () {
//   console.log('abarada app listening on port 3000!')
// })

// ----- HTTPS server ----- //

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(55555, function () {
  console.log('SECURE abarada app listening on port 55555')
})

// ----- bogus function for testing ----- //

function sayBoo () {
  return 'Boo!'
}

// this is a comment

module.exports = {
  sayBoo: sayBoo,
}
