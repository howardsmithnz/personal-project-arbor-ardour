// event handlers for client

$(document).ready(function () {
  // send the data when the button is clicked
  $('#add_button').click(function (e) {
    // e.preventDefault()
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

    $.post('/tree', dataToPost, function (data, status) {
      console.log('client-index.js> POST sent to /tree')
      console.log('client-index.js> POST/tree dataToPost was: ', dataToPost)
      console.log('client-index.js> POST/tree status was: ', status)
      console.log('client-index.js> POST/tree data was: ', data) // this is printing out an HTML page!!!
      // $.get('/', function (data, status) {
      //   console.log('client-index.js> Redirected from POST back to GET/')
      //   console.log('client-index.js> Data: ', data)
      //   console.log('client-index.js> Status: ' , status)
      // })
      $('ul').append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat + ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
      $.get('/', function (data, status) {
        console.log('client-index.js> Redirected from POST back to GET/')
        console.log('client-index.js> GET/ Data: ', data)
        console.log('client-index.js> GET/ Status: ' , status)
      })
    })
  })

  // get a list of trees and display it
  $.get('/trees', function (data, status) {
    var arr = data.trees
    var trees_found = ''
    for (var i = 0; i < arr.length; i++) {
      trees_found = trees_found + '<li>TREE: ' + data.trees[i].tree_name + ' AT: ' + data.trees[i].place + ' LAT: ' + data.trees[i].lat + ' LONG: ' + data.trees[i].longd + ' NOTES: ' + data.trees[i].notes + '</li>'
    }
    $('#tree_list ').html(trees_found)
  })
})

function initialize () {
  var mapProp = {
    center: new google.maps.LatLng(-41.2959077, 174.835732),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
  var marker = new google.maps.Marker({ position: mapProp.center, })
  marker.setMap(map)
  var infowindow = new google.maps.InfoWindow({
    content: 'Hello World!'
  })
  infowindow.open(map, marker)
  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(9)
    map.setCenter(marker.getPosition())
  })
}

google.maps.event.addDomListener(window, 'load', initialize)

// check for Geolocation support
if (navigator.geolocation) {
  console.log('client-index.js> Geolocation is supported!')
} else {
  console.log('client-index.js> Geolocation is not supported for this Browser/OS version yet.')
}

console.log('client-index.js> YES! Browserified index.js has loaded')
