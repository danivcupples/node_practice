// var request = require("request");
// request("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&exsentences=3&origin=\*&titles=plato", function(error, response, body){
//   if (!error && response.statusCode == 200){
//     var parsedData = JSON.parse(body);
//     console.log(parsedData.query.pages["22954"]["extract"]);
//     }
// });

$(document).ready(function(){
//convert search terms to variable

var message;
$("form").submit("click", function(){
  message = $('input[name=search-term]').val();
  //alert("You searched for " + message + "!");
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&exsentences=3&origin=\*&titles=" + message;

  //api request to https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=
  $.getJSON(url, function(response){
    console.log(response.query.pages);

    //pass response into reader field
    const reader = document.querySelector("#content");
    reader.innerHTML =
      "<dl><dt>" + response.query.pages["22954"].title + "</dt>"
      "<dd>" + response.query.pages["22954"]["extract"] + "</dd></dl>"

  });

  return false;
});


//use search term variable to fill in titles

//assign results to html.
});
