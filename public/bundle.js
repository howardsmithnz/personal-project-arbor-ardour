(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var $ = require('jquery')

$(document).ready(function(){
	$("#add_button").click(function(e){
		e.preventDefault()
		var tree_name = $('#tree_name').val()
		// var tree_name = 'Vanilla'
		var place = $('#place').val()
		// var place = 'VanillaTown'
		var notes = $('#notes').val()
		// var notes = 'Yum'

	  var dataToPost = {
	  	tree_name: tree_name,
	  	place: place,
	  	notes: notes
	  }

	  alert("Button pushed")
	  $.post('/', dataToPost, function(data, status)  {
	  	console.log("Posted stuff")
	    console.log('data', data)
	    $("ul").append('<li>TREE: ' + tree_name + ' AT: ' + place + ' NOTES: ' + notes + '</li>')
	    // // var arr = data.Trees
	    // //   for (var i=0; i<arr.length; i++){
	    // //     $("ul").append('<li>'+arr[i]+'</li>')
	    // //   }
	  });
	});
});

console.log("Hello from Browserified index.js")
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5JylcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0JChcIiNhZGRfYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciB0cmVlX25hbWUgPSAkKCcjdHJlZV9uYW1lJykudmFsKClcblx0XHQvLyB2YXIgdHJlZV9uYW1lID0gJ1ZhbmlsbGEnXG5cdFx0dmFyIHBsYWNlID0gJCgnI3BsYWNlJykudmFsKClcblx0XHQvLyB2YXIgcGxhY2UgPSAnVmFuaWxsYVRvd24nXG5cdFx0dmFyIG5vdGVzID0gJCgnI25vdGVzJykudmFsKClcblx0XHQvLyB2YXIgbm90ZXMgPSAnWXVtJ1xuXG5cdCAgdmFyIGRhdGFUb1Bvc3QgPSB7XG5cdCAgXHR0cmVlX25hbWU6IHRyZWVfbmFtZSxcblx0ICBcdHBsYWNlOiBwbGFjZSxcblx0ICBcdG5vdGVzOiBub3Rlc1xuXHQgIH1cblxuXHQgIGFsZXJ0KFwiQnV0dG9uIHB1c2hlZFwiKVxuXHQgICQucG9zdCgnLycsIGRhdGFUb1Bvc3QsIGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykgIHtcblx0ICBcdGNvbnNvbGUubG9nKFwiUG9zdGVkIHN0dWZmXCIpXG5cdCAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG5cdCAgICAkKFwidWxcIikuYXBwZW5kKCc8bGk+VFJFRTogJyArIHRyZWVfbmFtZSArICcgQVQ6ICcgKyBwbGFjZSArICcgTk9URVM6ICcgKyBub3RlcyArICc8L2xpPicpXG5cdCAgICAvLyAvLyB2YXIgYXJyID0gZGF0YS5UcmVlc1xuXHQgICAgLy8gLy8gICBmb3IgKHZhciBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKXtcblx0ICAgIC8vIC8vICAgICAkKFwidWxcIikuYXBwZW5kKCc8bGk+JythcnJbaV0rJzwvbGk+Jylcblx0ICAgIC8vIC8vICAgfVxuXHQgIH0pO1xuXHR9KTtcbn0pO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gQnJvd3NlcmlmaWVkIGluZGV4LmpzXCIpIl19
