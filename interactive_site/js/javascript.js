$(document).ready(function() {

	$("#crisp > img").on("click",function(){
   		$(".recipes > div").hide()
    	$("#recipe-crisp").show();
	});
	
	$("#breakfast-selector > img").on("click",function(){
		$(".course > div").hide()
		$("breakfast").show();
	});
	

 });