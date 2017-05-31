var lubtn=$(".future-lunbo li");
var tup=$(".future-piture .item");
var bigbox=$(".future-example");
    lubtn.click(function () {
        var index=$(this).index();
       // num=index;
        lubtn.filter(".active").removeClass("active").end().filter(this).addClass("active");
        tup.filter(".active").removeClass("active").end().eq(index).addClass("active");
    });
var num=0;
var t=setInterval(move,3000);
function move() {
    num++;
    if(num==lubtn.length){
        num=0;
    }
    if(num<0){
        num=lubtn.length-1;
    }
    lubtn.filter(".active").removeClass("active").end().eq(num).addClass("active");
    tup.filter(".active").removeClass("active").end().eq(num).addClass("active");
}
bigbox.hover(function () {
    clearInterval(t);
},function () {
    t=setInterval(move,3000)
});
    $(".future-left").click(function () {
        num-=2;
        move();
    });
    $(".future-right").click(function () {
        move();
    });


var hezi=document.querySelector(".future-demo");
var demotup1=document.querySelector(".demotup1");
var demolbbtn=document.querySelectorAll(".demolb .yuan span");
demolbbtn.forEach(function (ele,index) {
    num1=index;
    ele.onclick=function () {
        move1();
    }
});
var num1=0;
var t1=setInterval(move1,5000);
function move1() {
    num1++;
    if(num1==3){
        num1=0;
        demotup1.style.marginLeft=0;
    }
    for(var i=0;i<demolbbtn.length;i++){
        demolbbtn[i].style.background="#ccc";
        demotup1.style.marginLeft=num1*-359+"px";
    }
    demolbbtn[num1].style.background="#666";
}