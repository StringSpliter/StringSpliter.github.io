$(function(){
	homeObject.navbarClickInit();
	homeObject.narImgClickInit();
	homeObject.bindWindowResize();
	homeObject.narLinkDonClickInit();
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
	},
	narImgClickInit:function(){
		$("#link_img a").click(function(){
			homeObject.clearPopBox();
			if($(this).attr("isBox")=='yes'){
				if($(this).attr("active")=="no"){
					$("#narImg .popover-title").html("扫码，加我微信～");
					$("#narImg img").attr("src","../src/img/wechat.jpg");
					homeObject.popBoxConvert($(this));
					$(this).attr("active","yes");
					$("#narImg").removeClass("out");
					$("#narImg").addClass("in");
				}else{
					$("#narImg").removeClass("in");
					$("#narImg").addClass("out");
					$("#narImg img").attr("src","");
					$(this).attr("active","no");
				}
			}
		});
	},
	narLinkDonClickInit:function(){
		$("#nar_link a").click(function(){
			homeObject.clearPopBox();
			if($(this).attr("isBox")=='yes'){
				if($(this).attr("active")=="no"){
					$("#narImg .popover-title").html("扫码，犒赏我～");
					$("#narImg img").attr("src","../src/img/wechatpay.jpg");
					homeObject.popBoxConvert($(this));
					$(this).attr("active","yes");
					$("#narImg").removeClass("out");
					$("#narImg").addClass("in");
				}else{
					$("#narImg").removeClass("in");
					$("#narImg").addClass("out");
					$("#narImg img").attr("src","");
					$(this).attr("active","no");
				}
			}
		});
	},
	clearPopBox:function(){
		$("#narImg").removeClass("in");
		$("#narImg").addClass("out");
		$("#narImg img").attr("src","");
		$("#home_navbar a[isBox='yes']").attr("active","no");
	},
	popBoxConvert:function(obj){
			var x = obj.offset().top;
			var y = obj.offset().left;
			var x_con = obj.outerHeight();
			var y_con = $("#narImg").outerWidth();
			var _x = x+x_con;
			var _y = y-((y_con-obj.outerWidth())/2);
			$("#narImg").css("top",_x+"px");
			$("#narImg").css("left",_y+"px");
	},
	bindWindowResize:function(){
		$(window).resize(function () {       
			var obj = $("#link_img a[active='yes']");
			if(obj){
				homeObject.popBoxConvert(obj);
			}
			var _obj = $("#nar_link a[active='yes']");
			if(_obj){
				homeObject.popBoxConvert(_obj);
			}
		});
	}
	
}
