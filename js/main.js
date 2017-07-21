$(function () {
    var guan=$(".guanbi a");
    guan.click(function(){
            $(".loginbox").css("display", "none");
    });
    $("body")
    $("body").delegate(".nav-login a","click",function(){
        if($(this).html()=="登录") {
            $(".loginbox").css("display", "block");
        }
    });
    $("body").delegate(".tuichu","click",function () {
        $.ajax({
            url:"tuichu.php",
            success:function (data) {
                if(data=="ok"){
                    $(".nav-login").html("<a href='javascript:;'>登录</a>");
                }
            }
        })
    })
})