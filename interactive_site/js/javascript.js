$(document).ready(function() {
	
	$("#second-page").hide();
	$("#third-page").hide();
	
	 $("#breakfast-selector > img").on("click",function(){
   	 $("#second-page").show(); 
   	 $("#third-page").hide();
     $(".course > div").hide()
     $("#breakfast").show();
	});
	
	$("#lunch-selector > img").on("click",function(){
   	 $("#second-page").show(); 
   	 $("#third-page").hide();
     $(".course > div").hide()
     $("#lunch").show();
	});
	
	$("#dinner-selector > img").on("click",function(){
   	 $("#second-page").show();
   	 $("#third-page").hide(); 
     $(".course > div").hide()
     $("#dinner").show();
	});
	
	$("#crisp > img").on("click",function(){
   	 $("#third-page").show(); 
     $(".recipes > div").hide()
     $("#recipe-crisp").show();
	});
	
	$("#pancake > img").on("click",function(){
   	 $("#third-page").show(); 
     $(".recipes > div").hide()
     $("#recipe-pancake").show();
	});
	
	$("#parfait > img").on("click",function(){
   	 $("#third-page").show(); 
     $(".recipes > div").hide()
     $("#recipe-parfait").show();
	});
	
	$("#burrito > img").on("click",function(){
   	 $("#third-page").show(); 
     $(".recipes > div").hide()
     $("#recipe-burrito").show();
	});
	
	$(".ingredients > h3").on("click",function(){
		$(".ingredients-content").hide()
		$(".ingredients-content > ul").show();
	});

 });
 
 
 