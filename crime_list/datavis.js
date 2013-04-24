$(function() {
  console.log(crimes.meta);
  console.log(crimes.data);
  
  var i = 0;
  while(i < 100) {
    
    var crime = crimes.data[i];
    var neighborhood = crime[22];
    var description = crime[42];
    var code = crime[41];
    var xcord = parseInt(crime[34],10);
    var ycord = parseInt(crime[35],10);
    //parseInt is used for numbers 
    
    var div = $("<div>").text(neighborhood)
    $("body").append(div);
    
    console.log(neighborhood);
    console.log(description);
    console.log(code);
    console.log(xcord);
    console.log(ycord);
    
    
    i++;
  }
  
});