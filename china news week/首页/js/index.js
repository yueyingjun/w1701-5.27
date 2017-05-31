window.onload=function () {
   // 登录
    var btn=document.querySelector(".search li .a1");
    var dlbox1=document.querySelector(".dlbox");
    var flag1=document.querySelector(".dlbox .flag");
    btn.onclick=function () {
        dlbox1.style.display="block";
    }
    flag1.onclick=function () {
        dlbox1.style.display="none";
    }
    //注册
    var zc1=document.querySelector(".dl .zc .a1");
    var zcbox1=document.querySelector(".zcbox");
    var back=document.querySelector(".zcbox .zczi .a2");
    var flag2=document.querySelector(".zcbox .flag");
    zc1.onclick=function () {
        dlbox1.style.display="none";
        zcbox1.style.display="block";
    }
    back.onclick=function () {
        dlbox1.style.display="block";
        zcbox1.style.display="none";
    }
    flag2.onclick=function () {
        zcbox1.style.display="none";
    }

    // banner轮播
    Zlunbo(".banner a",".bannertu",".lbd span","#e50020",3000,500,"#fff",type=1);

    // 返回顶部
    const btn2=$(".top")[0];
    	let obj=floor();
    	btn2.onclick=function(){
    		animate(obj,{scrollTop:0},500);
    	}




}