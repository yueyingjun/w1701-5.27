var tus=$(".bfq .tu ul li");
tus.css("opacity",0).eq(0).css("opacity",1);
var t=setInterval(move,3000);
var num=0;
var tusl=tus.length;
var lbds=$(".bfq .lbd ul li")
function move() {

    tus.eq(num).css("opacity",0);
    lbds.eq(num).css("background","#fff");
    num++;
    if (num>=tusl){
        num=0;

    }
    tus.eq(num).css("opacity",1);
    lbds.eq(num).css("background","#6bd1b9");
    console.log(num)

}
$(".bfq").hover(function () {
    clearInterval(t);
},function () {
    t=setInterval(move,3000);
});
lbds.click(function () {
    tus.css("opacity",0);
    lbds.css("background","#fff");
    var index=$(this).index();
    $(this).css("background","#6bd1b9");
    tus.eq(index).css("opacity",1);
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