(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// event handlers for client

$(document).ready(function(){
	$.get('/trees', function(data, status) {
	   	alert('GET /trees was OK')
      	$("#tree_list").html("<li>TREE: Oak AT: 123 Sherwood St.</li>")
	})

	

	$("#add_button").click(function(e){
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

	  alert("Button pushed")
	  $.post('/', dataToPost, function(data, status)  {
	  	console.log("Posted stuff")
	    console.log('data', data)
	    $("ul").append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat+ ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
	    // // var arr = data.Trees
	    // //   for (var i=0; i<arr.length; i++){
	    // //     $("ul").append('<li>'+arr[i]+'</li>')
	    // //   }
	  });
	});
});

console.log("Hello from a newly Browserified index.js with GET /trees")
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBldmVudCBoYW5kbGVycyBmb3IgY2xpZW50XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdCQuZ2V0KCcvdHJlZXMnLCBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcblx0ICAgXHRhbGVydCgnR0VUIC90cmVlcyB3YXMgT0snKVxuICAgICAgXHQkKFwiI3RyZWVfbGlzdFwiKS5odG1sKFwiPGxpPlRSRUU6IE9hayBBVDogMTIzIFNoZXJ3b29kIFN0LjwvbGk+XCIpXG5cdH0pXG5cblx0XG5cblx0JChcIiNhZGRfYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciB0cmVlX25hbWUgPSAkKCcjdHJlZV9uYW1lJykudmFsKClcblx0XHR2YXIgbGF0ID0gJCgnI2xhdCcpLnZhbCgpXG5cdFx0dmFyIGxvbmdkID0gJCgnI2xvbmdkJykudmFsKClcblx0XHR2YXIgcGxhY2UgPSAkKCcjcGxhY2UnKS52YWwoKVxuXHRcdHZhciBub3RlcyA9ICQoJyNub3RlcycpLnZhbCgpXG5cblx0ICB2YXIgZGF0YVRvUG9zdCA9IHtcblx0ICBcdHRyZWVfbmFtZTogdHJlZV9uYW1lLFxuXHQgIFx0cGxhY2U6IHBsYWNlLFxuXHQgIFx0bGF0OiBsYXQsXG5cdCAgXHRsb25nZDogbG9uZ2QsXG5cdCAgXHRub3Rlczogbm90ZXNcblx0ICB9XG5cblx0ICBhbGVydChcIkJ1dHRvbiBwdXNoZWRcIilcblx0ICAkLnBvc3QoJy8nLCBkYXRhVG9Qb3N0LCBmdW5jdGlvbihkYXRhLCBzdGF0dXMpICB7XG5cdCAgXHRjb25zb2xlLmxvZyhcIlBvc3RlZCBzdHVmZlwiKVxuXHQgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuXHQgICAgJChcInVsXCIpLmFwcGVuZCgnPGxpPlRSRUU6ICcgKyB0cmVlX25hbWUgKyAnIEFUOiAnICsgcGxhY2UgKyAnIExBVDogJyArIGxhdCsgJyBMT05HOiAnICsgbG9uZ2QgKyAnIE5PVEVTOiAnICsgbm90ZXMgKyAnPC9saT4nKVxuXHQgICAgLy8gLy8gdmFyIGFyciA9IGRhdGEuVHJlZXNcblx0ICAgIC8vIC8vICAgZm9yICh2YXIgaT0wOyBpPGFyci5sZW5ndGg7IGkrKyl7XG5cdCAgICAvLyAvLyAgICAgJChcInVsXCIpLmFwcGVuZCgnPGxpPicrYXJyW2ldKyc8L2xpPicpXG5cdCAgICAvLyAvLyAgIH1cblx0ICB9KTtcblx0fSk7XG59KTtcblxuY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIGEgbmV3bHkgQnJvd3NlcmlmaWVkIGluZGV4LmpzIHdpdGggR0VUIC90cmVlc1wiKSJdfQ==
