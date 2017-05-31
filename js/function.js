
	// 1-----选项卡   
	//btn选项卡按钮  con选项卡内容   hongtiao红条
	function xuanxiangka(btn,con){
		const btn=$(btn);
		const con=$(con);
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}


	function xuanxiangka1(btn1,con1,hongtiao1){
		const btn1=$(btn1);
		const con1=$(con1);
		const hongtiao1=$(hongtiao1)[0];
		for(let i=0;i<btn1.length;i++){   //for里let不能改成var
			btn1[i].onmouseover=function(){
			for(let j=0;j<con1.length;j++){
				con1[j].style.display="none";
			}
			con1[i].style.display="block";
			animate(hongtiao1,{left:btn1[i].offsetLeft},300)
			}
		}	
	}


	// 2-----遮罩 
	// btn是底下的块，con是遮罩的块
	function zhezhao(btn2,con2){
		const btn2=$(btn2);
		const con2=$(con2);
		for(let i=0;i<btn2.length;i++){
			btn2[i].onmouseover=function(){
				con2[i].style.display="block";
			}
			btn2[i].onmouseout=function(){
				con2[i].style.display="none";
			}
		}
	}
	//3-----函数简化  创捷节点
	function $(select,obj=document){

		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener("load",select,false)
		}else if(typeof select=="string"){
			//<af2>
			//正则表达式
			if(/^<\w+>$/.test(select)){ // <开始 >结束 \w 字母数字下划线
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
			}
		}
	}


	//4----层级轮播
	//pic轮播图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮播点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮播点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮播
	function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
		
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
			if(num>tu.length-1){
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
		if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tupian[0].style.opacity=1;
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
						tupian[i].style.opacity=0;
						li[i].style.background=lisColor;
					}
				// tupian[j].style.opacity=1;
				animate(tupian[j],{opacity:1},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
				}
				function move(){
				num++;
				if(num>tu.length-1){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=0;
					li[i].style.background=lisColor;
				}
				// tupian[num].style.opacity=1;
				animate(tupian[num],{opacity:1},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
		}
	}



//5----- 左右轮播
	function zylunbo(pic,bigbannerBox,left,right,lunbodian,liactivebgColor,lunboTime,donghuaTime,lisColor){	
		const tu=$(pic);
		const img=$(bigbannerBox)[0];
		const imgW=parseInt(window.getComputedStyle(img,null).width);
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		const li=$(lunbodian);
		//初始化
		li[0].style.background=liactivebgColor;
		var flag=true;
		// console.log(imgW)
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgW+"px";
		}
		tu[0].style.left=0;
		var t=setInterval(move,lunboTime);
		var now=0;
		var next=0;

		function move(type="l"){
			flag=false;
			if(type=="l"){
			next++;
			if(next>tu.length-1){
				next=0;
				}
			tu[next].style.left=imgW+"px";
			animate(tu[now],{left:-imgW},donghuaTime);
			
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW+"px";
				animate(tu[now],{left:imgW},donghuaTime);

			}
			

			animate(tu[next],{left:0},500,function(){
				flag=true;
				// for(let i=0;i<li.length;i++){
				// 	li[i].style.background="orange";
				// }
				li[next].style.background=liactivebgColor;
				li[now].style.background=lisColor;
				now=next;
			});
			
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			 t=setInterval(move,lunboTime);
			
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
			move("l");	
			}
			
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onclick=function(){
			if(flag){
			move("r");	
			}
		}

		for(let i=0; i<li.length;i++){
			li[i].onmouseover=function(){
				clearInterval(t);
					if(flag){		
					if(i<now){
						// next=i-1;
						now=i;
						move("r");
					}else if(i>now){
						// next=i-1;
						now=i;
						move("l");
					}
				}
			}
		}


		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}





// 左右轮播 类名
	// lunbotupian 轮播图
	// lunbodakuai 放轮播块的大盒子
	// lunbokuai 放轮播图的轮播快
	// colorArr 放轮播块的大盒子的背景颜色集合
	// lunbodian 轮播点
	// zuojian 左按钮
	// youjian 右按钮
	// lunboTime 轮播时间
	// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
	function zulunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,donghuaTime,activeClass){
		const tu=document.querySelectorAll(lunbotupian);
		const banner=document.querySelector(lunbodakuai);
		const img=document.querySelector(lunbokuai);
		const color=colorArr;
		const lis=document.querySelectorAll(lunbodian);
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const zuobtn=document.querySelector(zuojian);
		const youbtn=document.querySelector(youjian);
		for(i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		var now=0;
		var next=1;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},donghuaTime);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},donghuaTime,function(){
					flag=true;
					now=next;
					next++;			
					if(next>tu.length-1){
					next=0;
					}
				})
			}else if(type=="l"){
				animate(tu[now],{left:imgw},donghuaTime);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},donghuaTime,function(){
					flag=true;
					now=next;
					next--;			
					if(next<0){
					next=tu.length-1;
					}
				})
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
			lis[i].onmouseover=function(){
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



// 层级箭头轮播
function zjlunbo(pic,bigbannerBox,lunbodian,left,right,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor){
			const tu=document.querySelectorAll(pic);
			const banner=document.querySelectorAll(bigbannerBox)[0];
			const li=document.querySelectorAll(lunbodian);
			const leftbtn=document.querySelector(left)[0];
			const rightbtn=document.querySelector(right)[0];
			const color=colorArr;
			tu[0].style.zIndex=tuBigZ;
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

			for(let i=0;i<li.length;i++){
				li[i].onmouseover=function(){
					// clearInterval(t);
					for(let j=0;j<tu.length;j++){
						tu[j].style.zIndex=tuZ;
						li[j].style.background=lisColor;
						banner.style.background=color[j];
					}
					tu[i].style.zIndex=tuBigZ;
					li[i].style.background=liactivebgColor;
					banner.style.background=color[i];

					num=i;
				}
			}
			leftbtn.onclick=function(){
				move("r");
			}
			rightbtn.onclick=function(){
				move("l");
			}
			function move(type="l"){
				if(type=="l"){
					num++;
					if(num>tu.length-1){
						num=0;
					}	
				}else if(type=="r"){
					num--;
					if(num<0){
						num=tu.length-1;
					}
				}
				
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
					banner.style.background=color[i];

				}
				tu[num].style.zIndex=tuBigZ;
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
}

// 左右节点多图轮播
	// bigbannerBox 最大的盒子
	// picbox 放图片的盒子
	// pic 图片
	// left 左箭头
	// right 右箭头
	// num 轮播的图片个数
	// lunboTime 轮播时间
	// donghuaTime 动画时间
function jielunbo(bigbannerBox,picbox,pic,left,right,num,lunboTime,donghuaTime){
		const win=$(bigbannerBox)[0];
		const box=$(picbox)[0];
		const lis=$(pic);
		const boxchildrenlen=box.children.length;
		var n=num;
		const imgw=parseInt(window.getComputedStyle(document.querySelector(".box li"),null).width)*n;
		win.style.width=imgw;
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		var flag=true;		
		var t=setInterval(move,lunboTime);
		function move(type="l"){
			flag=false;

			if(type=="l"){
				animate(box,{marginLeft:-imgw},donghuaTime,function(){
				flag=true;
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.appendChild(first);
				}				
				box.style.marginLeft=0;
			});	
			}else if(type=="r"){
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.insertBefore(last,first);	
				}				
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuaTime,function(){
					flag=true;															
				})
			}
			
		}
		win.onmouseover=function(){
			clearInterval(t);
		}
		win.onmouseout=function(){
			 t=setInterval(move,lunboTime);
		}
		leftbtn.onclick=function(){
			if(flag){
			move("r");
			}
			
		}
		rightbtn.onclick=function(){
			if(flag){
			move("l");
			}
		}

		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
}




//解决scrollTop兼容性 
	function scrollobj(){
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


// 楼层跳转 按需加载******************1
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
function louceng(anniu,Section,anniukuai,daohang,pic,picurl,chushise,activese,donghuaTime,num){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	let flagx=true;
	let flags=false;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese[i];
			}
			if(scroll.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let k=0;k<img.length;k++){
					img[k].src=img[k].getAttribute(picurl);
				}
			}
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
			// animate(btnbox,{width:35,height:324},200,function(){
			// 	flagx=true;
			// })                             //左侧导航渐出使用
		}else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
			}
				
			// animate(btnbox,{width:0,height:0},200,function(){
			// 	btnbox.style.display="none";
			// 	flagx=true;
			// })                            //左侧导航渐出使用
			btnbox.style.display="none";

		}
	}
	setTimeout(function(){
		animate(nav,{top:-50},function(){
				flags=true;
		})
	},1000)

}




// 楼层跳转 按需加载****************************1不行用2
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
// function louceng2(anniu,Section,anniukuai,daohang,dingbu,donghuaTime,num,chushise,colorArr,pic,picurl){
// 	const btn=$(anniu);
// 	const section=$(Section);
// 	const btnbox=$(anniukuai)[0];
// 	const nav=$(daohang)[0];
// 	const CH=document.documentElement.clientHeight;
// 	const color=colorArr;
// 	const dibu=$(dingbu)[0];
// 	btn[0].style.background=chushise;
// 	let scroll= scrollobj();
// 	dibu.onclick=function(){
// 		animate(scroll,{scrollTop:0},donghuaTime);

// 	}
// 	for(let i=0;i<btn.length;i++){
// 		btn[i].onclick=function(){
// 			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
// 		}
// 	}
// 	for(let i=0;i<btn.length;i++){
// 		btn[i].onmouseover=function(){			
// 				for(let j=0;j<btn.length;j++){
// 					if(scroll.scrollTop+CH*0.5>=section[j].offsetTop){
// 					for(let k=0;k<btn.length;k++){
// 						btn[k].style.background=chushise;
// 					}
// 					btn[j].style.background=color[j];
// 				}else{
// 					btn[j].style.background=chushise;
// 				}				
// 			}
// 		btn[i].style.background=color[i];

// 		}
// 		btn[i].onmouseout=function(){
// 		 btn[i].style.background=chushise;			
// 				for(let j=0;j<btn.length;j++){
// 					if(scroll.scrollTop+CH*0.5>=section[j].offsetTop){
// 					for(let k=0;k<btn.length;k++){
// 						btn[k].style.background=chushise;
// 					}
// 					btn[j].style.background=color[j];
// 				}else{
// 					btn[j].style.background=chushise;
// 				}				
// 			}

// 		}
// 	}
// 	let flagx=true;
// 	let flags=true;
// 	window.onscroll=function(){
// 		for(let i=0;i<section.length;i++){
// 			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
// 				for(let j=0;j<btn.length;j++){
// 					btn[j].style.background=chushise;
// 				}
// 				btn[i].style.background=color[i];
// 			}
// 			if(scroll.scrollTop+CH>=section[i].offsetTop){
// 				let img=$(pic,section[i]);
// 				for(let k=0;k<img.length;k++){
// 					img[k].src=img[k].getAttribute(picurl);
// 				}
// 			}
// 		}
// 		if(scroll.scrollTop>=num){
// 			if(flagx){
// 				flagx=false;
// 				flags=true;
// 				animate(nav,{top:0},donghuaTime,function(){
// 					flagx=true;
// 				})
// 			}
// 			// btnbox.style.display="block";
// 		}else{
// 				if(flags){
// 				flags=false;
// 				flagx=true;
// 				animate(nav,{top:-50},donghuaTime,function(){
// 					flags=true;
// 				})
// 				}
				
// 			// btnbox.style.display="none";

// 			}
// 		if(scroll.scrollTop+0.5*CH>=section[0].offsetTop){
// 			btnbox.style.display="block";
// 			animate(btnbox,{opacity:1},500)

// 		}else{
// 			btnbox.style.display="none";
// 			animate(btnbox,{opacity:0},500)


// 		}
// 	}
// }



//单个返回顶部 案例
	// const tanchudb=$(".tanchudb")[0];
	// let obj=scrollobj();
	// tanchudb.onclick=function(){
	// animate(obj,{scrollTop:0},500);
	// }




//上下轮播

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
			}


			else if(type=="r"){  //右按钮入口
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





//全屏轮播案例
// const img=$(".box ul li");
// 			const lisBox=$(".lisBox")[0];

// 			let now=0;
// 			let next=0;
// 			let flag=true;
// 			//初始化
// 			img[0].style.zIndex=2;
// 			img[0].style.top=0;

// 			for(let i=0;i<img.length;i++){
// 				let lis=$("<dt>");
// 				lis.innerHTML=i+1;
// 				lisBox.appendChild(lis);
// 			}
// 			lisBox.style.height=70*lisBox.children.length+"px";  //  !!!!!

// 			for(let i=0;i<lisBox.children.length;i++){
// 				lisBox.children[i].onclick=function(){
// 					if(i<now){
// 						next=i+1;
// 						if(next<0){
// 							next=lisBox.children.length-1;
// 						}
// 						shang();
// 					}else if(i>now){
// 						next=i-1;
// 						if(next>lisBox.children.length-1){
// 							next=0;
// 						}
// 						xia();
// 					}
// 				}
// 			}

// 			mousewheel(document,shang,xia);

// 			function xia(){
// 				if(flag){
// 					flag=false;
// 					next++;

// 					if(next>img.length-1){
// 						next=0;
// 					}

// 					for(let i=0;i<img.length;i++){
// 						img[i].style.zIndex=1;
// 					}

// 					img[now].style.zIndex=2;
// 					img[next].style.top="100%";
// 					img[next].style.zIndex=3;

// 					animate(img[next],{top:0},500,function(){
// 						now=next;
// 						flag=true;
// 					})
// 				}
// 			}


// 			function shang(){
// 				if(flag){
// 					flag=false;
// 					next--;

// 					if(next<0){
// 						next=img.length-1;
// 					}

// 					for(let i=0;i<img.length;i++){
// 						img[i].style.zIndex=1;			
// 					}

// 					img[now].style.zIndex=2;
// 					img[next].style.top="-100%";
// 					img[next].style.zIndex=3;


// 					animate(img[next],{top:0},500,function(){
// 						now=next;
// 						flag=true;
// 					})
// 				}
// 			}





//下拉导航案例
// const item=$(".item");
// 			const ul=$(".item ul");

// 			for(let i=0;i<ul.length;i++){
// 				let h=parseInt(attr(ul[i],"height"));
// 				ul[i].setAttribute("h",h);
// 				ul[i].style.height=0;
// 			}

// 			for(let i=0;i<item.length;i++){


// 				//第一种方法

// 				// item[i].onmouseover=function(){
// 				// 	if(item[i].children[1]){
// 				// 		let ul=item[i].children[1];
// 				// 		animate(ul,{height:ul.getAttribute("h")},500);
// 				// 	}
// 				// }


// 				// item[i].onmouseout=function(){
// 				// 	if(item[i].children[1]){
// 				// 		let ul=item[i].children[1];
// 				// 		animate(ul,{height:0},500);
// 				// 	}
// 				// }



// 				//第二种hover方法

// 				hover (item[i],function(){
// 					if(item[i].children[1]){
// 						let ul=item[i].children[1];
// 						animate(ul,{height:ul.getAttribute("h")},500);
// 					}

// 					},function(){
// 					if(item[i].children[1]){
// 						let ul=item[i].children[1];
// 						animate(ul,{height:0},500);
// 					}

// 					})


// 			}






//事件函数
//obj   事件源
//type  事件类型  发生了什么
//fn     执行程序  
function one(obj,type,fn){
	//添加第一个type类型事件 执行fn
	obj.addEventListener(type,fn,false);
	//添加第一个type类型事件 执行clear
	obj.addEventListener(type,clear,false);
	function clear(){
		//清除 type类型事件中fn处理程序
		obj.removeEventListener(type,fn,false);
		//清除 type类型事件中clear处理程序
		obj.removeEventListener(type,clear,false);
	}
}



	//拖拽事件 drag()
	//box 要拖拽的元素  要求绝对定位
function drag(box){		
			const winw=document.documentElement.clientWidth;
			const winh=document.documentElement.clientHeight;
			const boxw=box.offsetWidth;
			const boxh=box.offsetHeight;
			box.addEventListener("mousedown",down,false);
			let shubiaox;
			let shubiaoy;
			let boxx;
			let boxy;
			
			function down(e){
				shubiaox=e.clientX;  //鼠标在元素身上位置距离屏幕左距离
				shubiaoy=e.clientY;  //鼠标在元素身上位置距离屏幕上距离
				boxx=box.offsetLeft; //元素box距离屏幕左距离
				boxy=box.offsetTop;  //元素box距离屏幕上距离
				window.addEventListener("mousemove",move,false);  //window添加mouse事件 保证鼠标不会因快速移动而导致元素反应不过来
				window.addEventListener("mouseup",up,false);	//添加一个up事件用来清除move移动事件			
			}

			function move(e){
				let shubiaonewx=e.clientX;    //鼠标在元素身上位置距离屏幕左新的距离
				let shubiaonewy=e.clientY;    //鼠标在元素身上位置距离屏幕上新的距离
				chax=shubiaonewx-shubiaox;
				chay=shubiaonewy-shubiaoy;
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
				if(tops>=winh-boxw){
					tops=winh-boxh;
				}
				box.style.left=lefts+"px";
				box.style.top=tops+"px";
			}
			function up(){     
					window.removeEventListener("mousemove",move,false);  //清除鼠标移动事件 鼠标离开元素不动
					window.removeEventListener("mouseup",up,false);  

			}
}


// 滚轮事件   mousewheel(obj,shang,xia)
//有兼容问题 处理
//obj     鼠标滚动事件源
//shang   鼠标向上滚动触发的事件(一般函数)
//xia     鼠标向下滚动触发的事件


function mousewheel(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
		e.preventDefault() //阻滞因出现滚动条在滚轮滚动时元素跑
		if(e.wheelDelta){
			//谷歌
			if(e.wheelDelta>0){
				//上滚
				shang();
			}else{
				//下滚
				xia();
			}
		}else{
			//火狐
			if(e.detail>0){
				//下滚
				xia();
			}else{
				//上滚
				shang();
			}
		}
	}
}


// 13.获取obj的样式 //下拉导航
	// obj 类型 DOM元素
	// style 类型 string
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}


// 14.cookie添加
// key键名：字符串
// val键值：字符串
// time 过期时间 单位s 可填可不填
	function addCookie(key,val,time){
		val=escape(val);
		if(time){
			let date=new Date();
			time*=1000;
			date.setTime(date.getTime()+time);
			date=date.toGMTString();
			document.cookie=`${key}=${val};expires=${date}`;
		}else{
			document.cookie=`${key}=${val}`;
		}
	}
// 15.查看
// key键名：字符串
	function getCookie(key){
		let cookies=document.cookie;
		let cookiearr=cookies.split(";");
		let val;
		for(let i=0;i<cookiearr.length;i++){
			if(key==cookiearr[i].split("=")[0]){
				val=cookiearr[i].split("=")[1];
			}
		}
		return unescape(val);
	}
 // 16.删除
 // key键名：字符串
	 function delCookie(key){
	 	let date=new Date();
	 	date.setTime(date.getTime()-10000);
	 	date=date.toGMTString();
	 	document.cookie=`${key}=aa;expires=${date}`;
	 }

// 17.去空格
// 去空格// type:before after side all
// let str="  snd sjsj  ";
	function delspace(str,type="side"){
		let rge;
		if(type=="before"){
			reg=/^\s+/;
		}
		if(type=="after"){
			reg=/\s+$/;
		}
		if(type=="side"){
			reg=/^\s+|\s+$/g;
		}
		if(type=="all"){
			reg=/\s/g;
		}
		return str.replace(reg,"");
	}


	
// 18.驼峰
// 驼峰命名let str="tuo-feng-ming";
	 
	 function tuofeng(str){
	 	let newarr=str;
	 	let reg=/-/g;
	 	while(newarr.match(reg)){
	 		let index=newarr.search(reg);//只支持正则
	 		let str1=newarr.slice(0,index);
	 		let str2=newarr.slice(index+1);
	 		str2=str2.replace(str2.charAt(0),str2.charAt(0).toUpperCase());
	 		newarr=str1+str2;
	 	}
	 	return newarr;
	 }


