    
    var body=document.querySelector('body');
    var container=document.querySelector('.container');
    var video=document.querySelector('video');
    var start=document.querySelector('.start');
    var reload=document.querySelector('.reload');
    var startflag=true;
    var progress=document.querySelector('.progress');
    var inner=document.querySelector('.inner');
    var nows=document.querySelector('.time #now');
    var all=document.querySelector('.time #all');
    var l=progress.offsetWidth;
    var volume=document.querySelector('.volume');
    var volumespan=document.querySelector('.volume span');
    var mask=document.querySelector('.mask');
    var mask11=document.querySelector('.mask11');
    var kuai=document.querySelector('.kuai');
    var fullscreen=document.querySelector('.fullscreen');
    start.onclick=function () {
        if(startflag){
            video.play();
            start.innerHTML='&#xe614;';
        }
        else{
            video.pause();
            start.innerHTML='&#xe62a;';
        }
        startflag=!startflag;
    }
    reload.onclick=function () {
        video.load();
        start.innerHTML='&#xe614;';
        video.play();
        startflag=false;
    }
    var duration=0;
    var now=0;
    video.oncanplay=function () {
        duration=video.duration;
        all.innerHTML=time(duration);
        nows.innerHTML=00+':'+00;
    }
    video.ontimeupdate=function () {
        now=video.currentTime;
        var width=now/duration;
        inner.style.width=width*100+'%';
        nows.innerHTML=time(now);
    }
    function time(t) {
        var mins=Math.floor(t/60);
        var secs=Math.floor(t%60);
        return mins+':'+(secs<10?'0'+secs:secs);
    }
    progress.onmousedown=function (e) {
        l=progress.offsetWidth;
        var ox=e.offsetX;
        var bili=ox/l;
        video.currentTime=bili*duration;
        document.onmousemove=function (e) {
            var ox=e.clientX-progress.offsetLeft;
            var bili=ox/l;
            video.currentTime=bili*duration;
        }
        document.onmouseup=function () {
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }
    hover(volume,function () {
        mask.style.display='block';
    },function () {
        mask.style.display='none';
    })
    function aaa(e) {
        var oy=e.offsetY;
        oy=oy>100?100:oy;
        kuai.style.marginTop=oy+'px';
        var a=1-oy/100;
        video.volume=a;
        if(a==0){
            volumespan.innerHTML='&#xe621;';
        }
        else{
            volumespan.innerHTML='&#xe691;';
        }
    }
    mask11.onmousedown=function (e) {
        aaa(e);
        mask11.onmousemove=function (e) {
            aaa(e);
        }
        mask11.onmouseup=function () {
            mask11.onmousemove=null;
            mask11.onmouseup=null;
        }
    }
    var volumeflag=true;
    volumespan.onclick=function () {
        if(volumeflag){
            volumespan.innerHTML='&#xe621;';
            video.muted=true;
        }
        else{
            volumespan.innerHTML='&#xe691;';
            video.muted=false;
        }
        volumeflag=!volumeflag;
    }
    var screenflag=true;
    fullscreen.onclick=function () {
        if(screenflag){
            fullscreen.innerHTML='&#xe64e;';
            container.style.width=100+'%';
            container.style.height=100+'%';
        }
        else{
            fullscreen.innerHTML='&#xe638;';
            container.style.width=600+'px';
            container.style.height=400+'px';
        }
        screenflag=!screenflag;
    }
    var videoflag=true;
    video.ondblclick=function () {
        if(videoflag){
            fullscreen.innerHTML='&#xe64e;';
            container.style.width=100+'%';
            container.style.height=100+'%';
        }
        else{
            fullscreen.innerHTML='&#xe638;';
            container.style.width=600+'px';
            container.style.height=400+'px';
        }
        videoflag=!videoflag;
    }
    window.onkeydown=function (e) {
        if(e.keyCode==27){
            fullscreen.innerHTML='&#xe638;';
            container.style.width=600+'px';
            container.style.height=400+'px';
        }
    }

    