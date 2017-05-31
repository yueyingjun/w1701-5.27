$(function () {
    let canvas=$('canvas')[0];
    let zhezhao=$('.zhezhao')[0];
    let xian=$('.xian')[0];
    let shixian=$('.shixian')[0];
    let xuxian=$('.xuxian')[0];
    let yuan=$('.yuan')[0];
    let path=$('.path')[0];
    let shapeobj=$('.shapeobj')[0];
    let duobian=$('.duobian')[0];
    let duojiao=$('.duojiao')[0];
    let huaban=new shape(canvas,zhezhao);
    shixian.onclick=function () {
        huaban.type='shixian';
        huaban.draw();
    }
    xuxian.onclick=function () {
        huaban.type='xuxian';
        huaban.draw();
    }
    yuan.onclick=function () {
        huaban.type='yuan';
        huaban.draw();
    }
    path.onclick=function () {
        huaban.huastyle='stroke';
    }
    shape.onclick=function () {

    }
    fillcolor.onchange=function () {
        huaban.fillcolor=this.value
    }
    duobian.onclick=function () {
        huaban.num=parseInt(prompt('请输入边数'));
        huabian.type='bian';
        huaban.draw();
    }
    duojiao.onclick=function () {
        huaban.num=parseInt(prompt('请输入角数'));
        huabian.type='jiao';
        huaban.draw();
    }

    save.onclick=function () {

    }
})
class shape{
    constructor(canvas,zhezhao){
        this.canvas=canvas;
        this.zhezhao=zhezhao;
        this.cobj=this.canvas.getContext('2d');
        this.type='shixian';
        this.huastyle='stroke';

        this.draw();
    }
    init(){
        this.cobj.fillStyle=this.fillcolor?this.fillcolor:'#000';
    }
    draw(){
       let that=this;
       that.zhezhao.onmousedown=function (e) {
           that.init();
           that.cobj.fillStyle=that.fillcolor;
           let sx=e.offsetX;
           let sy=e.offsetY;
           that.zhezhao.onmousemove=function (e) {
               let ex=e.offsetX;
               let ey=e.offsetY;
               that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height);
               if(that.historys){
                   that.cobj.putImageData(that.historys,0,0);
               }
               that[that.type](sx,sy,ex,ey);
           }
           that.zhezhao.onmouseup=function () {
               that.zhezhao.onmousemove=null;
               that.zhezhao.onmouseup=null;
               that.historys=that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height);
           }
       }
    }
    shixian(sx,sy,ex,ey){
        this.cobj.beginPath();
        this.xian.innerHTML='实线';
        this.cobj.moveTo(sx,sy);
        this.cobj.lineTo(ex,ey);
        this.cobj.stroke();
    }
    xuxian(sx,sy,ex,ey){
        this.cobj.beginPath();
        this.xuxian.innerHTML='虚线';
        this.cobj.moveTo(sx,sy);
        this.cobj.lineTo(ex,ey);
        this.cobj.setLineDash([5,5]);
        this.cobj.stroke();
        this.cobj.setLineDash([]);
    }
    yuan(sx,sy,ex,ey){
        this.cobj.beginPath();
        let r=((ex-sx)**2+(ey-sy)**2)**(1/2);
        this.cobj.ar(sx,sy,r,0,Math.PI*2);
        this.cobj.stroke();
    }
    juxing(sx,sy,ex,ey){
        this.cobj.beginPath();

        this.cobj.ar(sx,sy,r,0,Math.PI*2);
        this.cobj.stroke();
    }
    bian(sx,sy,ex,ey){
        this.cobj.beginPath();
        let reg=360/this.num;
        for(let i=0;i<this.num;i++){
            let r=((ex-sx)**2+(ey-sy)**2)**(1/2);
            let x = sx+*Math.cos((Math.PI/180)reg*i);
            let y = sy+*Math.sin((Math.PI/180)reg*i);
            this.cobj.lineTo(x,y);
        }
        this.cobj.closePath();
        this.cobj.stroke();
    }
    jiao(sx,sy,ex,ey){
        this.cobj.beginPath();
        this.num*=2;
        let reg=360/this.num;
        let r=((ex-sx)**2+(ey-sy)**2)**(1/2);
        this.jiandu=3;
        for(let i=0;i<this.num;i++){
            if(i%2==0){
                let x=sx+r*Math.cos((Math.PI/180)reg*i);
                let y=sy+r*Math.sin((Math.PI/180)reg*i);
                this.cobj.lineTo(x,y);
            }
        }
    }
    save(){
        this.canvas.DateURL().replace();
    }
}