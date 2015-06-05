$(document).ready(function(){
	var tagHovered = true;
	$("#social-icon-bookmark").click(function(){
		if(tagHovered){
			//$(".bookmark").css("right", "0px");
			$(".bookmark").animate({
				right: "0px"
			}, 200, function(){
			   //complete	
			});
			tagHovered = false;
		}
		else{
			$(".bookmark").animate({
				right: "-62px"
			}, 200, function(){
			   //complete	
			});
			tagHovered = true;
		}

	});
});