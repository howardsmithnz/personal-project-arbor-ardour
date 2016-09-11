(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// event handlers for client

$(document).ready(function () {
  // send the data when the button is clicked
  // $('#add_button').click(function (e) {
  //   // e.preventDefault()
  //   var tree_name = $('#tree_name').val()
  //   var lat = $('#lat').val()
  //   var longd = $('#longd').val()
  //   var place = $('#place').val()
  //   var notes = $('#notes').val()

  //   var dataToPost = {
  //     tree_name: tree_name,
  //     place: place,
  //     lat: lat,
  //     longd: longd,
  //     notes: notes
  //   }

  //   $.post('/tree', dataToPost, function (data, status) {
  //     console.log('client-index.js> POST sent to /tree')
  //     console.log('client-index.js> POST/tree dataToPost was: ', dataToPost)
  //     console.log('client-index.js> POST/tree status was: ', status)
  //     console.log('client-index.js> POST/tree data was: ', data) // this is printing out an HTML page!!!
  //     // $.get('/', function (data, status) {
  //     //   console.log('client-index.js> Redirected from POST back to GET/')
  //     //   console.log('client-index.js> Data: ', data)
  //     //   console.log('client-index.js> Status: ' , status)
  //     // })
  //     $('ul').append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat + ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
  //     $.get('/', function (data, status) {
  //       console.log('client-index.js> Redirected from POST back to GET/')
  //       console.log('client-index.js> GET/ Data: ', data)
  //       console.log('client-index.js> GET/ Status: ' , status)
  //     })
  //   })
  // })

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gZXZlbnQgaGFuZGxlcnMgZm9yIGNsaWVudFxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIHNlbmQgdGhlIGRhdGEgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgLy8gJCgnI2FkZF9idXR0b24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAvLyAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgIHZhciB0cmVlX25hbWUgPSAkKCcjdHJlZV9uYW1lJykudmFsKClcbiAgLy8gICB2YXIgbGF0ID0gJCgnI2xhdCcpLnZhbCgpXG4gIC8vICAgdmFyIGxvbmdkID0gJCgnI2xvbmdkJykudmFsKClcbiAgLy8gICB2YXIgcGxhY2UgPSAkKCcjcGxhY2UnKS52YWwoKVxuICAvLyAgIHZhciBub3RlcyA9ICQoJyNub3RlcycpLnZhbCgpXG5cbiAgLy8gICB2YXIgZGF0YVRvUG9zdCA9IHtcbiAgLy8gICAgIHRyZWVfbmFtZTogdHJlZV9uYW1lLFxuICAvLyAgICAgcGxhY2U6IHBsYWNlLFxuICAvLyAgICAgbGF0OiBsYXQsXG4gIC8vICAgICBsb25nZDogbG9uZ2QsXG4gIC8vICAgICBub3Rlczogbm90ZXNcbiAgLy8gICB9XG5cbiAgLy8gICAkLnBvc3QoJy90cmVlJywgZGF0YVRvUG9zdCwgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gUE9TVCBzZW50IHRvIC90cmVlJylcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IFBPU1QvdHJlZSBkYXRhVG9Qb3N0IHdhczogJywgZGF0YVRvUG9zdClcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IFBPU1QvdHJlZSBzdGF0dXMgd2FzOiAnLCBzdGF0dXMpXG4gIC8vICAgICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBQT1NUL3RyZWUgZGF0YSB3YXM6ICcsIGRhdGEpIC8vIHRoaXMgaXMgcHJpbnRpbmcgb3V0IGFuIEhUTUwgcGFnZSEhIVxuICAvLyAgICAgLy8gJC5nZXQoJy8nLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gIC8vICAgICAvLyAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IFJlZGlyZWN0ZWQgZnJvbSBQT1NUIGJhY2sgdG8gR0VULycpXG4gIC8vICAgICAvLyAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IERhdGE6ICcsIGRhdGEpXG4gIC8vICAgICAvLyAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IFN0YXR1czogJyAsIHN0YXR1cylcbiAgLy8gICAgIC8vIH0pXG4gIC8vICAgICAkKCd1bCcpLmFwcGVuZCgnPGxpPlRSRUU6ICcgKyB0cmVlX25hbWUgKyAnIEFUOiAnICsgcGxhY2UgKyAnIExBVDogJyArIGxhdCArICcgTE9ORzogJyArIGxvbmdkICsgJyBOT1RFUzogJyArIG5vdGVzICsgJzwvbGk+JylcbiAgLy8gICAgICQuZ2V0KCcvJywgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAvLyAgICAgICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBSZWRpcmVjdGVkIGZyb20gUE9TVCBiYWNrIHRvIEdFVC8nKVxuICAvLyAgICAgICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBHRVQvIERhdGE6ICcsIGRhdGEpXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IEdFVC8gU3RhdHVzOiAnICwgc3RhdHVzKVxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuICAvLyB9KVxuXG4gIC8vIGdldCBhIGxpc3Qgb2YgdHJlZXMgYW5kIGRpc3BsYXkgaXRcbiAgJC5nZXQoJy90cmVlcycsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICB2YXIgYXJyID0gZGF0YS50cmVlc1xuICAgIHZhciB0cmVlc19mb3VuZCA9ICcnXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyZWVzX2ZvdW5kID0gdHJlZXNfZm91bmQgKyAnPGxpPlRSRUU6ICcgKyBkYXRhLnRyZWVzW2ldLnRyZWVfbmFtZSArICcgQVQ6ICcgKyBkYXRhLnRyZWVzW2ldLnBsYWNlICsgJyBMQVQ6ICcgKyBkYXRhLnRyZWVzW2ldLmxhdCArICcgTE9ORzogJyArIGRhdGEudHJlZXNbaV0ubG9uZ2QgKyAnIE5PVEVTOiAnICsgZGF0YS50cmVlc1tpXS5ub3RlcyArICc8L2xpPidcbiAgICB9XG4gICAgJCgnI3RyZWVfbGlzdCAnKS5odG1sKHRyZWVzX2ZvdW5kKVxuICB9KVxufSlcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSAoKSB7XG4gIHZhciBtYXBQcm9wID0ge1xuICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZygtNDEuMjk1OTA3NywgMTc0LjgzNTczMiksXG4gICAgem9vbTogMTAsXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICB9XG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29nbGVNYXAnKSwgbWFwUHJvcClcbiAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogbWFwUHJvcC5jZW50ZXIsIH0pXG4gIG1hcmtlci5zZXRNYXAobWFwKVxuICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICBjb250ZW50OiAnSGVsbG8gV29ybGQhJ1xuICB9KVxuICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpXG4gIC8vIFpvb20gdG8gOSB3aGVuIGNsaWNraW5nIG9uIG1hcmtlclxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXAuc2V0Wm9vbSg5KVxuICAgIG1hcC5zZXRDZW50ZXIobWFya2VyLmdldFBvc2l0aW9uKCkpXG4gIH0pXG59XG5cbmdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0aWFsaXplKVxuXG4vLyBjaGVjayBmb3IgR2VvbG9jYXRpb24gc3VwcG9ydFxuaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBHZW9sb2NhdGlvbiBpcyBzdXBwb3J0ZWQhJylcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdjbGllbnQtaW5kZXguanM+IEdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgQnJvd3Nlci9PUyB2ZXJzaW9uIHlldC4nKVxufVxuXG5jb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBZRVMhIEJyb3dzZXJpZmllZCBpbmRleC5qcyBoYXMgbG9hZGVkJylcbiJdfQ==
