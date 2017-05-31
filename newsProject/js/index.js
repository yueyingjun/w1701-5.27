$(function () {
    var bannerbox=document.querySelector(".fz");   //banner盒子
    var pictures=document.querySelectorAll(".fz li");	//banner图片

    var currentPage=document.querySelector(".fz .page span");   //当前页数
    var page_cons=document.querySelectorAll(".fz li p")
    var pre=document.querySelector(".pre");
    var next=document.querySelector(".next");
    var num=0;
    var pic0=pictures[0];
    var len1=pictures.length;
    var index=10;
    function move(){
        num++;
        if(num>=len1){
            num=0;
        }

        for(var i=0;i<len1.length;i++){
            pictures[i].style.zIndex=2;
            pictures[i].style.opacity=0.5;
            page_cons[i].style.zIndex=10;
            page_cons[i].style.opacity=0;

        }
        pictures[num].style.zIndex=index++;
        pictures[num].style.opacity=1;
        currentPage.innerHTML=num+1;
        page_cons[num].style.zIndex=20;
        page_cons[i].style.opacity=1;
        // pic0=pictures[num];
    }

    var stop=setInterval(move,2000);
    bannerbox.onmouseover=function(){
        clearInterval(stop);//清除setInterval()
    }
    bannerbox.onmouseout=function(){
        stop=setInterval(move,2000);
    }
    pre.onclick=function(){
        if(num<0){
            num=len1-1;
        }
        num-=2;
        move();
    }
    next.onclick=function () {
        move();
    }
})