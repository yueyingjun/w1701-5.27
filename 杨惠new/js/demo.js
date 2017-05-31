$(function () {
    $(".nav ul li").click(function () {
        var index=$(".nav ul li").index(this);
        $(".nav ul li").filter(".active").removeClass("active").end().eq(index).addClass("active");
        $(".nav ul li a").filter(".actives").removeClass("actives").end().eq(index).addClass("actives")
    })
    $(".more").mouseover(function () {
        $(".nav2 .navs").css("height","200px")
    })
    $(".more").mouseout(function () {
        $(".nav2 .navs").css("height","0")
    })
    //闭包
   for(var i=0;i<$(".nav ul li").length;i++){
       (function (i) {
           $(".nav ul li").eq(i).click(function () {
               for(var j=0;j<$(".nav ul li").length;j++){
                   $("section .floor").eq(j).css("display","none");
                   $("section .floor").eq(i).css("display","block");
               }
           })

       })(i)
   }
    //轮播图
    $(".yh-lunbo .yh-lunbos").mouseover(function () {
        var index=$(".yh-lunbo .yh-lunbos").index(this)
        num=index;
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
            $(".nav").addClass("scorllnav")
            $(".dingbu").css({width:40,marginLeft:"42%",height:"40px"})
        }else{
            $(".nav").filter(".scorllnav").removeClass("scorllnav")
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
    //text
    $(".text").focusin(function () {
        $(".content").css("display","block")
    }).focusout(function () {
        $(".content").css("display","none")
    })
    //login
    $(".login").click(function () {
        $(".login-detail").css("display","block");
        // alert(1)
    })
    //正则
    var reg=/^([0-9a-zA-Z]{3})$/
    var reg2=/^[0-9a-zA-Z]{6}$/
    $("#text").blur(function () {
        var value=$(".yonhhu input").val()
        console.log(value)
        if(reg.test(value)){
            $(".yonhhu .true").css("display","block")
            $(".yonhhu .false").css("display","none")
        }else{
            $(".yonhhu .true").css("display","none")
            $(".yonhhu .false").css("display","block")
            $(this).css("border","1ps solid red")
        }
    })
    $("#mima").blur(function () {
        var value=$(".password input").val()
        console.log(value)
        if(reg2.test(value)){
            $(".password .true").css("display","block")
            $(".password .false").css("display","none")
        }else{
            $(".password .true").css("display","none")
            $(".password .false").css("display","block")
            $(this).css("border","1ps solid red")
        }
    })

//返回顶部
    $(".top").click(function () {
        $(document.body).animate({scrollTop:"0"})
    })
    //close
    $(".close").click(function () {
        // alert(1)
        $(".login-detail").css("display","none")
    })
})//结束