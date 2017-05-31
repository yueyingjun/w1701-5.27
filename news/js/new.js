window.onscroll=function () {
    var left =document.querySelector(".n-left");
    var l1 =document.querySelector(".n-left1");
    var header=document.querySelector("header");
    var b=document.querySelector(".banner2");
    var st=document.body.scrollTop;
    if(st>36){
        header.style.top=-34+"px";
        left.style.top=0;
        l1.style.top=0;
        b.style.top=0;
    }else {
        header.style.top=0+"px";
        left.style.top=40+"px";
        l1.style.top=100+"px";
        b.style.top=-52+"px";
    }
}
