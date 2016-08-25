var test = require('tape')
var app = require('../index.js')

// var sayBoo = 
// arrange: fakeDate, expectedResults

test('simple test', function (t) {
  t.plan(3)
  // action: call the function and assign to 'actualSmthng'
  var boo = app.sayBoo()

  // assert: test if actual equals expected
  t.ok(1, "I'm OK")
  t.equal(1, 1, "It's 1!")
  t.equal(boo, 'Boo!', 'These both should say Boo!')

  t.end()
// t.timeoutAfter(2000)
})

test.onFinish(function () {
  console.log('All done')
})
