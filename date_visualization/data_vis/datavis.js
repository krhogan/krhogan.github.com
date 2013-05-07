$(function() {
		var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      





  //console.log(violations.meta);
  //console.log(violations.data);
  var locations = {}
  var i = 0;
  while(i < violations.data.length) {
    
    var fails = violations.data[i];
    (function(violations) {
    var restaurant = fails[8];
    var comments = fails[26];
    var description = fails[22];
    //var type = fails[18];
    //var date = parseInt([14]);
    
    var lat = parseFloat(fails[27][1]);
    var lon = parseFloat(fails[27][2]);
    var id = lat + "" + lon; 
    if(locations[id]){
   		locations[id].push(fails); 
    } else {
    locations[id]=[fails];
    
    //console.log(lat);
  	//console.log(lon);
  	
  	var addressString = fails[27][0];
	var city = JSON.parse(addressString).city;
	
	console.log(city)
  	
  	var contentString = '<div id="pop-up">' + restaurant + comments + description + '</div>';
 
  	var infowindow = new google.maps.InfoWindow({
    content: contentString
	});
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lon),
        title: "MassArt",
        map: myMap
        });
        
    
    google.maps.event.addListener(marker, 'click', function() {
  	infowindow.open(myMap,marker);
	});

    
    }
    }(violations));
    i++;
  }
  
});