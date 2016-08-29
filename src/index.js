// event handlers for client

$(document).ready(function () {
  // get a list of trees and display it
  // $.get('/trees', function (data, status) {
  //   var arr = data.trees
  //   var trees_found = ''
  //   for (var i = 0; i < arr.length; i++) {
  //     // trees_found = trees_found + data.trees[i]
  //     trees_found = trees_found + '<li>TREE: ' + data.trees[i].tree_name + ' AT: ' + data.trees[i].place + ' LAT: ' + data.trees[i].lat + ' LONG: ' + data.trees[i].longd + ' NOTES: ' + data.trees[i].notes + '</li>'
  //   }
  //   $('#tree_list ').html(trees_found)
  // })

  // send the data when the button is clicked
  $('#add_button').click(function (e) {
    e.preventDefault()
    var tree_name = $('#tree_name').val()
    var lat = $('#lat').val()
    var longd = $('#longd').val()
    var place = $('#place').val()
    var notes = $('#notes').val()

    var dataToPost = {
      tree_name: tree_name,
      place: place,
      lat: lat,
      longd: longd,
      notes: notes
    }

    $.post('/', dataToPost, function (data, status) {
      console.log('Posted stuff')
      console.log('data', data)
      $('ul').append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat + ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
    })
  })
})

console.log('Hello from a newly Browserified index.js with GET /trees')
