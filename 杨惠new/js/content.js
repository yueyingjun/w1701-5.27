//轮播图
$(function () {
    $(".yh-lunbo .yh-lunbos").mouseover(function () {
        var index=$(".yh-lunbo .yh-lunbos").index(this)
        index=num;
        console.log(index)
        $(".yh-listli").filter(".active").removeClass("active").end().eq(index).addClass("active")
        $(".yh-lunbos").filter(".actives").removeClass("actives").end().eq(index).addClass("actives")
    })
    var num=0;
    move=function () {
        num++;
        if(num==$(".yh-lunbos").length){
            num=0;
        }
        $(".yh-listli").filter(".active").removeClass("active").end().eq(num).addClass("active")
        $(".yh-lunbos").filter(".actives").removeClass("actives").end().eq(num).addClass("actives")
    }
    var t=setInterval(move,2000)
    $(".lunbo").hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(move,2000)
    })
    var flag1=true;var flag2=true;
    $(window).scroll(function () {
        var st=$(this).scrollTop();
        if(st>400){
            // $(".nav").addClass("scorllnav")
            $(".dingbu").css({width:40,marginLeft:"42%",height:"40px"})
        }else{
            // $(".nav").filter(".scorllnav").removeClass("scorllnav")
            $(".dingbu").css({width:0,marginLeft:"50%",height:"0px"})
        }
        /*if(st>1000){.
         if(flag1){
         flag1=false;flag2=true;
         $(".leftlan").animate({width:36,height:538});//左边小楼层
         }
         }else{
         if(flag2){
         flag2=false;flag1=true;
         $(".leftlan").animate({width:0,height:0});//左边小楼层
         }
         }*/

    })
    //顶部
    $(".top").click(function () {
      $(document.body).animate({scrollTop:0})
    })
})
