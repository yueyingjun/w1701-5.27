window.onload=function () {
    var title=$(".title-list a:not(.more)");
    title.mouseover(function () {
        title.removeClass("current");
        $(this).addClass("current");
        $(".top").addClass("current");
    })

    // banner部分
    var banimg=$(".ban-img li");
    var dian=$(".dian li");
    var num=0;
    dian.click(function () {
        var index=banimg.index(this);
        num=index;
        dian.filter(".active1").removeClass("active1").end().filter(this).addClass("active1");
        banimg.filter(".avtiveimg").removeClass("avtiveimg").end().eq(index).addClass("avtiveimg");
    })
    var t=setInterval(move,3000);
    function move() {
        num++;
        if(num>dian.length-1){
            num=0;
        }
        if(num<0){
            num=dian.length-1;
        }
        dian.filter(".active1").removeClass("active1").end().eq(num).addClass("active1");
        banimg.filter(".avtiveimg").removeClass("avtiveimg").end().eq(num).addClass("avtiveimg");
    }
    /*$(".top-banner").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,3000);
    })*/
    $(".prev").click(function () {
        num-=2;
        move();
    })
    $(".next").click(function () {
        move();
    })
}

