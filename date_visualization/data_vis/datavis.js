$(function() {
		var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      

  //console.log(violations.meta);
  //console.log(violations.data);
  var gmarkers = [];
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
  	var contentString = '<div id="pop-up">' + '<h2>'  + restaurant + '</h2>' + '<h3>' + description + '</h3>' + '<p>' + comments + '</p>' + '</div>';
 
  	var infowindow = new google.maps.InfoWindow({
    content: contentString
	});
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lon),
        map: myMap
        });
 // === Store the category and name info as a marker properties ===
	marker.category = city;
 	gmarkers.push(marker);
 	
   google.maps.event.addListener(marker, 'click', function() {
  	infowindow.open(myMap,marker);
	});
 	
 	
 	// == shows all markers of a particular category, and ensures the checkbox is checked ==
      function show(city) {
        for (var i=0; i<violations.data.length; i++) {
          if (gmarkers[i].mycategory == city) {
            gmarkers[i].setVisible(true);
          }
        }
        // == check the checkbox ==
        document.getElementById(city+"boston").checked = true;
      }

      // == hides all markers of a particular category, and ensures the checkbox is cleared ==
      function hide(category) {
        for (var i=0; i<violations.data.length; i++) {
          if (gmarkers[i].mycategory == city) {
            gmarkers[i].setVisible(false);
          }
        }
        // == clear the checkbox ==
        document.getElementById(city+"boston").checked = false;
        // == close the info window, in case its open on a marker that we just hid
        infowindow.close();
      }

      // == a checkbox has been clicked ==
      function boxclick(boston,city) {
        if (box.checked) {
          show(city);
        } else {
          hide(city);
        }
        // == rebuild the side bar
        makeSidebar();
      }
      
      // == show or hide the categories initially ==
        //show("boston");
        //hide("backbay");
        //hide("downtown_financial_distric");
        //hide("fenway_kenmore_aububon_c");
        //hide("southboston");
        //hide("missionhill");
        //hide("allston");
        //hide("brighton");
        //hide("eastboston");
        //hide("roxbury");
        //hide("jamaicaplain");
        //hide("charlestown");
        //hide("hydepark");
        //hide("roslindale");
        //hide("dorchester");
        //hide("mattapan");


	
    
    }
    }(violations));
    i++;
  }
  
});