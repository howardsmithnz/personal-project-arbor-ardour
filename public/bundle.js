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
      console.log('POST sent to /tree')
      console.log('POST/tree dataToPost was: ', dataToPost)
      console.log('POST/tree status was: ', status)
      console.log('POST/tree data was: ', data) // this is printing out an HTML page!!!
      // $.get('/', function (data, status) {
      //   console.log('Redirected from POST back to GET/')
      //   console.log('Data: ', data)
      //   console.log('Status: ' , status)
      // })
      $('ul').append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat + ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
      $.get('/', function (data, status) {
        console.log('Redirected from POST back to GET/')
        console.log('GET/ Data: ', data)
        console.log('GET/ Status: ' , status)
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
  console.log('Geolocation is supported!')
} else {
  console.log('Geolocation is not supported for this Browser/OS version yet.')
}

console.log('YES! Browserified index.js has loaded')

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBldmVudCBoYW5kbGVycyBmb3IgY2xpZW50XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gc2VuZCB0aGUgZGF0YSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAkKCcjYWRkX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRyZWVfbmFtZSA9ICQoJyN0cmVlX25hbWUnKS52YWwoKVxuICAgIHZhciBsYXQgPSAkKCcjbGF0JykudmFsKClcbiAgICB2YXIgbG9uZ2QgPSAkKCcjbG9uZ2QnKS52YWwoKVxuICAgIHZhciBwbGFjZSA9ICQoJyNwbGFjZScpLnZhbCgpXG4gICAgdmFyIG5vdGVzID0gJCgnI25vdGVzJykudmFsKClcblxuICAgIHZhciBkYXRhVG9Qb3N0ID0ge1xuICAgICAgdHJlZV9uYW1lOiB0cmVlX25hbWUsXG4gICAgICBwbGFjZTogcGxhY2UsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxvbmdkOiBsb25nZCxcbiAgICAgIG5vdGVzOiBub3Rlc1xuICAgIH1cblxuICAgICQucG9zdCgnL3RyZWUnLCBkYXRhVG9Qb3N0LCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICBjb25zb2xlLmxvZygnUE9TVCBzZW50IHRvIC90cmVlJylcbiAgICAgIGNvbnNvbGUubG9nKCdQT1NUL3RyZWUgZGF0YVRvUG9zdCB3YXM6ICcsIGRhdGFUb1Bvc3QpXG4gICAgICBjb25zb2xlLmxvZygnUE9TVC90cmVlIHN0YXR1cyB3YXM6ICcsIHN0YXR1cylcbiAgICAgIGNvbnNvbGUubG9nKCdQT1NUL3RyZWUgZGF0YSB3YXM6ICcsIGRhdGEpIC8vIHRoaXMgaXMgcHJpbnRpbmcgb3V0IGFuIEhUTUwgcGFnZSEhIVxuICAgICAgLy8gJC5nZXQoJy8nLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGVkIGZyb20gUE9TVCBiYWNrIHRvIEdFVC8nKVxuICAgICAgLy8gICBjb25zb2xlLmxvZygnRGF0YTogJywgZGF0YSlcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1N0YXR1czogJyAsIHN0YXR1cylcbiAgICAgIC8vIH0pXG4gICAgICAkKCd1bCcpLmFwcGVuZCgnPGxpPlRSRUU6ICcgKyB0cmVlX25hbWUgKyAnIEFUOiAnICsgcGxhY2UgKyAnIExBVDogJyArIGxhdCArICcgTE9ORzogJyArIGxvbmdkICsgJyBOT1RFUzogJyArIG5vdGVzICsgJzwvbGk+JylcbiAgICAgICQuZ2V0KCcvJywgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVkaXJlY3RlZCBmcm9tIFBPU1QgYmFjayB0byBHRVQvJylcbiAgICAgICAgY29uc29sZS5sb2coJ0dFVC8gRGF0YTogJywgZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coJ0dFVC8gU3RhdHVzOiAnICwgc3RhdHVzKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIC8vIGdldCBhIGxpc3Qgb2YgdHJlZXMgYW5kIGRpc3BsYXkgaXRcbiAgJC5nZXQoJy90cmVlcycsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICB2YXIgYXJyID0gZGF0YS50cmVlc1xuICAgIHZhciB0cmVlc19mb3VuZCA9ICcnXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHRyZWVzX2ZvdW5kID0gdHJlZXNfZm91bmQgKyBkYXRhLnRyZWVzW2ldXG4gICAgICB0cmVlc19mb3VuZCA9IHRyZWVzX2ZvdW5kICsgJzxsaT5UUkVFOiAnICsgZGF0YS50cmVlc1tpXS50cmVlX25hbWUgKyAnIEFUOiAnICsgZGF0YS50cmVlc1tpXS5wbGFjZSArICcgTEFUOiAnICsgZGF0YS50cmVlc1tpXS5sYXQgKyAnIExPTkc6ICcgKyBkYXRhLnRyZWVzW2ldLmxvbmdkICsgJyBOT1RFUzogJyArIGRhdGEudHJlZXNbaV0ubm90ZXMgKyAnPC9saT4nXG4gICAgfVxuICAgICQoJyN0cmVlX2xpc3QgJykuaHRtbCh0cmVlc19mb3VuZClcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGluaXRpYWxpemUgKCkge1xuICB2YXIgbWFwUHJvcCA9IHtcbiAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoLTQxLjI5NTkwNzcsIDE3NC44MzU3MzIpLFxuICAgIHpvb206IDEwLFxuICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcbiAgfVxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlTWFwJyksIG1hcFByb3ApXG4gIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHsgcG9zaXRpb246IG1hcFByb3AuY2VudGVyLCB9KVxuICBtYXJrZXIuc2V0TWFwKG1hcClcbiAgdmFyIGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgY29udGVudDogJ0hlbGxvIFdvcmxkISdcbiAgfSlcbiAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKVxuICAvLyBab29tIHRvIDkgd2hlbiBjbGlja2luZyBvbiBtYXJrZXJcbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbWFwLnNldFpvb20oOSlcbiAgICBtYXAuc2V0Q2VudGVyKG1hcmtlci5nZXRQb3NpdGlvbigpKVxuICB9KVxufVxuXG5nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSlcblxuLy8gY2hlY2sgZm9yIEdlb2xvY2F0aW9uIHN1cHBvcnRcbmlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgY29uc29sZS5sb2coJ0dlb2xvY2F0aW9uIGlzIHN1cHBvcnRlZCEnKVxufSBlbHNlIHtcbiAgY29uc29sZS5sb2coJ0dlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgQnJvd3Nlci9PUyB2ZXJzaW9uIHlldC4nKVxufVxuXG5jb25zb2xlLmxvZygnWUVTISBCcm93c2VyaWZpZWQgaW5kZXguanMgaGFzIGxvYWRlZCcpXG4iXX0=
