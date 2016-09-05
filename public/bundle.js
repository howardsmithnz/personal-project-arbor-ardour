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
      console.log('dataToPost was: ', dataToPost)
      console.log('status was: ', status)
      console.log('data was: ', data) // this is printing out an HTML page!!!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGV2ZW50IGhhbmRsZXJzIGZvciBjbGllbnRcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBzZW5kIHRoZSBkYXRhIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICQoJyNhZGRfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICB2YXIgdHJlZV9uYW1lID0gJCgnI3RyZWVfbmFtZScpLnZhbCgpXG4gICAgdmFyIGxhdCA9ICQoJyNsYXQnKS52YWwoKVxuICAgIHZhciBsb25nZCA9ICQoJyNsb25nZCcpLnZhbCgpXG4gICAgdmFyIHBsYWNlID0gJCgnI3BsYWNlJykudmFsKClcbiAgICB2YXIgbm90ZXMgPSAkKCcjbm90ZXMnKS52YWwoKVxuXG4gICAgdmFyIGRhdGFUb1Bvc3QgPSB7XG4gICAgICB0cmVlX25hbWU6IHRyZWVfbmFtZSxcbiAgICAgIHBsYWNlOiBwbGFjZSxcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG9uZ2Q6IGxvbmdkLFxuICAgICAgbm90ZXM6IG5vdGVzXG4gICAgfVxuXG4gICAgJC5wb3N0KCcvdHJlZScsIGRhdGFUb1Bvc3QsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQT1NUIHNlbnQgdG8gL3RyZWUnKVxuICAgICAgY29uc29sZS5sb2coJ2RhdGFUb1Bvc3Qgd2FzOiAnLCBkYXRhVG9Qb3N0KVxuICAgICAgY29uc29sZS5sb2coJ3N0YXR1cyB3YXM6ICcsIHN0YXR1cylcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhIHdhczogJywgZGF0YSkgLy8gdGhpcyBpcyBwcmludGluZyBvdXQgYW4gSFRNTCBwYWdlISEhXG4gICAgICAvLyAkLmdldCgnLycsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1JlZGlyZWN0ZWQgZnJvbSBQT1NUIGJhY2sgdG8gR0VULycpXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdEYXRhOiAnLCBkYXRhKVxuICAgICAgLy8gICBjb25zb2xlLmxvZygnU3RhdHVzOiAnICwgc3RhdHVzKVxuICAgICAgLy8gfSlcbiAgICAgICQoJ3VsJykuYXBwZW5kKCc8bGk+VFJFRTogJyArIHRyZWVfbmFtZSArICcgQVQ6ICcgKyBwbGFjZSArICcgTEFUOiAnICsgbGF0ICsgJyBMT05HOiAnICsgbG9uZ2QgKyAnIE5PVEVTOiAnICsgbm90ZXMgKyAnPC9saT4nKVxuICAgIH0pXG5cbiAgLy8gJC5nZXQoJy8nLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ1JlZGlyZWN0ZWQgZnJvbSBQT1NUIGJhY2sgdG8gR0VULycpXG4gIC8vICAgY29uc29sZS5sb2coJ0RhdGE6ICcsIGRhdGEpXG4gIC8vICAgY29uc29sZS5sb2coJ1N0YXR1czogJyAsIHN0YXR1cylcbiAgLy8gfSlcbiAgfSlcblxuICAvLyBnZXQgYSBsaXN0IG9mIHRyZWVzIGFuZCBkaXNwbGF5IGl0XG4gICQuZ2V0KCcvdHJlZXMnLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgdmFyIGFyciA9IGRhdGEudHJlZXNcbiAgICB2YXIgdHJlZXNfZm91bmQgPSAnJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyB0cmVlc19mb3VuZCA9IHRyZWVzX2ZvdW5kICsgZGF0YS50cmVlc1tpXVxuICAgICAgdHJlZXNfZm91bmQgPSB0cmVlc19mb3VuZCArICc8bGk+VFJFRTogJyArIGRhdGEudHJlZXNbaV0udHJlZV9uYW1lICsgJyBBVDogJyArIGRhdGEudHJlZXNbaV0ucGxhY2UgKyAnIExBVDogJyArIGRhdGEudHJlZXNbaV0ubGF0ICsgJyBMT05HOiAnICsgZGF0YS50cmVlc1tpXS5sb25nZCArICcgTk9URVM6ICcgKyBkYXRhLnRyZWVzW2ldLm5vdGVzICsgJzwvbGk+J1xuICAgIH1cbiAgICAkKCcjdHJlZV9saXN0ICcpLmh0bWwodHJlZXNfZm91bmQpXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBpbml0aWFsaXplICgpIHtcbiAgdmFyIG1hcFByb3AgPSB7XG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKC00MS4yOTU5MDc3LCAxNzQuODM1NzMyKSxcbiAgICB6b29tOiAxMCxcbiAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gIH1cbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2dsZU1hcCcpLCBtYXBQcm9wKVxuICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IHBvc2l0aW9uOiBtYXBQcm9wLmNlbnRlciwgfSlcbiAgbWFya2VyLnNldE1hcChtYXApXG4gIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgIGNvbnRlbnQ6ICdIZWxsbyBXb3JsZCEnXG4gIH0pXG4gIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcilcbiAgLy8gWm9vbSB0byA5IHdoZW4gY2xpY2tpbmcgb24gbWFya2VyXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1hcC5zZXRab29tKDkpXG4gICAgbWFwLnNldENlbnRlcihtYXJrZXIuZ2V0UG9zaXRpb24oKSlcbiAgfSlcbn1cblxuZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCAnbG9hZCcsIGluaXRpYWxpemUpXG5cbi8vIGNoZWNrIGZvciBHZW9sb2NhdGlvbiBzdXBwb3J0XG5pZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gIGNvbnNvbGUubG9nKCdHZW9sb2NhdGlvbiBpcyBzdXBwb3J0ZWQhJylcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIEJyb3dzZXIvT1MgdmVyc2lvbiB5ZXQuJylcbn1cblxuY29uc29sZS5sb2coJ1lFUyEgQnJvd3NlcmlmaWVkIGluZGV4LmpzIGhhcyBsb2FkZWQnKVxuIl19
