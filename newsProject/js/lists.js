$(function(){

    // banner
    var banner_pics=document.querySelectorAll(".banner li img");
    var bannerbox=document.querySelector(".banner");

    var comeon;
    Array.from(banner_pics).forEach(function(ele,index){

        //控制快速鼠标移过效果
        hover(ele,function(){
            clearTimeout(comeon);
            comeon=setTimeout(function(){
                num++;
                num=index;
                for(var i=0;i<banner_pics.length;i++){
                    banner_pics[i].style.opacity=0.5;
                    banner_pics[i].style.zIndex=2;
                }
                ele.style.opacity=1;
                ele.style.zIndex=100;

            },300);
        },function(){

        })
    })

    //自动播放

    var num=0;
    function move(){
        num++;

        if(num==banner_pics.length){
            num=0;
        }
        for(var i=0;i<banner_pics.length;i++){
            banner_pics[i].style.zIndex=2;
            banner_pics[i].style.opacity=0.5;
        }
        banner_pics[num].style.zIndex=100;
        banner_pics[num].style.opacity=1;
    }

    var stop=setInterval(move,2000);
    bannerbox.onmouseover=function(){
        clearInterval(stop);//清除setInterval()
    }
    bannerbox.onmouseout=function(){
        stop=setInterval(move,2000);
    }

    // 导航
    var as=document.querySelectorAll("nav span a");
    $("nav").delegate("a","click",function(){
        var a=  $(this);
        for(var i=0;i<as.length;i++){
            as[i].style.background="";
        }
        a.css("background","#D0011D");
    })
    $(".totop").click(function(){
        animate(document.body,{scrollTop:0},100);
    })
})

