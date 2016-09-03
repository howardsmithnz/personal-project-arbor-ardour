(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// event handlers for client

$(document).ready(function () {
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

    $.post('/tree', dataToPost, function (data, status) {
      console.log('POST sent to /tree')
      console.log('data was: ', data)
      // $.get('/', function (data, status) {
      //   console.log('Redirected from POST back to GET/')
      //   console.log('Data: ', data)
      //   console.log('Status: ' , status)
      // })
      $('ul').append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat + ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
    })

  // $.get('/', function (data, status) {
  //   console.log('Redirected from POST back to GET/')
  //   console.log('Data: ', data)
  //   console.log('Status: ' , status)
  // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gZXZlbnQgaGFuZGxlcnMgZm9yIGNsaWVudFxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIGdldCBhIGxpc3Qgb2YgdHJlZXMgYW5kIGRpc3BsYXkgaXRcbiAgJC5nZXQoJy90cmVlcycsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICB2YXIgYXJyID0gZGF0YS50cmVlc1xuICAgIHZhciB0cmVlc19mb3VuZCA9ICcnXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHRyZWVzX2ZvdW5kID0gdHJlZXNfZm91bmQgKyBkYXRhLnRyZWVzW2ldXG4gICAgICB0cmVlc19mb3VuZCA9IHRyZWVzX2ZvdW5kICsgJzxsaT5UUkVFOiAnICsgZGF0YS50cmVlc1tpXS50cmVlX25hbWUgKyAnIEFUOiAnICsgZGF0YS50cmVlc1tpXS5wbGFjZSArICcgTEFUOiAnICsgZGF0YS50cmVlc1tpXS5sYXQgKyAnIExPTkc6ICcgKyBkYXRhLnRyZWVzW2ldLmxvbmdkICsgJyBOT1RFUzogJyArIGRhdGEudHJlZXNbaV0ubm90ZXMgKyAnPC9saT4nXG4gICAgfVxuICAgICQoJyN0cmVlX2xpc3QgJykuaHRtbCh0cmVlc19mb3VuZClcbiAgfSlcblxuICAvLyBzZW5kIHRoZSBkYXRhIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICQoJyNhZGRfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgdHJlZV9uYW1lID0gJCgnI3RyZWVfbmFtZScpLnZhbCgpXG4gICAgdmFyIGxhdCA9ICQoJyNsYXQnKS52YWwoKVxuICAgIHZhciBsb25nZCA9ICQoJyNsb25nZCcpLnZhbCgpXG4gICAgdmFyIHBsYWNlID0gJCgnI3BsYWNlJykudmFsKClcbiAgICB2YXIgbm90ZXMgPSAkKCcjbm90ZXMnKS52YWwoKVxuXG4gICAgdmFyIGRhdGFUb1Bvc3QgPSB7XG4gICAgICB0cmVlX25hbWU6IHRyZWVfbmFtZSxcbiAgICAgIHBsYWNlOiBwbGFjZSxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG9uZ2Q6IGxvbmdkLFxuICAgICAgbm90ZXM6IG5vdGVzXG4gICAgfVxuXG4gICAgJC5wb3N0KCcvdHJlZScsIGRhdGFUb1Bvc3QsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQT1NUIHNlbnQgdG8gL3RyZWUnKVxuICAgICAgY29uc29sZS5sb2coJ2RhdGEgd2FzOiAnLCBkYXRhKVxuICAgICAgLy8gJC5nZXQoJy8nLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGVkIGZyb20gUE9TVCBiYWNrIHRvIEdFVC8nKVxuICAgICAgLy8gICBjb25zb2xlLmxvZygnRGF0YTogJywgZGF0YSlcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1N0YXR1czogJyAsIHN0YXR1cylcbiAgICAgIC8vIH0pXG4gICAgICAkKCd1bCcpLmFwcGVuZCgnPGxpPlRSRUU6ICcgKyB0cmVlX25hbWUgKyAnIEFUOiAnICsgcGxhY2UgKyAnIExBVDogJyArIGxhdCArICcgTE9ORzogJyArIGxvbmdkICsgJyBOT1RFUzogJyArIG5vdGVzICsgJzwvbGk+JylcbiAgICB9KVxuXG4gIC8vICQuZ2V0KCcvJywgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAvLyAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGVkIGZyb20gUE9TVCBiYWNrIHRvIEdFVC8nKVxuICAvLyAgIGNvbnNvbGUubG9nKCdEYXRhOiAnLCBkYXRhKVxuICAvLyAgIGNvbnNvbGUubG9nKCdTdGF0dXM6ICcgLCBzdGF0dXMpXG4gIC8vIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBpbml0aWFsaXplICgpIHtcbiAgdmFyIG1hcFByb3AgPSB7XG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC00MS4yOTU5MDc3LCAxNzQuODM1NzMyKSxcbiAgICB6b29tOiAxMCxcbiAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gIH1cbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZU1hcCcpLCBtYXBQcm9wKVxuICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IHBvc2l0aW9uOiBtYXBQcm9wLmNlbnRlciwgfSlcbiAgbWFya2VyLnNldE1hcChtYXApXG4gIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgIGNvbnRlbnQ6ICdIZWxsbyBXb3JsZCEnXG4gIH0pXG4gIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcilcbiAgLy8gWm9vbSB0byA5IHdoZW4gY2xpY2tpbmcgb24gbWFya2VyXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1hcC5zZXRab29tKDkpXG4gICAgbWFwLnNldENlbnRlcihtYXJrZXIuZ2V0UG9zaXRpb24oKSlcbiAgfSlcbn1cblxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpXG5cbi8vIGNoZWNrIGZvciBHZW9sb2NhdGlvbiBzdXBwb3J0XG5pZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gIGNvbnNvbGUubG9nKCdHZW9sb2NhdGlvbiBpcyBzdXBwb3J0ZWQhJylcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIEJyb3dzZXIvT1MgdmVyc2lvbiB5ZXQuJylcbn1cblxuY29uc29sZS5sb2coJ1lFUyEgQnJvd3NlcmlmaWVkIGluZGV4LmpzIGhhcyBsb2FkZWQnKVxuIl19
