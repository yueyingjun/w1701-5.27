$(function () {
    var guan=$(".guanbi a");
    guan.click(function(){
        $(".loginbox").css("display","none");
    })
    $(".nav-login a").click(function(){
        $(".loginbox").css("display","block");
    });



})