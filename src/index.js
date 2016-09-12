// event handlers for client
var arr // a global - yuck! must change this one day
$(document).ready(function () {
  // get a list of trees and display it

  $.get('/trees', function (data, status) {
    // var arr = data.trees
    arr = data.trees
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

  console.log('arr length is: ', arr.length)
  for (var i = 0; i < arr.length; i++) {
    var mylat = arr[i].lat
    var mylongd = arr[i].longd
    var latLng = new google.maps.LatLng(mylat, mylongd)
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    })
  }

// var marker = new google.maps.Marker({ position: mapProp.center, })
// marker.setMap(map)
// var infowindow = new google.maps.InfoWindow({
//   content: 'Hello World!'
// })
// infowindow.open(map, marker)
// // Zoom to 9 when clicking on marker
// google.maps.event.addListener(marker, 'click', function () {
//   map.setZoom(9)
//   map.setCenter(marker.getPosition())
// })
}

google.maps.event.addDomListener(window, 'load', initialize)

// check for Geolocation support
if (navigator.geolocation) {
  console.log('client-index.js> Geolocation is supported!')
} else {
  console.log('client-index.js> Geolocation is not supported for this Browser/OS version yet.')
}

console.log('client-index.js> YES! Browserified index.js has loaded')
