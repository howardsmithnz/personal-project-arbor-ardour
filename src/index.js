var $ = require('jquery')

$(document).ready(function(){
    $("add_button").click(function(){
      $.post('/', function(data, status)  {
        console.log('data', data)
        $("ul").append('<li>' + 'I am a tree' + '</li>')
        // var arr = data.Trees
        //   for (var i=0; i<arr.length; i++){
        //     $("ul").append('<li>'+arr[i]+'</li>')
        //   }
        // });
    });
});

console.log("Hello from Browserified index.js")