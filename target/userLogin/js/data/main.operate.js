$(function(){
	//搜索框监听
	
});

var params = {};
/*
 * 搜索框事件绑定
 * */
$("#topSearch").on("keypress",function(event){
	if(event.keyCode == 13) {  
        search();
		alert(ctx);
        
    }  
});


$("a[class='J_menuItem']").on("click",function(){
	
	var numType = $(this).attr("name");
	
	//输入框为空
	if( checkKeyword() ){
		var _href = "../data/docuPublication?keyword="+params.keyword;
		 if( numType.indexOf("Get") === -1 ){
			 params.numType = numType;
			 params.type = "GetAttention";
			 _href += "&type=" + params.type + "&numType=" + params.numType;
		 }else{
			 params.type = numType;
			 _href += "&type=" + params.type;
		 }
		 console.log(_href);
		 $(this).attr("href",_href);
		 n($(this));
		 
	}else{
	
		 swal({
        	 title:"发生了森摸？"+numType,
             type: "warning",
         });
         return;
		 //getData(keywoord,'','')
	}
});
	

function checkKeyword(){
	var isExists = true;
	var keyword =$.trim( $("#topSearch").val() );
	alert(keyword);
	//输入框为空
	if(keyword === null || keyword === '' || keyword === undefined || keyword ==='undefined'){
		isExists = false;
	}else{
		if( params.keyword != keyword ){
			params.keyword = keyword;
			alert(params.keyword);
			
		}
	}
	return isExists;
}


/*搜索框搜索*/
function search(){
	
	//输入框为空
	if( checkKeyword() ){
		 swal({
			   title: "太帅了",
           text: "小手一抖就输入了关键词"+numType,
           type: "success"
     });
		
	}else{
		//getData( $.trim($("#topSearch").val()));
		toastr.options = {
					  "closeButton": true,
					  "debug": false,
					  "progressBar": true,
					  "positionClass": "toast-top-right",
					  "onclick": null,
					  "showDuration": "100000000000000",
					  "hideDuration": "1000",
					  "timeOut": "7000000000000000000000",
					  "extendedTimeOut": "1000",
					  "showEasing": "swing",
					  "hideEasing": "linear",
					  "showMethod": "fadeIn",
					  "hideMethod": "fadeOut"
					};
	toastr['warning']("Hi, welcome to Inspinia. This is example of Toastr notification box.");
	var $toast = toastr['warning']('未输入关键词', 'warning'); 

	return;
	}
	/*getCookie( keyword );*/
	
}

function getCookie(keyword){
	$.ajax({
		type: 'GET',
		url: ctx+'/data/getCookie?keyword='+keyword,
		dataType: 'json',
		
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				$("input[name='wordKey']").val(ret.data.userkey);
			}
		},
		error:function(){
			
		}
	});
}



//点击JMenuItem时调用的方法
function n(obj) {
	//获得点击的JMenuItem中的链接
    var t = $(obj).attr("href"),
    //向当前元素添加数据
    a = $(obj).data("index"),
    //获得当前元素的文本
    i = $.trim($(obj).text()),
    n = !0;
    if (void 0 == t || 0 == $.trim(t).length) return ! 1;
    if ($(".J_menuTab").each(function() {
        return $(this).data("id") == t ? ($(this).hasClass("active") || ($(this).addClass("active").siblings(".J_menuTab").removeClass("active"), e(this), $(".J_mainContent .J_iframe").each(function() {
            return $(this).data("id") == t ? ($(this).show().siblings(".J_iframe").hide(), !1) : void 0
        })), n = !1, !1) : void 0
    }), n) {
        var s = '<a href="javascript:;" class="active J_menuTab" data-id="' + t + '">' + i + ' <i class="fa fa-times-circle"></i></a>';
        $(".J_menuTab").removeClass("active");
        var r = '<iframe class="J_iframe" name="iframe' + a + '" width="100%" height="100%" src="' + t + '" frameborder="0" data-id="' + t + '" seamless></iframe>';
        $(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(r);
        var o = layer.load();
        $(".J_mainContent iframe:visible").load(function() {
            layer.close(o)
        }),
        $(".J_menuTabs .page-tabs-content").append(s),
        e($(".J_menuTab.active"))
    }
    return ! 1
}


function e(e) {
    var a = t($(e).prevAll()),
    i = t($(e).nextAll()),
    n = t($(".content-tabs").children().not(".J_menuTabs")),
    s = $(".content-tabs").outerWidth(!0) - n,
    r = 0;
    if ($(".page-tabs-content").outerWidth() < s) r = 0;
    else if (i <= s - $(e).outerWidth(!0) - $(e).next().outerWidth(!0)) {
        if (s - $(e).next().outerWidth(!0) > i) {
            r = a;
            for (var o = e; r - $(o).outerWidth() > $(".page-tabs-content").outerWidth() - s;) r -= $(o).prev().outerWidth(),
            o = $(o).prev()
        }
    } else a > s - $(e).outerWidth(!0) - $(e).prev().outerWidth(!0) && (r = a - $(e).prev().outerWidth(!0));
    $(".page-tabs-content").animate({
        marginLeft: 0 - r + "px"
    },
    "fast")
}

function t(t) {
    var e = 0;
    return $(t).each(function() {
        e += $(this).outerWidth(!0)
    }),
    e
}