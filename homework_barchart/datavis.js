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
      var incidents = parseInt(info["incidents"]);
      
    //var person = data[i];
      //var name = person[8]
      //var salary = parseInt(person[11],10);

	console.log(data);
	
	var maxIncidents = 10651;
      
      // Fraction between 0 and 1
      var fraction = incidents / maxIncidents; 
      var incidentsWidth = fraction * 1000;
      
      var row = $("<div>").addClass("row");
      
      var neighborhoodDiv = $("<div>").addClass("neighborhood")
      				.text(neighborhood)
      				.css({ width: incidentsWidth,
          			})
      				.appendTo(row);
      				
      var incidentsDiv = $("<div>").addClass("incidents")
      				.text(incidents)
      				.css({ width: incidentsWidth,
          				backgroundColor: "purple"
          				 })
      				.appendTo(row);
                
      $("body").append(row);
	
	 i++;
}

});