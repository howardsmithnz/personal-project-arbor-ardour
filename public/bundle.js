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

    $.post('/', dataToPost, function (data, status) {
      console.log('Posted stuff')
      console.log('data', data)
      $('ul').append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat + ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
    })
  })
})

console.log('Hello from a newly Browserified index.js with GET /trees')

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGV2ZW50IGhhbmRsZXJzIGZvciBjbGllbnRcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBnZXQgYSBsaXN0IG9mIHRyZWVzIGFuZCBkaXNwbGF5IGl0XG4gICQuZ2V0KCcvdHJlZXMnLCBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgdmFyIGFyciA9IGRhdGEudHJlZXNcbiAgICB2YXIgdHJlZXNfZm91bmQgPSAnJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyB0cmVlc19mb3VuZCA9IHRyZWVzX2ZvdW5kICsgZGF0YS50cmVlc1tpXVxuICAgICAgdHJlZXNfZm91bmQgPSB0cmVlc19mb3VuZCArICc8bGk+VFJFRTogJyArIGRhdGEudHJlZXNbaV0udHJlZV9uYW1lICsgJyBBVDogJyArIGRhdGEudHJlZXNbaV0ucGxhY2UgKyAnIExBVDogJyArIGRhdGEudHJlZXNbaV0ubGF0ICsgJyBMT05HOiAnICsgZGF0YS50cmVlc1tpXS5sb25nZCArICcgTk9URVM6ICcgKyBkYXRhLnRyZWVzW2ldLm5vdGVzICsgJzwvbGk+J1xuICAgIH1cbiAgICAkKCcjdHJlZV9saXN0ICcpLmh0bWwodHJlZXNfZm91bmQpXG4gIH0pXG5cbiAgLy8gc2VuZCB0aGUgZGF0YSB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAkKCcjYWRkX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRyZWVfbmFtZSA9ICQoJyN0cmVlX25hbWUnKS52YWwoKVxuICAgIHZhciBsYXQgPSAkKCcjbGF0JykudmFsKClcbiAgICB2YXIgbG9uZ2QgPSAkKCcjbG9uZ2QnKS52YWwoKVxuICAgIHZhciBwbGFjZSA9ICQoJyNwbGFjZScpLnZhbCgpXG4gICAgdmFyIG5vdGVzID0gJCgnI25vdGVzJykudmFsKClcblxuICAgIHZhciBkYXRhVG9Qb3N0ID0ge1xuICAgICAgdHJlZV9uYW1lOiB0cmVlX25hbWUsXG4gICAgICBwbGFjZTogcGxhY2UsXG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxvbmdkOiBsb25nZCxcbiAgICAgIG5vdGVzOiBub3Rlc1xuICAgIH1cblxuICAgICQucG9zdCgnLycsIGRhdGFUb1Bvc3QsIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQb3N0ZWQgc3R1ZmYnKVxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuICAgICAgJCgndWwnKS5hcHBlbmQoJzxsaT5UUkVFOiAnICsgdHJlZV9uYW1lICsgJyBBVDogJyArIHBsYWNlICsgJyBMQVQ6ICcgKyBsYXQgKyAnIExPTkc6ICcgKyBsb25nZCArICcgTk9URVM6ICcgKyBub3RlcyArICc8L2xpPicpXG4gICAgfSlcbiAgfSlcbn0pXG5cbmNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGEgbmV3bHkgQnJvd3NlcmlmaWVkIGluZGV4LmpzIHdpdGggR0VUIC90cmVlcycpXG4iXX0=
