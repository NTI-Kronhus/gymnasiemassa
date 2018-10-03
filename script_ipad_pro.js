var program;

function hide_all(){
	$(".plan_TE").hide();
	$(".plan_HA").hide();
	$(".plan_NA").hide();
	$(".plan_IT").hide();
	$(".plan_EK").hide();
	$(".dimmer").hide();
	$(".program").hide();
	$(".HA_schema").hide();
	$(".TE_schema").hide();
	$(".IT_schema").hide();
	$(".NA_schema").hide();
	$(".EK_schema").hide();
}

function create_schema(){
	$("[data-time]").each(function(){
		var time = $(this).data('time');
		var after = $(this).data('after');
		var before = $(this).data('before');
		var height = time*8.2/60-0.1;
		var margin_after = after*8.2/60;
		var margin_before = before*8.2/60-0.1;
		$(this).css("height",height+"vh");
		$(this).css("line-height",(height)+"vh");
		$(this).css("margin-bottom",margin_after+"vh");
		$(this).css("margin-top",margin_before+"vh");
	});
}

$(document).ready(function(){
	hide_all();
	create_schema();
	
	$(".choser").click(function(){
		if($(".choser").css("opacity") != "1"){
			return;
		}
		program = $(this).attr("class").substr(7,2);
		$("#"+program).show();
		$("#"+program).animate({opacity:"1"},"slow");		
		$(".choser").animate({opacity: "0"},"slow");
		alert("ipad.js");
		$(".NTI_logo").animate({width:"-=36vw",height:"-=8vw",marginLeft:"+=65vw",marginTop:"+=30vh"},"slow");
	});
	
	$(".NTI_logo").click(function(){
		if($("#"+program).css("opacity") != "1"){
			return;
		}
		$("#"+program).animate({opacity:"0"},"slow",function(){
			$("#"+program).hide();
		});
		$(".choser").animate({opacity: "1"},"slow");	
		$(".NTI_logo").animate({width:"+=36vw",height:"+=8vw",marginLeft:"-=65vw",marginTop:"-=30vh"},"slow");
	});
	
	$(".plan_dbl").click(function(){
		$(".plan_"+program).fadeOut();
		$(".dimmer").fadeOut();
	});
	
	$(".plan").click(function(){
		if($("#"+program).css("opacity") != "1"){
			return;
		}
		$(".plan_"+program).fadeIn();
		$(".dimmer").fadeIn();
	});
	
	$(".schedule").click(function(){
		if($("#"+program).css("opacity") != "1"){
			return;
		}
		$("."+program+"_schema").fadeIn();
		$(".dimmer").fadeIn();
	});
	
	
	
	
	$(".dimmer").click(function(){
		$("."+program+"_schema").fadeOut();
		$(".dimmer").fadeOut();
	});
	
	$(".schema").click(function(){
		$("."+program+"_schema").fadeOut();
		$(".dimmer").fadeOut();
	});
	
	$(".interest").click(function(){
		window.location.href = "https://www.ntigymnasiet.se/kronhus/intresseanmalan/";
	});
	
});