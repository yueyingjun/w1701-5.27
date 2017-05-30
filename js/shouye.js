window.onload=function () {
    var delu=document.querySelector(".delu");
    var zhuce=document.querySelector(".zhuce");
    var markbg=document.querySelector(".markbg");
    var markbg1=document.querySelector(".markbg1");
    var closebtn=document.querySelector(".closebtn");
    var closebtn1=document.querySelector(".closebtn1");


    zhuce.onclick=function () {
        markbg1.style.display="block";
    }
    closebtn1.onclick=function () {
        markbg1.style.display="none";
    }


    delu.onclick=function () {
        markbg.style.display="block";
    }
    closebtn.onclick=function () {
        markbg.style.display="none";
    }























}