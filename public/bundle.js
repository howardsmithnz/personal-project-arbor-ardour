(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// event handlers for client

$(document).ready(function(){
	// get a list of trees and display it
	$.get('/trees', function(data, status) {
	   	var arr = data.trees
	   	var trees_found = ''
	   	 for (var i=0; i<arr.length; i++){
      		// trees_found = trees_found + data.trees[i]
      		trees_found = trees_found + '<li>TREE: ' + data.trees[i].tree_name + ' AT: ' + data.trees[i].place + ' LAT: ' + data.trees[i].lat+ ' LONG: ' + data.trees[i].longd + ' NOTES: ' + data.trees[i].notes + '</li>'
      	}
      	$("#tree_list ").html(trees_found)
	})

	
	// 
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

	  $.post('/', dataToPost, function(data, status)  {
	  	console.log("Posted stuff")
	    console.log('data', data)
	    $("ul").append('<li>TREE: ' + tree_name + ' AT: ' + place + ' LAT: ' + lat+ ' LONG: ' + longd + ' NOTES: ' + notes + '</li>')
	  });
	});
});

console.log("Hello from a newly Browserified index.js with GET /trees")
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIGV2ZW50IGhhbmRsZXJzIGZvciBjbGllbnRcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0Ly8gZ2V0IGEgbGlzdCBvZiB0cmVlcyBhbmQgZGlzcGxheSBpdFxuXHQkLmdldCgnL3RyZWVzJywgZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XG5cdCAgIFx0dmFyIGFyciA9IGRhdGEudHJlZXNcblx0ICAgXHR2YXIgdHJlZXNfZm91bmQgPSAnJ1xuXHQgICBcdCBmb3IgKHZhciBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIFx0XHQvLyB0cmVlc19mb3VuZCA9IHRyZWVzX2ZvdW5kICsgZGF0YS50cmVlc1tpXVxuICAgICAgXHRcdHRyZWVzX2ZvdW5kID0gdHJlZXNfZm91bmQgKyAnPGxpPlRSRUU6ICcgKyBkYXRhLnRyZWVzW2ldLnRyZWVfbmFtZSArICcgQVQ6ICcgKyBkYXRhLnRyZWVzW2ldLnBsYWNlICsgJyBMQVQ6ICcgKyBkYXRhLnRyZWVzW2ldLmxhdCsgJyBMT05HOiAnICsgZGF0YS50cmVlc1tpXS5sb25nZCArICcgTk9URVM6ICcgKyBkYXRhLnRyZWVzW2ldLm5vdGVzICsgJzwvbGk+J1xuICAgICAgXHR9XG4gICAgICBcdCQoXCIjdHJlZV9saXN0IFwiKS5odG1sKHRyZWVzX2ZvdW5kKVxuXHR9KVxuXG5cdFxuXHQvLyBcblx0JChcIiNhZGRfYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdHZhciB0cmVlX25hbWUgPSAkKCcjdHJlZV9uYW1lJykudmFsKClcblx0XHR2YXIgbGF0ID0gJCgnI2xhdCcpLnZhbCgpXG5cdFx0dmFyIGxvbmdkID0gJCgnI2xvbmdkJykudmFsKClcblx0XHR2YXIgcGxhY2UgPSAkKCcjcGxhY2UnKS52YWwoKVxuXHRcdHZhciBub3RlcyA9ICQoJyNub3RlcycpLnZhbCgpXG5cblx0ICB2YXIgZGF0YVRvUG9zdCA9IHtcblx0ICBcdHRyZWVfbmFtZTogdHJlZV9uYW1lLFxuXHQgIFx0cGxhY2U6IHBsYWNlLFxuXHQgIFx0bGF0OiBsYXQsXG5cdCAgXHRsb25nZDogbG9uZ2QsXG5cdCAgXHRub3Rlczogbm90ZXNcblx0ICB9XG5cblx0ICAkLnBvc3QoJy8nLCBkYXRhVG9Qb3N0LCBmdW5jdGlvbihkYXRhLCBzdGF0dXMpICB7XG5cdCAgXHRjb25zb2xlLmxvZyhcIlBvc3RlZCBzdHVmZlwiKVxuXHQgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuXHQgICAgJChcInVsXCIpLmFwcGVuZCgnPGxpPlRSRUU6ICcgKyB0cmVlX25hbWUgKyAnIEFUOiAnICsgcGxhY2UgKyAnIExBVDogJyArIGxhdCsgJyBMT05HOiAnICsgbG9uZ2QgKyAnIE5PVEVTOiAnICsgbm90ZXMgKyAnPC9saT4nKVxuXHQgIH0pO1xuXHR9KTtcbn0pO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gYSBuZXdseSBCcm93c2VyaWZpZWQgaW5kZXguanMgd2l0aCBHRVQgL3RyZWVzXCIpIl19
