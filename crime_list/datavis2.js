$(function() {
  console.log(crimes.meta);
  console.log(crimes.data);
  
  var i = 0;
  var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  while(i < 100) {
    
    var crime = crimes.data[i];
    var x = parseFloat(crime[34],10);
    var y = parseFloat(crime[35],10);
    
    if(x < minX) { minX = x; }
	if(x > maxX) { maxX = x; }
	if(y < minY) { minY = y; }
	if(y > maxY) { maxY = y; }
    
    i++;
  }
  
    console.log([minX, maxY, minY, maxY]);
  
 var i = 0;
  while(i < crimes.data.length) {
    
    var crime = crimes.data[i];
    var neighborhood = crime[22];
    var description = crime[42];
    var code = crime[41];
    var x = parseFloat(crime[34],10);
    var y = parseFloat(crime[35],10);
    //parseInt is used for numbers 
    
    var diffX = maxX - minX;
	var screenX =  (x - minX) / diffX * 500;
	
	var diffY = maxY - minY;
	var screenY =  (y - minY) / diffY * 500;
    
    var div = $("<div>").css({
    	position: "absolute", width: 5, height: 5,
    	backgroundColor: "red",
    	left: screenX, top: screenY
 		}).attr("title", neighborhood + code);
 	$("body").append(div);
    
    
   i++;
  }
});