class drag{

        constructor(obj){
           this.obj=obj;
           
           this.shubiaoX;
           this.shubiaoY;
           this.play();

        }
        play(){
            this.down();


        }
        down(){
            let that=this;
            this.obj.onmousedown=function(e){
                that.shubiaoX=e.clientX;
                that.shubiaoY=e.clientY;
                let X=Symbol.for("X");
                let Y=Symbol.for("Y");
                that.obj[X]=that.obj.offsetLeft;
                that.obj[Y]=that.obj.offsetTop;
                that.move();
                that.up();
            }
        }
        move(){
            let that=this;
            let X=Symbol.for("X");
            let Y=Symbol.for("Y");
            window.onmousemove=function(e){
            let shubiaoNX= e.clientX;
            let shubiaoNY= e.clientY;
            let chax=shubiaoNX-that.shubiaoX;
            let chay=shubiaoNY-that.shubiaoY;
            that.obj.style.left=chax+that.obj[X]+'px';
            that.obj.style.top=chay+that.obj[Y]+'px';
            }
        }
        up(){
            let that=this;
            window.onmouseup=function(){
            this.onmousemove=null;
            this.onmouseup=null;
        }
        }
        
    }