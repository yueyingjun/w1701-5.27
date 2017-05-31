/**
 * Created by Administrator on 2017/5/30.
 */
$(function () {
    let imgs=document.querySelectorAll(".banner li");
    let lis=document.querySelectorAll(".yuan li");
    let banner=document.querySelector(".box");
    let p=document.querySelectorAll('.dir p');
    let now=0;
    let next=0;
    let flag=true;

    $('.box').hover(function () {
        $('.dir p').show();
    },function () {
        $('.dir p').hide();
    });
    let t=setInterval(move,2500);
    function move(){
        next=now+1;
        if(next>imgs.length-1){
            next=0
        }
        imgs[next].style.left="100%";
        let width=parseInt(window.getComputedStyle(banner,null).width);
        animate(imgs[now],{left:-width},600);
        animate(imgs[next],{left:0},600,function(){
            flag=true
        });
        lis[now].classList.remove("first");
        lis[next].classList.add("first");
        now=next;
    }
    banner.onmouseover=function(){
        clearInterval(t)
    };
    banner.onmouseout=function(){
        t=setInterval(move,2500)
    };

    //箭头

    p[1].onclick=function(){
        if(flag){
            flag=false;
            move();
        }

    };
    p[0].onclick=function(){
        if(flag){
            flag=false;
            next=now-1;
            if(next<0){
                next=imgs.length-1;
            }
            imgs[next].style.left="-100%";
            let width=parseInt(window.getComputedStyle(banner,null).width);
            animate(imgs[now],{left:width},500);
            animate(imgs[next],{left:0},500,function(){
                flag=true
            });
            lis[now].classList.remove("first");
            lis[next].classList.add("first");
            now=next;
        }

    };

// 圆点
    let　delay;
    lis.forEach(function(value,index){
        value.onmouseover=function(){
            delay=setTimeout(function(){
                if(index>now){
                    imgs[index].style.left="100%";
                    let width=parseInt(window.getComputedStyle(banner,null).width);
                    animate(imgs[now],{left:-width},500);
                    animate(imgs[index],{left:0},500)
                }
                if(index<now){
                    imgs[index].style.left="-100%";
                    let width=parseInt(window.getComputedStyle(banner,null).width);
                    animate(imgs[now],{left:width},500);
                    animate(imgs[index],{left:0},500)
                }
                lis[now].classList.remove("first");
                lis[index].classList.add("first");
                now=index;
            },200)
        };
        value.onmouseout=function(){
            clearTimeout(delay)
        }
    });


//    选项卡
    let li=$(".check li");
    li.click(function () {
        let index=$(this).index();
        $(".check li div").removeClass('first').eq(index).addClass('first');
        $('.container').removeClass('action').eq(index).addClass('action');
    })
});
