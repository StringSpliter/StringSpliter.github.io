$(function(){
	homeObject.navbarClickInit();
})

var homeObject={
	navbarClickInit:function(){
		$("#home_navbar a").click(function(){
			$("#home_navbar").find("li").removeClass("active");
			$(this).parent().addClass("active");
		});
	}

}