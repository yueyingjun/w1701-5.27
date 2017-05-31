$(function () {
    $("#submit").click(function () {
        $(".mask").css("display","block");
        $(".login").css("display","block");
    })
    $(".once-zhuce").click(function () {
        $(".login").css("display","none");
        $(".zhuce").css("display","block");
    })
    $(".item-login").click(function () {
        $(".mask").css("display","none");
    })
    $(".item-zhuce").click(function () {
        $(".login").css("display","block");
    })
    $(".yy-login").click(function () {
        $(".login").css("display","block");
    })
})