$(function(){
	homeObject.navbarClickInit();
})

var homeObject={
	navbarClickInit:function(){
		$("#home_navbar a").click(function(){
			homeObject.changeNavBar($(this));
		});
	},
	changeNavBar:function(obj){
		$("#home_navbar").find("li").removeClass("active");
		obj.parent().addClass("active");
	}

}
