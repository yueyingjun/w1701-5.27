
	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhezhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}
	//函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener('load',select,false);
		}else if(typeof select=="string"){
			// alert(/^<\w+>$/.test(select));
			if(/^<\w+>$/.test(select)){
              return  document.createElement(select.slice(1,-1))
			}else{
				return obj.querySelectorAll(select);
			}
		}
	}
	//层级轮波
	//pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮波
	function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
	   if(type==0){	
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tupian[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
				}
			tupian[j].style.zIndex=tuactiveZ;
			li[j].style.background=liactivebgColor;
			banner.style.background=color[j];
			num=j;
			}
			}
    
			function move(){
			num++;
			if(num>bannertushuliang){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuactiveZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
	}
		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tupian[0].style.opacity=tuactiveZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					clearInterval(t);
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.opacity=tuZ;
						li[i].style.background=lisColor;
					}
				tupian[j].style.opacity=tuactiveZ;
				animate(tupian[j],{opacity:1},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
				}
				function move(){

				num++;
				if(num>bannertushuliang){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuactiveZ;
				animate(tupian[num],{opacity:1},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
	}
}   
    //单张左右轮播图
    //bantu(banner图片)；
    //banhe（放banner图的盒子）；
    //li1(轮播点);
    //left1(banner图上的左按钮);
    //right1(banner图上的右按钮)；
    //lico(banner点没被选中的颜色)；
    //liColor(banner点被选中的颜色)；
    function zylunbo(bantu,banhe,left1,right1,li1,lisColor,lico){
        const tu=$(bantu);
       const img=$(banhe)[0];
       const left=$(left1)[0];
       const right=$(right1)[0];
       const li=$(li1);
       const imgw=parseInt(window.getComputedStyle(img,null).width);
       
       li[0].style.background=lisColor;
       for(let j=0;j<tu.length;j++){
        tu[j].style.left=imgw+'px';
       }
       tu[0].style.left=0;
       var t=setInterval(move,2000);
       var now=0;
       var next=0;
       var flag=true;
       function move(type='l'){
        flag=false;
        if(type=='l'){
          next++;
          if(next>tu.length-1){
          next=0;
            }
        animate(tu[now],{left:-imgw},500);
        tu[next].style.left=imgw+'px';
        }
        else if(type=='r'){
            next--;
          if(next<0){
          next=tu.length-1;
            }
        animate(tu[now],{left:imgw},500);
        tu[next].style.left=-imgw+'px';
        }
        animate(tu[next],{left:0},500,function(){
          flag=true;
          li[now].style.background=lico;
          li[next].style.background=lisColor;
          now=next;
        });
        
       }
       img.onmouseover=function(){
        clearInterval(t);
       }
       img.onmouseout=function(){
        t=setInterval(move,2000);
       }
       left.onclick=function(){
        if(flag){
           move('l');
        }
       }
       left.onmouseover=function(){
        clearInterval(t);
       }
       right.onclick=function(){
        if(flag){
           move('r');
        }
       }
       right.onmouseover=function(){
        clearInterval(t);
       }
       for(let i=0;i<li.length;i++){
        li[i].onmouseover=function(){
          clearInterval(t);
          for(let j=0;j<li.length;j++){
            tu[j].style.left=imgw+'px';
            li[j].style.background=lico;
          }
          tu[i].style.left=0;
          li[i].style.background=lisColor;
          now=i;
          next=i;
        }
       }
    }

//多张左右轮播图
//banhe(放banner图的盒子)；
//left1（banner图上的左按钮）；
//right(banner图上的右边的按钮)；
//box1(同屏的banner图盒子);
//shuzi(同时显示的banner图的数量);
function dzzylunbo(banhe,left1,right1,box1,shuzi){
    //获取轮播盒子
  const box=$(banhe)[0];
  //获取左边按钮
  const left=$(left1)[0];
  //获取右边按钮
  const right=$(right1)[0];
  //获取显示区域
  var banner=$(box1)[0];
  //n代表图片的数量
  const n=shuzi;
  //获取一张banner图的宽度
  const imgw=parseInt(window.getComputedStyle(document.querySelector('.box1'),null).width);   
  //定义开关
  var flag=true;
  //定义时间函数
  var t=setInterval(move,2000);
  //创建函数move,通过函数体来实现动画操作，默认图片往左移动
  function  move(type='l'){
    //关掉开关，让动画完整运动完，动画运动过程中点击按钮无效
    flag=false;
    //图片往左移动
    if(type=='l'){
      //建立动画效果，让banner盒子移动要移动的方向和距离
    animate(box,{marginLeft:-imgw*n},500,function(){
      //遍历图片的指定数量，并将这些图片移到指定位置
      for(let i=0;i<n;i++){
        //先获取第一张图片
             var first=box.firstElementChild;
             //把第一张图放到最后的位置
           box.appendChild(first);
          }
        //将banner盒子调整到原来的位置
      box.style.marginLeft=0;
      //动画运动完后打开开关，点击按钮就会生效
      flag=true;
    });
    }
    //图片往右移动
    else if(type=='r'){
      //遍历指定数量的图片
      for(let i=0;i<n;i++){
        //获取第一张图片
        var first=box.firstElementChild;
        //获取最后一张图片        
          var last=box.lastElementChild;
          //把最后一张放到第一张的前面
            box.insertBefore(last,first);
      }
      //先把banner盒子向左移动到指定位置
            box.style.marginLeft=-imgw*n+'px';
            //进行动画，把banner盒子移到原来的位置
            animate(box,{marginLeft:000},500,function(){
              //打开开关，点击按钮有效
                flag=true;
            })
    }
    
  }
    //鼠标放到图片上，图片不动
  box.onmouseover=function(){
    //判断开关是否打开，也就是图片是否运动完一个周期
    if(flag){
      //清楚时间函数t,让图片运动停下
    clearInterval(t); 
      }
  }
  //鼠标移开图片以后，图片继续运动
  box.onmouseout=function(){
    //调用时间函数t,让图片继续运动
    t=setInterval(move,2000);
  }
  //点击右边按钮，图片向左移动，这样就能查看到后面（下一张）的图片
    right.onclick=function(){
      //判断开关是否打开,打开点击按钮才能有效
      if(flag){
        //调通函数move让图片整体往左移动
           move('l');
      } 
    }
    //鼠标放到左边按钮上，使图片停止运动
    left.onmouseover=function(){
      //清楚时间间隔函数，使图片停止运动
        clearInterval(t);
    }
    //鼠标放到右边按钮上，使图片停止运动
    right.onmouseover=function(){
      //清楚时间间隔函数，使图片停止运动
      clearInterval(t);
      
    }
    //点击左边按钮，图片向右移动，这样就能查看到前面（上一张）的图片
    left.onclick=function(){
      //判断开关是否打开,打开点击按钮才能有效
      if(flag){
        //调通函数move让图片整体往右移动
        move('r');
      }
    }
  }

  //从上到下轮播
  //banhe（放banner图的盒子);
  function sxlunbo(banhe){
    const box=$(banhe)[0];
      // 从上到下
      const boxchild=box.children.length;
      var t=setInterval(function(){
           var first=box.children[0];
           var last=box.children[boxchild-1];
           box.insertBefore(last,first);
           last.style.height=0;
           animate(last,{height:300},500);
      },1000)
  }

  //从下到上的轮播
  //banhe（放banner图的盒子）；
  function xslunbo(banhe){
      const box=$(banhe)[0];
      var t=setInterval(function(){
        var first=box.firstElementChild;
            first.style.height=300+'px';
        animate(first,{height:0},500,function(){
          box.appendChild(first);
          first.style.height=300+'px';
        });
      },1000);

  }
  
    function sobj(){
    	var scrollobj=document.body?document.body:document.documentElement;
    	let body=document.body;
        let html=document.documentElement;
        body.scrollTop=1;
        html.scrollTop=1;
        let obj;
        if(body.scrollTop==1){
            obj=body;
        }
        else{
            obj=html;
        }
       return obj;
    }
    //点击事件触发一次
    //obj 事件源
    //type 事件
    //fn 事件处理程序
    function one(obj,type,fn){
   	   	  	//第一次执行事件
   	   	  	obj.addEventListener('type',fn,false);
   	   	  	//第二次执行事件,调用函数clear清除第一次点击事件和第二次(本次)事件
   	   	  	obj.addEventListener('type',clear,false);
   	   	  	function clear(){
   	   	  	    //清除第一次事件
   	   	  		obj.removeEventListener('type',fn,false);
   	   	  		//清除第二次事件
   	   	  		obj.removeEventListener('type',clear,false);
   	   	  	}
   	   	  }
function louceng(left1,left,section,xy){
	const btn=$(left1);
    const bt=$(left)[0];
	const sec=$(section);
	const sob=sobj();//获取当前页
    const nav=$(xy)[0];
    const CH=document.documentElement.clientHeight;
    var flagx=true;
    var flagy=false;
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(sob,{scrollTop:sec[i].offsetTop},500);
		}
	}
    window.onscroll=function(){

        if(sob.scrollTop>=800){
            if(flagx){
                flagx=false;
                flagy=true;
                animate(nav,{top:0},500,function(){
                    flagx=true;
                });
            }
            bt.style.display='block';
            }
        else{
            if(flagy){
                flagy=false;
                flagx=true;
                animate(nav,{top:-50},500,function(){
                    flagy=true;
                });
            }
            bt.style.display='none';
        }
        for(let i=0;i<sec.length;i++){
            if(sob.scrollTop+0.5*CH>=sec[i].offsetTop){
                for(let j=0;j<btn.length;j++){
                    btn[j].style.background='#ccc';
                }
                btn[i].style.background='red';
            }
            if(sob.scrollTop+CH>=sec[i].offsetTop){
                let img=$('img',sec[i]);
                for(let j=0;j<img.length;j++){
                    img[j].src=img[j].getAttribute('imgURL');
                }
            }
        }
    }
    setTimeout(function(){
        animate(nav,{top:-50},500,function(){
            flagy=true;
        });
    },1000);
    }
    //拖拽
    //drag(拖拽对象，可以是多个)
    function drag(box1){
    const box=$(box1);
    for(let i=0;i<box.length;i++){
   	  const Wid=document.documentElement.clientWidth;
   	  const Hei=document.documentElement.clientHeight;
   	  let boxX;
   	  let boxY;
   	  let X;
   	  let Y;
   	  box[i].addEventListener('mousedown',down,false);
   	  function down(e){
   		X=e.clientX;
   		Y=e.clientY;
   		boxX=box[i].offsetLeft;
   		boxY=box[i].offsetTop;
   		window.addEventListener('mousemove',move,false);
   		window.addEventListener('mouseup',up,false);
   	  }
   	  function move(e){
        let XX=e.clientX;
        let YY=e.clientY;
        let chax=XX-X;
        let chay=YY-Y;
        let lefts=boxX+chax;
        let tops=boxY+chay;
        let boxw=box[i].offsetWidth;
        let boxh=box[i].offsetHeight;
        if(tops>Hei-boxh){
        	tops=Hei-boxh;
        }
        if(lefts>Wid-boxw){
            lefts=Wid-boxw;
        }
        if(lefts<0){
        	lefts=0;
        }
        if(tops<0){
        	tops=0;
        }
        box[i].style.left=lefts+'px';
        box[i].style.top=tops+'px';
   	  }
   	  function  up(){
   	  	window.removeEventListener('mousemove',move,false);
   	  }
      }
    }
    //鼠标滚轮事件
    function mousewheel(obj,shang,xia){
    	obj.addEventListener('mousewheel',scrollFn,false);
     	obj.addEventListener('DOMMouseScroll',scrollFn,false);
     	function scrollFn(e){
     		//阻止屏幕随滚轮移动
     		e.preventDefault();
     		//geogle
     		if(e.wheelDelta){
     			if(e.wheelDelta>0){
     				shang();
     			}
     			else{
     				xia();
     			}
     		}
     		//souhu
     		else{
                if(e.detail>0){
                    xia();
                }
                else{
                	shang();
                }
     		}
     	}
    }
    //获得obj元素的style（width,height...）样式值
    //attr(obj,style);
    //obj 类型DOM元素
    //style 类型string
    //attr(obj,style)
    function attr(obj,style){
      return window.getComputedStyle(obj,null)[style];
    }

    //全屏轮播图
    //ul（放轮播图的盒子）；
    //dl1（轮播按钮）；
    function qplunbo(ul,dl1){
      const img=$(ul);
        const dl=$(dl1)[0];
        // const dian1=$('.dian1');
        // dian1[0].style.background='orange';
        img[0].style.top=0;
        img[0].style.zIndex=2;
        var flag=true;
        var now=0;
        var next=0;
        for(let i=0;i<img.length;i++){
          var lis=$('<dt>');
          lis.innerHTML=i+1;
                dl.appendChild(lis);
        }
        for(let i=0;i<dl.children.length;i++){
                dl.children[i].onclick=function(){
                  if(i>now){
                       next=i-1;
                       scrollF();
                  }else if(i<now){
                    next=i+1;
                    xia();
                  }
                }
        }
        mousewheel(document,scrollF,xia);
        function scrollF(){
          if(flag){
           flag=false;
                 next++;
                 if(next>img.length-1){
              next=0;
             }
                for(let i=0;i<img.length;i++){
                  img[i].style.zIndex=1;
                  // dian1[i].style.background='#5fe91e';
                }
                img[now].style.zIndex=2;
                img[next].style.top='100%';
                img[next].style.zIndex=3;
                animate(img[next],{top:0},500,function(){
                  // dian1[next].style.background='orange';
                  now=next;
                  flag=true;
            })
          }
        }
        function xia(){
                if(flag){
           flag=false;
                 next--;
                 if(next<0){
              next=img.length-1;
             }
                for(let i=0;i<img.length;i++){
                  img[i].style.zIndex=1;
                  // dian1[i].style.background='#5fe91e';
                }
                img[now].style.zIndex=2;
                img[next].style.top='-100%';
                img[next].style.zIndex=3;
                animate(img[next],{top:0},500,function(){
                  // dian1[next].style.background='orange';
                  now=next;
                  flag=true;
            })
          }
        }
    }

    //添加cookie;
    //addCookie(key,val,[time]);
    //key:     键名      string
    //val:     值        string
    //time(可不填)     过期时间  number单位s
    function addCookie(key,val,time){
              val=escape(val);
             if(time){
                let date=new Date();
                time*=1000;
                date.setTime(date.getTime()+time);
                date=date.toGMTString();
                console.log(document.cookie=`${key}=${val};expires=${date}`);
             }
             else{
               console.log(document.cookie=`${key}=${val}`);
             }
      }
      //查看
      //key    键名     string
      function getCookie(key){
          let cookies=document.cookie;
          let cookiearr=cookies.split(';');
          // console.log(cookiearr);
             // return val;
             let val;
             for(let i=0;i<cookiearr.length;i++){
              let arr=cookiearr[i].split('=');
              console.log(arr);
              if(key==arr[0]){
                val=arr[1];
              }
             }
             return unescape(val);
        }
        //删除
        //key     键名     string
        function delCookie(key){
           let date=new Date();
           date.setTime(date.getTime()-10000);
           date=date.toGMTString();
           document.cookie=`${key}=aa;expires=${date}`;
           // document.cookie='info=aaaa;expires=date.toGMTString()';
        }

        //去空格
    function delspace(str,type='side'){
    let reg;
    if(type=='before'){
      reg=/^\s+/;
    }
    if(type=='after'){
      reg=/\s+$/;
    }
    if(type=='side'){
      reg=/^\s+|\s+$/g;
    }
    if(type=='all'){
      reg=/\s/g;
    }
    return str.replace(reg,'');
   }

    //绘制圆角矩形路径
    function rr(cobj,x,y,w,h,r) {
        cobj.moveTo(x+r,y);
        cobj.lineTo(x+w-r,y);
        cobj.quadraticCurveTo(x+w,y,x+w,y+r);
        cobj.lineTo(x+w,y+h-r);
        cobj.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
        cobj.lineTo(x+r,y+h);
        cobj.quadraticCurveTo(x,y+h,x,y+h-r);
        cobj.lineTo(x,y+r);
        cobj.quadraticCurveTo(x,y,x+r,y);
    }