(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      // trees_found = trees_found + data.trees[i]
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBldmVudCBoYW5kbGVycyBmb3IgY2xpZW50XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gc2VuZCB0aGUgZGF0YSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAkKCcjYWRkX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRyZWVfbmFtZSA9ICQoJyN0cmVlX25hbWUnKS52YWwoKVxuICAgIHZhciBsYXQgPSAkKCcjbGF0JykudmFsKClcbiAgICB2YXIgbG9uZ2QgPSAkKCcjbG9uZ2QnKS52YWwoKVxuICAgIHZhciBwbGFjZSA9ICQoJyNwbGFjZScpLnZhbCgpXG4gICAgdmFyIG5vdGVzID0gJCgnI25vdGVzJykudmFsKClcblxuICAgIHZhciBkYXRhVG9Qb3N0ID0ge1xuICAgICAgdHJlZV9uYW1lOiB0cmVlX25hbWUsXG4gICAgICBwbGFjZTogcGxhY2UsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxvbmdkOiBsb25nZCxcbiAgICAgIG5vdGVzOiBub3Rlc1xuICAgIH1cblxuICAgICQucG9zdCgnL3RyZWUnLCBkYXRhVG9Qb3N0LCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBQT1NUIHNlbnQgdG8gL3RyZWUnKVxuICAgICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gUE9TVC90cmVlIGRhdGFUb1Bvc3Qgd2FzOiAnLCBkYXRhVG9Qb3N0KVxuICAgICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gUE9TVC90cmVlIHN0YXR1cyB3YXM6ICcsIHN0YXR1cylcbiAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IFBPU1QvdHJlZSBkYXRhIHdhczogJywgZGF0YSkgLy8gdGhpcyBpcyBwcmludGluZyBvdXQgYW4gSFRNTCBwYWdlISEhXG4gICAgICAvLyAkLmdldCgnLycsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gUmVkaXJlY3RlZCBmcm9tIFBPU1QgYmFjayB0byBHRVQvJylcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gRGF0YTogJywgZGF0YSlcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gU3RhdHVzOiAnICwgc3RhdHVzKVxuICAgICAgLy8gfSlcbiAgICAgICQoJ3VsJykuYXBwZW5kKCc8bGk+VFJFRTogJyArIHRyZWVfbmFtZSArICcgQVQ6ICcgKyBwbGFjZSArICcgTEFUOiAnICsgbGF0ICsgJyBMT05HOiAnICsgbG9uZ2QgKyAnIE5PVEVTOiAnICsgbm90ZXMgKyAnPC9saT4nKVxuICAgICAgJC5nZXQoJy8nLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IFJlZGlyZWN0ZWQgZnJvbSBQT1NUIGJhY2sgdG8gR0VULycpXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IEdFVC8gRGF0YTogJywgZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gR0VULyBTdGF0dXM6ICcgLCBzdGF0dXMpXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gZ2V0IGEgbGlzdCBvZiB0cmVlcyBhbmQgZGlzcGxheSBpdFxuICAkLmdldCgnL3RyZWVzJywgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIHZhciBhcnIgPSBkYXRhLnRyZWVzXG4gICAgdmFyIHRyZWVzX2ZvdW5kID0gJydcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gdHJlZXNfZm91bmQgPSB0cmVlc19mb3VuZCArIGRhdGEudHJlZXNbaV1cbiAgICAgIHRyZWVzX2ZvdW5kID0gdHJlZXNfZm91bmQgKyAnPGxpPlRSRUU6ICcgKyBkYXRhLnRyZWVzW2ldLnRyZWVfbmFtZSArICcgQVQ6ICcgKyBkYXRhLnRyZWVzW2ldLnBsYWNlICsgJyBMQVQ6ICcgKyBkYXRhLnRyZWVzW2ldLmxhdCArICcgTE9ORzogJyArIGRhdGEudHJlZXNbaV0ubG9uZ2QgKyAnIE5PVEVTOiAnICsgZGF0YS50cmVlc1tpXS5ub3RlcyArICc8L2xpPidcbiAgICB9XG4gICAgJCgnI3RyZWVfbGlzdCAnKS5odG1sKHRyZWVzX2ZvdW5kKVxuICB9KVxufSlcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSAoKSB7XG4gIHZhciBtYXBQcm9wID0ge1xuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtNDEuMjk1OTA3NywgMTc0LjgzNTczMiksXG4gICAgem9vbTogMTAsXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICB9XG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29nbGVNYXAnKSwgbWFwUHJvcClcbiAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogbWFwUHJvcC5jZW50ZXIsIH0pXG4gIG1hcmtlci5zZXRNYXAobWFwKVxuICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICBjb250ZW50OiAnSGVsbG8gV29ybGQhJ1xuICB9KVxuICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpXG4gIC8vIFpvb20gdG8gOSB3aGVuIGNsaWNraW5nIG9uIG1hcmtlclxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXAuc2V0Wm9vbSg5KVxuICAgIG1hcC5zZXRDZW50ZXIobWFya2VyLmdldFBvc2l0aW9uKCkpXG4gIH0pXG59XG5cbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0aWFsaXplKVxuXG4vLyBjaGVjayBmb3IgR2VvbG9jYXRpb24gc3VwcG9ydFxuaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBHZW9sb2NhdGlvbiBpcyBzdXBwb3J0ZWQhJylcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IEdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgQnJvd3Nlci9PUyB2ZXJzaW9uIHlldC4nKVxufVxuXG5jb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBZRVMhIEJyb3dzZXJpZmllZCBpbmRleC5qcyBoYXMgbG9hZGVkJylcbiJdfQ==
