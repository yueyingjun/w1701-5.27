var banner=$(".banner-box .t2");
var btns=$(".banner-box ul li");
var bannerbox=$(".banner-box");
btns.click(function () {
    var index=btns.index(this);
    btns.filter(".tts").removeClass("tts").end().filter(this).addClass("tts");
    banner.filter(".active").removeClass("active").end().eq(index).addClass("active");
    num=index;
});
var num=0;
var t=setInterval(move,2000);
function move() {
    num++;
    if(num>=btns.length){
        num=0
    }
    if(num<0){
        num=btns.length-1
    }
    btns.filter(".tts").removeClass("tts").end().eq(num).addClass("tts");
    banner.filter(".active").removeClass("active").end().eq(num).addClass("active");
}
bannerbox.hover(function () {
    clearInterval(t);
},function () {
    t=setInterval(move,2000)
});