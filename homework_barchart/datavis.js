$(function() {

$("<p>").text("Boston Crime Stats")
		.appendTo("body");

});

$(function() {

	var i = 0;
    while(i < data.length) {
    
    // give vars different names and call them in the .text, also name and salary and within var person. to call something within an array use square brackets
      var info = data[i];
      var neighborhood = info["name"]
      var incidents = info["incidents"]
      var domestic = info["domestic"];
      
    //var person = data[i];
      //var name = person[8]
      //var salary = parseInt(person[11],10);

	console.log(data);
	
	var maxIncidents = 11000;
      
      // Fraction between 0 and 1
      var fraction = incidents / maxIncidents; 
      var incidentsWidth = fraction * 1000;
      
    var maxDomestic = 11000;
      
      // Fraction between 0 and 1
      var fraction = domestic / maxDomestic; 
      var domesticWidth = fraction * 1000;
      
      var row = $("<div>").addClass("row");
      
      var neighborhoodDiv = $("<div>").addClass("neighborhood")
      				.text(neighborhood)
      				.appendTo(row);
      				
      var incidentsDiv = $("<div>").addClass("incidents")
      				.text(incidents)
      				.css({ width: incidentsWidth,
          				backgroundColor: "purple"
          				 })
      				.appendTo(row);
      				
      	var domesticDiv = $("<div>").addClass("domestic")
      				.text(domestic)
      				.css({ width: domesticWidth,
          				backgroundColor: "skyblue"
          				 })
      				.appendTo(row);
                
      $("body").append(row);
	
	 i++;
}

});