// var $ = require('jquery')

$(document).ready(function(){
	$("#add_button").click(function(e){
		e.preventDefault()
		var tree_name = $('#tree_name').val()
		// var tree_name = 'Vanilla'
		var lat = $('#lat').val()
		var longd = $('#longd').val()
		var place = $('#place').val()
		// var place = 'VanillaTown'
		var notes = $('#notes').val()
		// var notes = 'Yum'

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

console.log("Hello from Browserified index.js")