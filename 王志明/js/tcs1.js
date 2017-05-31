$(function(){
	const box=$('.box')[0];
	let tcs1=new tcs(box);
})
class tcs{
	constructor(box){
        this.box=box;
        this.she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
        this.shefx='right';
        this.flag=true;
        this.play();
	}
	play(){
		this.creatgezi();
		this.creatshe();
		this.shemove();
		this.kzshe();
		this.creatfood();
	}
	creatgezi(){
		for(let i=0;i<20;i++){
			for(let j=0;j<20;j++){
				let gezi=$('<div>');
				gezi.id=`${i}+${j}`;
				gezi.classList.add('fangge');
				this.box.appendChild(gezi);
			}
		}
	}
	creatshe(){
        for(let i=0;i<this.she.length;i++){
        	this.getElement(this.she[i]).classList.add('shese');
        }
	}
	getElement(zuobiao){
		let id=zuobiao.x+'+'+zuobiao.y;
		return document.getElementById(id);
	}
	shemove(){
		let that=this;
		that.flag=false;
		that.t=setInterval(function(){
			let shetou;

			if(that.shefx=='right'){
				shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y+1};
			}
            if(that.shefx=='top'){
				shetou={x:that.she[that.she.length-1].x-1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=='bottom'){
				shetou={x:that.she[that.she.length-1].x+1,y:that.she[that.she.length-1].y};
			}
			if(that.shefx=='left'){
				shetou={x:that.she[that.she.length-1].x,y:that.she[that.she.length-1].y-1};
			}

			if(shetou.x==that.foods.x&&shetou.y==that.foods.y){
				that.getElement(that.foods).classList.remove('foods');
				that.creatfood();
			}
			else{
				let shewei=that.she.shift(that.she[0]);
		        that.removeshe(shewei);
			}

			if(shetou.x>19||shetou.x<0||shetou.y>19||shetou.y<0){
				alert('gemeover');
                that.tzsj();
                return;
			}
			for(let i=0;i<that.she.length;i++){
				if(shetou.x==that.she[i].x&&shetou.y==that.she[i].y){
				alert('gemeover');
				that.tzsj();
                return;	
				}
			}
		    that.she.push(shetou);
		    that.creatshe();
		    that.flag=true;
		},300);
		
	}
    removeshe(shewei){
    	let that=this;
    	that.getElement(shewei).classList.remove('shese');
    }
    kzshe(){
    	let that=this;
    	window.onkeydown=function(e){
    		if(that.flag){
               if(e.keyCode==37){
    			if(that.shefx!='right'){
    			   that.shefx='left';	
    			}
    		}
    		if(e.keyCode==38){
    			if(that.shefx!='bottom'){
    			that.shefx='top';
    			}
    		}
    		if(e.keyCode==39){
    			if(that.shefx!='left'){
    			that.shefx='right';
    			}
    		}
    		if(e.keyCode==40){
    			if(that.shefx!='top'){
    			that.shefx='bottom';
    			}
    		}
    		}
    	}
    }
    creatfood(){
    	let that=this;
    	that.foods={};
    	that.foods.x=Math.floor(Math.random()*20);
    	that.foods.y=Math.floor(Math.random()*20);
    	that.getElement(that.foods).classList.add('foods');
    }
    tzsj(){
    	clearInterval(this.t);
    }
}