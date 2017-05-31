var rgd=$(".lo");
var t=rgd.eq(2).offset().top;
$(window).scroll(function () {

    var st=$(this).scrollTop();
    if(st>t){
        rgd.eq(2).addClass("zhong");
    }else {
        rgd.eq(2).removeClass("zhong")
    }

});
$(".dldl").click(function () {
    $(".dl").css("display","block");
    $(".dlk").css("display","block");
    $(".zc").css("display","none");

});
$(".zczc").click(function () {
    $(".dl").css("display","block");
    $(".zc").css("display","block");
    $(".dlk").css("display","none");
});
$(".fhfh").click(function () {
    $(".dl").css("display","none");
    $(".zc").css("display","none");
    $(".dlk").css("display","none");
});