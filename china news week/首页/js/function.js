//函数库



// 选项卡1   btn选项卡按钮  con选项卡内容
			//鼠标移入出现，移走消失
	function xuanxiangka1(btn,con){
		const anniu=$(btn);
		const neirong=$(con);
		for(let i=0;i<btn.length;i++){
			anniu[i].onmouseover=function(){
				neirong[i].style.display="block";
			}
			anniu[i].onmouseout=function(){
				neirong[i].style.display="none";
			}
		}
	}

// 选项卡2   btn选项卡按钮  con选项卡内容
		//鼠标移入出现，移走不消失
	function xuanxiangka2(btn,con){
		const anniu=$(btn);
		const neirong=$(con);
		for(let i=0;i<anniu.length;i++){
			anniu[i].onmouseover=function (){
				for(let j=0;j<neirong.length;j++){
					neirong[j].style.display="none";
				}			
				neirong[i].style.display="block";
			}
		}	
	}
	
	// 选项卡3   btn选项卡按钮  con选项卡内容
		//鼠标移入出现，移走不消失,横条滑动
	function xuanxiangka3(btn,con,tiao){
		const anniu=$(btn);
		const neirong=$(con);
		const tiaoobj=$(tiao)[0];
		for(let i=0;i<anniu.length;i++){
			anniu[i].onmouseover=function (){
				for(let j=0;j<neirong.length;j++){
					neirong[j].style.display="none";
				}			
				neirong[i].style.display="block";
				animate(tiaoobj,{left:anniu[i].offsetLeft},80);
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

	//函数简化   $
// 2个作用
//1.html.相当于window.onload =function(){}
// 不用写window.onload =function(){}; 直接写$(function(){})
//2.获取元素(元素集合)
// var aa=$(".aa")  var aa=$(".aa")[0]
// 相当于
// var aa=document.querySelectorAll(".aa")
// var aa=document.querySelector(".aa")

function $(select,obj=document){
    if(typeof select=="function"){
        window.addEventListener("load",select,false);
    }else if(typeof select=="string"){
        if(/^<\w+>$/.test(select)){
            return document.createElement(select.slice(1,-1));
        }else{
            return obj.querySelectorAll(select);
        }

    }
}

// 层级轮播    包括(透明轮播) 图片定位在同一个地方
	// pic,轮播图，填字符串的选择器；""
	// bigbannerBox，填字符串的选择器；""
				//通屏不变色时,是內宽里的盒子，
				//通屏变色时,是通屏的盒子，
	// lunbodian，轮播点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"];没有时要删掉形参
	// liactivebgColor,轮播点选中颜色；""
	// lunboTime,时间间隔；
	//donghuaTime  动画时间
	// lisColor,轮播点普通颜色；""
	// left 左箭头
	// right 右箭头
	// type,0时层级轮播，type,1时透明轮播,默认type=1透明轮播
	function Zlunbo(pic,bigbannerBox,lunbodian,liactivebgColor,lunboTime,donghuaTime,lisColor,type=1){
		if(type==0){
			var flag=true;	
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			// const color=colorArr;
			const leftbtn=$(left)[0];
			const rightbtn=$(right)[0];
			tupian[0].style.zIndex=2;//图片选中层级
			li[0].style.background=liactivebgColor;
			// banner.style.background=color[0];
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
					if(flag){
						flag=false;
						for(let i=0;i<tupian.length;i++){
							tupian[i].style.zIndex=1;//图片默认层级
							li[i].style.background=lisColor;
						}
						tupian[j].style.zIndex=2;//图片选中层级
						li[j].style.background=liactivebgColor;
						// banner.style.background=color[j];
						num=j;
						flag=true;
					}
				}
			}
			leftbtn.onmouseover=function(){
				clearInterval(t);
			}
			leftbtn.onclick=function(){
				if(flag){
					move("r");	
				}
				
			}
			rightbtn.onmouseover=function(){
				clearInterval(t);
			}
			rightbtn.onclick=function(){
				if(flag){
					move("l");	
				}
			}
			function move(type="l"){
				if(flag){
						flag=false;
						if(type=="l"){
							num++;
						if(num>tupian.length-1){
							num=0;
						}
					}if(type=="r"){
						num--;
						if(num<0){
							num=tupian.length-1;
						}
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=1;//图片默认层级
						li[i].style.background=lisColor;
					}
					tupian[num].style.zIndex=2;//图片选中层级
					li[num].style.background=liactivebgColor;
					// banner.style.background=color[num];
					flag=true;
				}
			}
		}else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			// const leftbtn=$(left)[0];
			// const rightbtn=$(right)[0];
			// const color=colorArr;
			tupian[0].style.opacity=1;
			li[0].style.background=liactivebgColor;
			// banner.style.background=color[0];
			var flag=true;
			var num=0;
			var now=0;
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
					if(flag){
						flag=false;
						for(let i=0;i<tupian.length;i++){
							tupian[i].style.opacity=0;
							li[i].style.background=lisColor;

						}
						// banner.style.background=color[j];
						tupian[now].style.opacity=1;
						animate(tupian[now],{opacity:0},500);
						li[j].style.background=liactivebgColor;
						animate(tupian[num],{opacity:1},donghuaTime,function(){
							flag=true;
							num=j;
							now=num;
						});
						
					}
				}
			}
			/*leftbtn.onmouseover=function(){
				clearInterval(t);
			}
			leftbtn.onclick=function(){
				if(flag){
					move("r");	
				}
				
			}
			rightbtn.onmouseover=function(){
				clearInterval(t);
			}
			rightbtn.onclick=function(){
				if(flag){
					move("l");	
				}
			}*/
			function move(type="l"){
				flag=false;
				if(type=="l"){
					num++;
					if(num>tupian.length-1){
						num=0;
					}
				}else if(type=="r"){
						num--;
							if(num<0){
								num=tupian.length-1;
							}
						}
				
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.opacity=0;
						li[i].style.background=lisColor;
					}
					// banner.style.background=color[num];
					tupian[now].style.opacity=1;
					animate(tupian[now],{opacity:0},500);
					li[num].style.background=liactivebgColor;
					animate(tupian[num],{opacity:1},donghuaTime,function(){
						flag=true;
						now=num;
					});
			}
		}
		
	}

// 左右单图轮播1  图片定位在同一个地方
	// lunbotupian 轮播图
	// lunbodakuai 放轮播块的大盒子(可以通屏也可以不通屏,通屏时可以变色)
	// lunbokuai 放轮播图的轮播块
	// colorArr 放轮播块的大盒子的背景颜色集合 (没有时[])
	// lunbodian 轮播点
	// zuojian 左按钮
	// youjian 右按钮
	// lunboTime 轮播时间  一般3000
	// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
	function zuolunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,activeClass){
		const tu=document.querySelectorAll(lunbotupian);
		const banner=document.querySelector(lunbodakuai);
		const img=document.querySelector(lunbokuai);
		const color=colorArr;
		const lis=document.querySelectorAll(lunbodian);
		const imgw=parseInt(window.getComputedStyle(tu[0],null).width);
		const zuobtn=document.querySelector(zuojian);
		const youbtn=document.querySelector(youjian);
		for(i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		banner.style.background=color[0];
		var now=0;
		var next=1;
		var flag=true;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},500);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next++;			
					if(next>tu.length-1){
					next=0;
					}
				})
				banner.style.background=color[now];
			}else if(type=="l"){
				animate(tu[now],{left:imgw},500);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next--;			
					if(next<0){
					next=tu.length-1;
					}
				})
				banner.style.background=color[now];
			}
			
			lis[now].classList.remove(activeClass);
			lis[next].classList.add(activeClass);
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		zuobtn.onclick=function(){
			if(flag){
				move("l");	
			}
		}
		youbtn.onclick=function(){
			if(flag){
				move("r");	
			}
		}
		for(let i=0;i<tu.length;i++){
			lis[i].onclick=function(){
				if(flag){
					if(i<now){
						next=i;
						move("l");
					}else if(i>now){
						next=i;
						move("r");
					}
				}
			}
		}
	}

// 左右单图轮播2
		//有轮播点 
		//有问题,不能自动轮播,只能左右点击播
		/*图片横着排float:left,窗口相对定位overflow: hidden;
			放图片的盒子绝对定位设宽高 宽度要设长*/
	// imgBox:放banner图的盒子，宽度要设长；绝对定位
	// zuojian:左边按钮；
	// youjian:右边按钮；
	// bannerTu:要轮播的banner图；
	// num:移动图片的个数；
	// donghuashijian：动画完成的时间
	// lunbodian 轮播点
	// activeClass  类名 控制轮播点的变化
		// 传值时("activeClass") 不加.  
	function jiedianlunbo2(imgBox,bannerTu,num,donghuashijian,zuojian,youjian,lunbodian,activeClass){
    const box=$(imgBox)[0];
    const leftBtn=$(zuojian)[0];
    const rightBtn=$(youjian)[0];
    const img=$(bannerTu);
    const li=$(lunbodian);
    const imgw=parseInt(window.getComputedStyle(img[0],null).width);

    var flag=true;
    let n=num;
    // var t=setInterval(move,3000);
    function move(type="r"){
        flag=false;
        if(type=="r"){
            animate(box,{left:-imgw},donghuashijian,function(){
                for(let i=0;i<n;i++){
                    let first=box.firstElementChild;
                    box.appendChild(first);
                    for(let j=0;j<li.length;j++){
                    li[j].classList.add(activeClass);
                    }
                    li[i].classList.remove(activeClass);
                }


                box.style.left=0;
                leftBtn.style.pointerEvents="auto";//让左按钮失去鼠标作用(不能点击,不能hover)
                rightBtn.style.pointerEvents="none";//让右按钮恢复鼠标作用(可以点击,可以hover)
                flag=true;
            });
        }else if(type=="l"){
            for(let i=0;i<n;i++){
                let last=box.lastElementChild;
                let first=box.firstElementChild;
                box.insertBefore(last,first);
                for(let j=0;j<li.length;j++){
                    li[j].classList.remove(activeClass);
                }
                li[i].classList.add(activeClass);
            }
            box.style.left=-imgw+"px";
            animate(box,{left:0},donghuashijian,
                function(){
                    leftBtn.style.pointerEvents="none";
                    rightBtn.style.pointerEvents="auto";
                    flag=true;
                });
        }

    }

    leftBtn.onclick=function(){
        if(flag){
            move("l");
        }
    }
    rightBtn.onclick=function(){
        if(flag){
            move("r");
        }
    }
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
            for(let j=0;j<li.length;j++){
                li[j].classList.remove(activeClass);
                li[i].classList.add(activeClass);
                if(i>j){
                    if(flag){
                        move("r");
                    }
                }else if(i<j){
                    if(flag){
                        move("l")
                    }
                }

            }
        }
    }
}


// 左右多图轮播1
	/*图片横着排float:left,窗口相对定位overflow: hidden;
	放图片的盒子绝对定位设宽高,*/
	// hezi  放图片的盒子 宽度要设长
	// tupian 图片  填类名选择器
	// zuobtn 左按钮
	// youbtn 右按钮
	// n 移动图片的个数
	// lunbotime 轮播时间
function zyjiedian(hezi,tupian,zuobtn,youbtn,num,lunbotime){
	const box=$(hezi)[0];//获取盒子
	const imgW=parseInt(window.getComputedStyle((document.querySelector(tupian)),null).width);//获取每个图的宽度
	const left=$(zuobtn)[0];//获取左按钮
	const right=$(youbtn)[0];//获取右按钮
	let n=num;//定义移动图片的个数
	var flag=true;

	var t=setInterval(move,lunbotime);

	function move(type="l"){
		flag=false;
			if(type=="l"){
				//移动box盒子，左移 移动距离是图的宽度乘以n  当移动完之后，需将第一张图追加到后面，再使box回到原来的位置
			
			animate(box,{left:-imgW*n},500,function(){
				for(let i=0;i<n;i++){
					let first=box.firstElementChild;
					box.appendChild(first);
				}	
				box.style.left=0;

				flag=true;
				
			})	
		}
		else if(type=="r"){
			//右移  先将最后一张图放到第一张前面，这是box盒子距离左边的距离是图的宽度-imgW+"px"，再使box回到原来的位置
			for(let i=0;i<n;i++){
				let last=box.lastElementChild;
				let first=box.firstElementChild;
				box.insertBefore(last,first);
				box.style.left=-imgW*n+"px";
			}

			animate(box,{left:0},500,function(){
				flag=true;
			});
		}	
	}
	box.ommouseover=function(){
		clearInterval(t);
	}
	box.ommouseover=function(){
		t=setInterval(move,lunbotime);
	}
	left.onmouseover=function(){
		clearInterval(t);
	}
	right.onmouseover=function(){
		clearInterval(t);
	}
	left.onclick=function(){
		if(flag){
			move("l")
		}
	}
	right.onclick=function(){
		if(flag){
			move("r")
		}
	}
	window.onfocus=function(){
		t=setInterval(move,lunbotime);
	}
	window.onblur=function(){
		clearInterval(t);
	}
}

// 左右多图轮播2    
		//无轮播点 窗口中的图片一起轮播
	/*图片横着排float:left,窗口相对定位overflow: hidden;
	放图片的盒子绝对定位设宽高*/
	// wins1 	窗口
	// box1 	放图片的盒子 宽度要设长
	// leftBtn1 左箭头
	// rightBtn1 右箭头
	// n1	 窗口中显示的图片个数(*不是所有图片的个数)
function duotu_lunbo(wins1,box1,leftBtn1,rightBtn1,n1){
	const box = $(box1)[0];
	const leftBtn=$(leftBtn1)[0];
	const rightBtn=$(rightBtn1)[0];
	const wins=$(wins1)[0];
	let n=n1;//传几张图
	const imgW = parseInt(window.getComputedStyle(wins,null).width);
	let flag=true;
	const childlen = box.children.length;
	var t = setInterval(movel,3000);
	function movel(){
		flag=false;
		let first = box.firstElementChild;		
		animate(box,{left:-imgW},1500,function(){
			flag=true;
            for(let i=0; i<n;i++){
            box.appendChild(first);
            first=box.firstElementChild;
            }
			box.style.left=0;
		});			
	}
    function moveR(){
        for(let i=0;i<n;i++){
         	let firstChild=box.firstElementChild;
			let last=box.lastElementChild;	
			box.insertBefore(last,firstChild);
         }
         	box.style.left=-imgW+"px";
         	animate(box,{left:0},1500);
    } 	
               
	leftBtn.onclick=function(){
		if(flag){
			moveR();
		}
	}
	rightBtn.onclick=function(){
		if(flag){
			movel();
		}
	}
	leftBtn.onmouseover=function(){
		clearInterval(t);
	}
	rightBtn.onmouseover=function(){
		clearInterval(t);
	}
}




//上下轮播(从下到上)  
	//放轮播图的盒子相对定位，轮播图绝对定位，overflow:hidden
	// 获取轮播图       	  ".tu"       		tu1
	//获取轮播图盒子		".img"				hezi
	//获取左按钮			".leftBtn"			zuo
	//获取右按钮			".rightBtn"			you
	//获取轮播点			".box ul li"		li	
	//动效时间					500      	    t2	
	//自动播放时间				1000			t1
	//普通轮播点颜色  		 "orange"			s1
	//初始化第一个轮播点颜色   "#fff"			s2

function sxlunbo(tu1,hezi,t1,t2){
	const tu =$(tu1);//获取轮播图
	const img=$(hezi)[0];//获取轮播图盒子
	// const leftBtn=$(zuo)[0];//获取左按钮
	// const rightBtn=$(you)[0];//获取右按钮
	// const li=$(lis);//获取轮播点 
	const imgw=parseInt(window.getComputedStyle(img,null).height);//获取轮播图宽度

	// 初始化
	var flag=true;//定义开关初始值
	for (let i=0; i<tu.length;i++){
		tu[i].style.top=imgw+"px";
	}//遍历轮播图，并把轮播图放在右边
	tu[0].style.top=0;//第一张轮播图放在中间，显示出来

	// li[0].style.background=s2;//初始化第一个轮播点颜色为白色

	var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

	var now=0;//当前轮播图初始值--下标
	var next=0;//其他轮播图初始值--下标

	// 轮播效果函数
	function move(type="l"){//默认左按钮入口
	flag=false;//默认开关为关闭状态
		if(type=="l"){//左按钮入口
				next++;//其他轮播图初始值不同于当前轮播图初始值，从右向左
		if(next>tu.length-1){ //移至最后一页
			next=0;//其他轮播图值返回0;
		}	
			tu[next].style.top=imgw+"px";//其他轮播图移出当前画面
			animate(tu[now],{top:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
		}else if(type=="r"){  //右按钮入口
			next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
			if (next<0){ //移至第一页
				next=tu.length-1;// 其他轮播图值返回最后一页
			}
			tu[next].style.top=-imgw+"px";//其他轮播图移出当前画面
			animate(tu[now],{top:imgw},t2);//当前画面动画播放
		}

		animate(tu[next],{top:0},500,function(){flag=true;//循环播放后开关打开
			// li[next].style.background=s2;//其他轮播点显示白色
			// li[now].style.background=s1;//当前轮播点显示橘色
			now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
		});	
					
	}
		img.onmouseover=function(){
			clearInterval(t)
		}
		img.onmouseout=function(){
			t=setInterval(move,t1);
		}
		// 	leftBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}
		// 	leftBtn.onclick=function(){
		// 		if(flag){
		// 		move("l");
		// 		}
		// 	}
		// 	rightBtn.onmouseover=function(){
		// 		clearInterval(t)
		// 	}

		// 	rightBtn.onclick=function(){
		// 		if(flag){
		// 			move("r");
		// 		}
		// 	}
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			tu[i].style.top=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		tu[j].style.top=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
}


//获取scrollTop前的对象
//解决scrollTop兼容性
	function floor(){
		let body=document.body;
		let html=document.documentElement;
		body.scrollTop=100;
		html.scrollTop=100;
		let obj;
		if(body.scrollTop==0){
			obj=html;
		}else{
			obj=body;
		}
		body.scrollTop=0;
		html.scrollTop=0;
		return obj;
	} 
	
//点击返回顶部
		//btn 是点击的块
		// $(function(){
		// 	const btn=$(".btn")[0];
		// 	let obj=floor();
		// 	btn.onclick=function(){
		// 		animate(obj,{scrollTop:0},500);
		// 	}
		// })

// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// dakuai  通屏大块
	// anniukuai  按钮的大块
	// daohang   上面的导航
	// daohanggao  导航高度
	// pic   图片
	// imgUrl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// num  顶部导航出现的高度
	// db  点击返回顶部的按钮
function louceng(anniu,dakuai,anniukuai,daohang,daohanggao,pic,imgUrl,chushise,activese,num,db){
		const btn=$(anniu);
		const section=$(dakuai);
		const dibubtn=$(db)[0];
		let fl=floor();
		const nav=$(daohang)[0];
		const btns=$(anniukuai)[0];
		let flagx=true;
		let flags=false;
		const CH=document.documentElement.clientHeight;
		for(let i=0;i<btn.length;i++){
			btn[i].onclick=function(){
				animate(fl,{scrollTop:section[i].offsetTop},200);
			}
		}
		dibubtn.onclick=function(){
				animate(fl,{scrollTop:0},500);
			}
		window.onscroll=function(){  //当滚动的时候
			if(fl.scrollTop>=num){
				if(flagx){
					flagx=false;
					flags=true;
					animate(nav,{top:0},300);
					btns.style.display="block";
				}
						
			}else{	
				if(flags){
					flagx=true;
					flags=false;
					animate(nav,{top:-daohanggao},300);
					btns.style.display="none";
				}
					
			}
			for(let i=0;i<section.length;i++){
				if(fl.scrollTop+0.5*CH>=section[i].offsetTop){
					for(let j=0;j<btn.length;j++){
						btn[j].style.background=chushise;
					}
					btn[i].style.background=activese;
				}
				if(fl.scrollTop+CH>=section[i].offsetTop){
					let img=$(pic,section[i]);
					for(let j=0;j<img.length;j++){
						img[j].src=img[j].getAttribute(imgUrl);
					}
				} 
			}

		}
		setTimeout(function(){
			animate(nav,{top:-daohanggao},300);
		},1000)

}

//事件执行一次
	//one(obj,type,fn)
	//obj:事件对象
	//type: 发生什么
	//fn: 执行的程序
	//例如：one(box,"click",function(){alert(1.html);})
	function one(obj,type,fn){
			//添加第一个type类型函数
			obj.addEventListener(type,fn,false);
			//添加第二个type类型函数(清除fn)
			obj.addEventListener(type,function(){
				obj.removeEventListener(type,fn,false);
			},false);
		}


//常用拖拽
	//drag(box)
	//box 拖拽的盒子 需要绝对定位
		function drag(box){
				
			box.addEventListener("mousedown",down,false);
			const winw=document.documentElement.clientWidth;
			const winh=document.documentElement.clientHeight;
			const boxw=box.offsetWidth;
			const boxh=box.offsetHeight;
			let shubiaox;
			let shubiaoy;
			let boxx;
			let boxy;
			function down(e){
				shubiaox=e.clientX;
				shubiaoy=e.clientY;
				boxx=box.offsetLeft;
				boxy=box.offsetTop;
				window.addEventListener("mousemove",move,false);
				window.addEventListener("mouseup",up,false);
			}
			function move(e){
				let x=e.clientX;
				let y=e.clientY;
				let chax=x-shubiaox;
				let chay=y-shubiaoy;
				let lefts=boxx+chax;
				let tops=boxy+chay;
				if(lefts<0){
					lefts=0;
				}
				if(tops<0){
					tops=0;
				}
				if(lefts>=winw-boxw){
					lefts=winw-boxw;
				}
				if(tops>=winh-boxh){
					tops=winh-boxh;
				}
				box.style.left=lefts+'px';
				box.style.top=tops+'px';
			}
			function up(e){
				window.removeEventListener("mousemove",move,false);
				window.removeEventListener("mouseup",up,false);
			}
		}


//鼠标滚轮事件
	//mouseWheel(obj,shang,xia)
	//obj  鼠标滚动事件源
	//shang 鼠标滚动向上时触发的事件
	//xia 	鼠标滚动向下时触发的事件
	function mouseWheel(obj,shang,xia){
		obj.addEventListener("mousewheel",scrollFn,false);
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		function scrollFn(e){
			e.preventDefault();
			//阻止屏幕随滚轮滚动
			if(e.wheelDelta){
				//谷歌
				if(e.wheelDelta>0){
					//上
					shang();
				}else{
					//下
					xia();
				}
			}else{
				//火狐
				if(e.detail<0){
					//上
					shang();
				}else{
					//下
					xia();
				}
			}
		}
	}

//获取一个元素的style(width height 等)
	//attr(obj,style);
	//obj  类型 DOM元素
	//style 类型 string  加""
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}  
	//例子 attr(ul[i],"height")


//下拉导航
	//xialadh(btn,con)
	//btn  点击的块
	//con  出现的块  要写overflow: hidden;
	function xialadh(btn,con){
		const item=$(btn);
		const ul=$(con);
		for(let i=0;i<ul.length;i++){
			let h=parseInt(attr(ul[i],"height")); //获取ul[i]的高度(attr看上面封装的函数)
			ul[i].setAttribute("h",h);
			ul[i].style.height=0;
		}
		for(let i=0;i<item.length;i++){
					//鼠标移入需要处理的函数
			hover (item[i],function(){//需要引入hover.js
				if(item[i].children[1]){
					let ul=item[i].children[1];
					animate(ul,{height:ul.getAttribute("h")},500);
				}
					//鼠标移出需要处理的函数
			},function(){
					if(item[i].children[1]){
						let ul=item[i].children[1];
						animate(ul,{height:0},500);
					}
				})
		}
	}

/*	添加cookie
	addCookie(key,val,time);
	key: 键名       string
	val：值			string
	time(可不填)：过期时间    单位s
*/

	//添加
		//例 addCookie("info","aaaa",30);
		 //time为消失秒数，传3就是30秒后消失
		function addCookie(key,val,time){ 
			val=escape(val);//编码
			if(time){
				let date=new Date();
				time*=1000; 
				date.setTime(date.getTime()+time);
				date=date.toGMTString(); //把date转成字符窜
				document.cookie=`${key}=${val};expires=${date}`;
			}else{
				document.cookie=`${key}=${val}`;
			}
		}
/*	查看cookie
	getCookie(key);
	key: 键名       string
*/
	//查看 
		// 例 getCookie("info");
		function getCookie(key){
			let cookies=document.cookie;
			let cookiearr=cookies.split("; ");//cookie自带空格
			let val;
			for(let i=0;i<cookiearr.length;i++){
				let arr=cookiearr[i].split("=");
				if(key==arr[0]){
					val=arr[1];
				}
			}
			return unescape(val);//返回解码后的值
		}

/*	删除cookie
	delCookie(key);
	key: 键名       string
*/
	//删除
		//例 delCookie("info");
		function delCookie(key){
			let date=new Date();
			date.setTime(date.getTime()-10000);
			date=date.toGMTString();
			document.cookie=`${key}=aa;expires=${date}`;
		}
		