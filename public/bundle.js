(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGV2ZW50IGhhbmRsZXJzIGZvciBjbGllbnRcbnZhciBhcnIgLy8gYSBnbG9iYWwgLSB5dWNrISBtdXN0IGNoYW5nZSB0aGlzIG9uZSBkYXlcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy8gZ2V0IGEgbGlzdCBvZiB0cmVlcyBhbmQgZGlzcGxheSBpdFxuXG4gICQuZ2V0KCcvdHJlZXMnLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgLy8gdmFyIGFyciA9IGRhdGEudHJlZXNcbiAgICBhcnIgPSBkYXRhLnRyZWVzXG4gICAgdmFyIHRyZWVzX2ZvdW5kID0gJydcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdHJlZXNfZm91bmQgPSB0cmVlc19mb3VuZCArICc8bGk+VFJFRTogJyArIGRhdGEudHJlZXNbaV0udHJlZV9uYW1lICsgJyBBVDogJyArIGRhdGEudHJlZXNbaV0ucGxhY2UgKyAnIExBVDogJyArIGRhdGEudHJlZXNbaV0ubGF0ICsgJyBMT05HOiAnICsgZGF0YS50cmVlc1tpXS5sb25nZCArICcgTk9URVM6ICcgKyBkYXRhLnRyZWVzW2ldLm5vdGVzICsgJzwvbGk+J1xuICAgIH1cbiAgICAkKCcjdHJlZV9saXN0ICcpLmh0bWwodHJlZXNfZm91bmQpXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBpbml0aWFsaXplICgpIHtcbiAgdmFyIG1hcFByb3AgPSB7XG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC00MS4yOTU5MDc3LCAxNzQuODM1NzMyKSxcbiAgICB6b29tOiAxMCxcbiAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gIH1cbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZU1hcCcpLCBtYXBQcm9wKVxuXG4gIGNvbnNvbGUubG9nKCdhcnIgbGVuZ3RoIGlzOiAnLCBhcnIubGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBteWxhdCA9IGFycltpXS5sYXRcbiAgICB2YXIgbXlsb25nZCA9IGFycltpXS5sb25nZFxuICAgIHZhciBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG15bGF0LCBteWxvbmdkKVxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBsYXRMbmcsXG4gICAgICBtYXA6IG1hcFxuICAgIH0pXG4gIH1cblxuLy8gdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogbWFwUHJvcC5jZW50ZXIsIH0pXG4vLyBtYXJrZXIuc2V0TWFwKG1hcClcbi8vIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuLy8gICBjb250ZW50OiAnSGVsbG8gV29ybGQhJ1xuLy8gfSlcbi8vIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcilcbi8vIC8vIFpvb20gdG8gOSB3aGVuIGNsaWNraW5nIG9uIG1hcmtlclxuLy8gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyAgIG1hcC5zZXRab29tKDkpXG4vLyAgIG1hcC5zZXRDZW50ZXIobWFya2VyLmdldFBvc2l0aW9uKCkpXG4vLyB9KVxufVxuXG5nb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSlcblxuLy8gY2hlY2sgZm9yIEdlb2xvY2F0aW9uIHN1cHBvcnRcbmlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gR2VvbG9jYXRpb24gaXMgc3VwcG9ydGVkIScpXG59IGVsc2Uge1xuICBjb25zb2xlLmxvZygnY2xpZW50LWluZGV4LmpzPiBHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIEJyb3dzZXIvT1MgdmVyc2lvbiB5ZXQuJylcbn1cblxuY29uc29sZS5sb2coJ2NsaWVudC1pbmRleC5qcz4gWUVTISBCcm93c2VyaWZpZWQgaW5kZXguanMgaGFzIGxvYWRlZCcpXG4iXX0=
