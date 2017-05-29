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
})