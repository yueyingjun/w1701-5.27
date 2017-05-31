// 搜索栏
$(".search-input").focus(function () {
    $(".inner").css("display","block");
}).blur(function () {
    $(".inner").css("display","none");
})
// 登录 注册
$(".login").click(function () {
    $(".mask").css("display","block");
    $(".registh").css("display","block");
    $(".registh .btn-login").css({"background":"#4bb0f7","color":"#fff"});
});
$(".regist").click(function () {
    $(".mask").css("display","block");
    $(".registh").css("display","block");
    $(".registh .btn-register").css({"background":"#4bb0f7","color":"#fff"});
});
$(".registh .close").click(function () {
    $(".mask").css("display","none");
    $(".registh").css("display","none");
    $(".registh .btn-login").css({"background":"","color":""});
    
})
$(".btn-register").click(function () {
    $(".registh .btn-login").css({"background":"#4bb0f7","color":"#fff"});
    $(".registh .btn-register").css({"background":"","color":""});
})
//轮播
function bn(pic,lun) {
  lun.click(function () {
      var index = $(this).index();
      //把所有有active的元素去掉active,给当前正在点击的元素添加active
      lun.filter(".act").removeClass("act").end().eq(index).addClass("act");
      //banner操作同上
     pic.filter(".act").removeClass("act").end().eq(index).addClass("act");
      num=index;//解决鼠标再次移入问题
  });
    var t=setInterval(move,2000);
    var num=0;
    function move() {
        num++;
       if(num==pic.length) {
           num=0;
       }
        if(num==-1) {
            num=pic.length-1;
        }
        //把所有有active的元素去掉active,给当前正在点击的元素添加active
        lun.filter(".act").removeClass("act").end().eq(num).addClass("act");
        //banner操作同上
        pic.filter(".act").removeClass("act").end().eq(num).addClass("act");
    }
    pic.hover(function () {
       clearInterval(t)
    },function () {
        t=setInterval(move,2000);
    })
}
bn($(".bn .banner a"),$(".bn .lunbo li"));
//导航
$(".nav-con .list .choose").click(function () {
    var index = $(this).index();
    $(".list .choose").filter(".active").removeClass("active").end().eq(index).addClass("active");
})
var flag=true;
$("nav .down").click(function () {
    if(flag){
        $("nav .down .icon").html("&#xe61d;")
        $(".down-list").css("display","block") 
    }else{
        $("nav .down .icon").html("&#xe621;")
        $(".down-list").css("display","none")
    }
     flag=!flag;
})
