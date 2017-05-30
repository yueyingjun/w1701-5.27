$(function () {
    //导航栏选项卡
    $(".js-show-menu").hover(function () {
        $(".menu-box").css("display","block").css("opacity","1");

    },function () {
        $(".menu-box").css("display","none").css("opacity","0");
    })
    $(".js-app-guide").hover(function () {
        $(".app-guide-box").css("display","block").css("opacity","1");
    },function () {
        $(".app-guide-box").css("display","none").css("opacity","0");
    })
//    登录
    console.log($(".js-open-register"));
    $(".js-login").click(function () {
        $("#login-modal").css("display","block").css("background","rgba(0,0,0,0.5)");
        $(".login").css("display","block");
        $(".icon-alert-close").click(function () {
            $("#login-modal").css("display","none");
            $(".login").css("display","none");
        })
        $(".js-open-register").click(function () {
            $(".login").css("display","none");
            $(".zhuce").css("display","block");
        })
    })
//    注册
    $(".js-register").click(function () {
        $("#login-modal").css("display","block").css("background","rgba(0,0,0,0.5)");
        $(".zhuce").css("display","block");
        $(".icon-alert-close").click(function () {
            $("#login-modal").css("display","none");
            $(".zhuce").css("display","none");
        })
        $(".js-user-login").click(function () {
            $(".zhuce").css("display","none");
            $(".login").css("display","block");
        })
    })
//    底部
    var arrColor=["#F74864","#1EC354","#7B8894","#93E64F","#3091F4"];

    $("footer .footer-icon-list ul li").hover(function () {
        var index=$("footer .footer-icon-list ul li").index($(this));
        $(this).css("background",arrColor[index]);
    },function () {
        $(this).css("background","");
    })

//    回顶部
    $(".i-top").click(function () {
        $("body").animate({scrollTop:0},500);

    })
})