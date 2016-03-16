(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// event handlers for client

$(document).ready(function(){
	$.get('/trees', function(data, status) {
	   	// alert('GET /trees was OK')
	   	var arr = data.trees
	   	var trees_found = ''
	   	 for (var i=0; i<arr.length; i++){
      		// trees_found = trees_found + data.trees[i]
      		trees_found = trees_found + data.trees[i]
      	}
      	$("#tree_list ").html(trees_found)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBldmVudCBoYW5kbGVycyBmb3IgY2xpZW50XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdCQuZ2V0KCcvdHJlZXMnLCBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcblx0ICAgXHQvLyBhbGVydCgnR0VUIC90cmVlcyB3YXMgT0snKVxuXHQgICBcdHZhciBhcnIgPSBkYXRhLnRyZWVzXG5cdCAgIFx0dmFyIHRyZWVzX2ZvdW5kID0gJydcblx0ICAgXHQgZm9yICh2YXIgaT0wOyBpPGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBcdFx0Ly8gdHJlZXNfZm91bmQgPSB0cmVlc19mb3VuZCArIGRhdGEudHJlZXNbaV1cbiAgICAgIFx0XHR0cmVlc19mb3VuZCA9IHRyZWVzX2ZvdW5kICsgZGF0YS50cmVlc1tpXVxuICAgICAgXHR9XG4gICAgICBcdCQoXCIjdHJlZV9saXN0IFwiKS5odG1sKHRyZWVzX2ZvdW5kKVxuXHR9KVxuXG5cdFxuXG5cdCQoXCIjYWRkX2J1dHRvblwiKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHR2YXIgdHJlZV9uYW1lID0gJCgnI3RyZWVfbmFtZScpLnZhbCgpXG5cdFx0dmFyIGxhdCA9ICQoJyNsYXQnKS52YWwoKVxuXHRcdHZhciBsb25nZCA9ICQoJyNsb25nZCcpLnZhbCgpXG5cdFx0dmFyIHBsYWNlID0gJCgnI3BsYWNlJykudmFsKClcblx0XHR2YXIgbm90ZXMgPSAkKCcjbm90ZXMnKS52YWwoKVxuXG5cdCAgdmFyIGRhdGFUb1Bvc3QgPSB7XG5cdCAgXHR0cmVlX25hbWU6IHRyZWVfbmFtZSxcblx0ICBcdHBsYWNlOiBwbGFjZSxcblx0ICBcdGxhdDogbGF0LFxuXHQgIFx0bG9uZ2Q6IGxvbmdkLFxuXHQgIFx0bm90ZXM6IG5vdGVzXG5cdCAgfVxuXG5cdCAgYWxlcnQoXCJCdXR0b24gcHVzaGVkXCIpXG5cdCAgJC5wb3N0KCcvJywgZGF0YVRvUG9zdCwgZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSAge1xuXHQgIFx0Y29uc29sZS5sb2coXCJQb3N0ZWQgc3R1ZmZcIilcblx0ICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcblx0ICAgICQoXCJ1bFwiKS5hcHBlbmQoJzxsaT5UUkVFOiAnICsgdHJlZV9uYW1lICsgJyBBVDogJyArIHBsYWNlICsgJyBMQVQ6ICcgKyBsYXQrICcgTE9ORzogJyArIGxvbmdkICsgJyBOT1RFUzogJyArIG5vdGVzICsgJzwvbGk+Jylcblx0ICAgIC8vIC8vIHZhciBhcnIgPSBkYXRhLlRyZWVzXG5cdCAgICAvLyAvLyAgIGZvciAodmFyIGk9MDsgaTxhcnIubGVuZ3RoOyBpKyspe1xuXHQgICAgLy8gLy8gICAgICQoXCJ1bFwiKS5hcHBlbmQoJzxsaT4nK2FycltpXSsnPC9saT4nKVxuXHQgICAgLy8gLy8gICB9XG5cdCAgfSk7XG5cdH0pO1xufSk7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBhIG5ld2x5IEJyb3dzZXJpZmllZCBpbmRleC5qcyB3aXRoIEdFVCAvdHJlZXNcIikiXX0=
