//    1. 选项卡 
//    btn选项卡按钮 con选项卡内容
//       xuanxiangka(btn1,con1)

// ******************************************************************

// 	   2.遮罩
// 	   btn底下的块，con遮罩的块
//     zhe(btn1,con1)

//************************************************************************

//     3.函数简化
//     $(".box")
// 	   $(function(){})

// *********************************************************************


//     4.层级轮播
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播

// 		Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,type=0)

// ***************************************************************************************************************************

//     5. 左右轮播
	// pic                   轮播图           字符串的选择器 
	// bigbannerBox      通屏banner盒子       字符串的选择器
	// lunbodian              轮播点 		  字符串选择器
	// left 				  左按钮		  字符串的选择器
	// right 				  右按钮		  字符串的选择器
	// liactivebgColor	轮播点获得焦点时背景颜色	字符串
	// lunboTime			  时间间隔				数值
	// lisColor				轮播点普通颜色			字符串
	// donghuashijian       动画完成的时间			数值

//	zylunbo(pic,bigbannerBox,left,right,lunbodian,liactivebgColor,lunboTime,donghuaTime,lisColor)

// ********************************************************************************************************
//		6.	左右轮播 类名
	// lunbotupian 	轮播图
	// lunbodakuai 	放轮播块的大盒子
	// lunbokuai 	放轮播图的轮播快
	// colorArr 	放轮播块的大盒子的背景颜色集合
	// lunbodian 	轮播点
	// zuojian 		左按钮
	// youjian 		右按钮
	// lunboTime 	轮播时间
	// activeClass	 给第一个轮播点加上的类名，定义轮播点选中的颜色
	// donghuashijian 动画完成的时间

//	zulunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,donghuaTime,activeClass)

// *****************************************************************************************************************************


// 		7.层级箭头轮播(全屏) 
	// pic                   轮播图           字符串的选择器 
	// bigbannerBox      通屏banner盒子       字符串的选择器
	// lunbodian              轮播点 		  字符串选择器
	// left 				  左按钮		  字符串的选择器
	// right 				  右按钮		  字符串的选择器
	// liactivebgColor	轮播点获得焦点时背景颜色	字符串
	// lunboTime			  时间间隔				数值
	// lisColor				轮播点普通颜色			字符串
	// donghuashijian       动画完成的时间			数值
	// tuBigZ				高层级
	// tuZ 					普通层级

// zjlunbo(pic,bigbannerBox,lunbodian,left,right,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor)

//		8.节点左右轮播
	// imgBox:放banner图的盒子，宽度要设长；
	// zuojian:左边按钮；
	// youjian:右边按钮；
	// bigBox:放banner图和按钮的盒子；
	// bannerTu:要轮播的banner图；
	// num:一次要轮播的图片数量；
	// lunboshijian:轮播时间；
	// donghuashijian：动画完成的时间

// jiedianlunbo(imgBox,zuojian,youjian,bigBox,bannerTu,num,lunboshijian,donghuashijian)

// ********************************************************************************************


//		9.解决scrollTop兼容性
// 		返回顶层需要

// 		scrollobj()
// *******************************************************************************

// 		10.鼠标滚轮事件

// 		解决火狐，谷歌兼容问题

//		mouseWheel(object,shang,xia);
// ************************************************************


//		11.下拉导航案例
// 		 item              鼠标放入的盒子          字符串的选择器  ".item"
// 		 ul            鼠标放入列表出来的块          字符串的选择器   ".item ul"
// 		需要函数	attr(obj,style)
// 		需要js 		hover.js

// ****************************************************************************************


// 		12.增加事件 主要用 addEventListener
	//shijiany 事件源 				 ".box"
	//aa 		事件 				"click"
	// cx		事件处理程序		function(){alert(1)}

// 		one(shijiany,aa,cx)

// ***************************************************************


// 		13.拖拽
	//对象		  hezi		".box"

//  	tuozhuai(hezi)

// **********************************************************

// 		14.	楼层加载
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
	//dingbu	点击返回html顶部的块

// louceng(anniu,Section,anniukuai,daohang,dingbu,donghuaTime,num,chushise,colorArr,pic,picurl)

// 			15.获取一个元素的style(width,height)
				// attr(obj,style);
				// obj 类型DOM
				// style string "height"

// 与下拉导航案例函数搭配

// attr(obj,style)

//**********************************************************************

// 			16. cookie 添加 / 查看 / 删除


		// addcookie(key,val,[time]);

		//key 	键名       string    “info”
		// val  键值       string   “aaa”
		// [time] 过期时间  单位s


		// getCookie(key);

		//key 键名       string    “info”

		// delCookie(key);
		//key 键名       string    “info”

// ****************************************************************

// 			17.多边形制作
	//cobj  画笔对象 cobj
	//side  边数     3
	//r     半径     100
	//color  颜色    "#000"
	//style 方式 填充与描边  "fill"

	//poly(cobj,5,200,'fill',"red")
	
// **************************************************************

			//18.ajax
			// url  data type asynch dataType  function
			// ajax({url:"check.php",data:"phonenum="+val,// type:"get",// dataType:"text",// asynch:true,
				// 	success:function(r){
					// 	if(r==1){
					// 		notice.innerHTML="可以使用";
					// 		submit.disabled=false;
					// 	}else{
					// 		notice.innerHTML="号码已经被使用";
					// 		submit.disabled=true;
						// 	}
					// }})

// **********************************************************************








// 选项卡 
// btn选项卡按钮 con选项卡内容
	function xuanxiangka(btn1,con1){
		const btn=$(btn1);
		const con=$(con1);
		for(let i=0;i<btn.length;i++){   //for里let不能改成var
			btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				con[j].style.display="none";
			}
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
		}
		}	
	}


// 遮罩
// btn底下的块，con遮罩的块
	function zhe(btn1,con1){
		const btn=$(btn1);
		const con=$(con1);
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
			con[i].style.display="block";
				}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
				}
			}
	}


// 函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();//回调函数
			// }
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);	
			}
			
		}
	}
	// $(".box")
	// $(function(){})


//层级轮播
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,type=0){
		if(type==0){
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		const color=colorArr;
		tupian[0].style.zIndex=tuBigZ;
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
			tupian[j].style.zIndex=tuBigZ;
			li[j].style.background=liactivebgColor;
			banner.style.background=color[j];
			num=j;
			}
		}
		function move(){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		}
		


		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const color=colorArr;
			tupian[0].style.opacity=tuBigZ;
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
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;

				}
				tupian[j].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},donghuaTime);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
				num++;
				if(num>tupian.length-1){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},donghuaTime);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];

			}
		}
	}



// 左右轮播
	// pic                   轮播图           字符串的选择器 
	// bigbannerBox      通屏banner盒子       字符串的选择器
	// lunbodian              轮播点 		  字符串选择器
	// left 				  左按钮		  字符串的选择器
	// right 				  右按钮		  字符串的选择器
	// liactivebgColor	轮播点获得焦点时背景颜色	字符串
	// lunboTime			  时间间隔				数值
	// lisColor				轮播点普通颜色			字符串
	// donghuashijian       动画完成的时间			数值
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
	// lunbotupian 	轮播图
	// lunbodakuai 	放轮播块的大盒子
	// lunbokuai 	放轮播图的轮播快
	// colorArr 	放轮播块的大盒子的背景颜色集合
	// lunbodian 	轮播点
	// zuojian 		左按钮
	// youjian 		右按钮
	// lunboTime 	轮播时间
	// activeClass	 给第一个轮播点加上的类名，定义轮播点选中的颜色
	// donghuashijian 动画完成的时间
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



// 层级箭头轮播
function zjlunbo(pic,bigbannerBox,lunbodian,left,right,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor){
			const tu=document.querySelectorAll(pic);
			const banner=document.querySelectorAll(bigbannerBox)[0];
			const li=document.querySelectorAll(lunbodian);
			const leftbtn=document.querySelectorAll(left)[0];
			const rightbtn=document.querySelectorAll(right)[0];
			const color=colorArr;
			tu[0].style.zIndex=tuBigZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var flag=true;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
			 	t=setInterval(move,lunboTime);
			}

			for(let i=0;i<li.length;i++){
				li[i].onclick=function(){
                    if(flag) {
                        for (let j = 0; j < tu.length; j++) {
                            tu[j].style.zIndex = tuZ;
                            li[j].style.background = lisColor;
                            banner.style.background = color[j];
                            tu[j].style.opacity = 0.1;

                        }
                        tu[i].style.zIndex = tuBigZ;
                        li[i].style.background = liactivebgColor;
                        banner.style.background = color[i];
                        tu[i].style.opacity = 1;
                        num = i;
                    }
				}
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
			function move(type="l"){
                flag=false;
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
                    tu[i].style.opacity=0.1;
					li[i].style.background=lisColor;
					banner.style.background=color[i];

				}
				tu[num].style.zIndex=tuBigZ;
                tu[num].style.opacity=1;
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
                flag=true;
			}
}

//节点左右轮播
	// imgBox:放banner图的盒子，宽度要设长；
	// zuojian:左边按钮；
	// youjian:右边按钮；
	// bigBox:放banner图和按钮的盒子；
	// bannerTu:要轮播的banner图；
	// num:一次要轮播的图片数量；
	// lunboshijian:轮播时间；
	// donghuashijian：动画完成的时间
	function jiedianlunbo(imgBox,zuojian,youjian,bigBox,bannerTu,num,lunboshijian,donghuashijian){
		const box=$(imgBox)[0];
		const leftBtn=$(zuojian)[0];
		const rightBtn=$(youjian)[0];
		const banner=$(bigBox)[0];
		const img=$(bannerTu)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		var flag=true;
		let n=num;
		var t=setInterval(move,lunboshijian);
		function move(type="l"){
			flag=false;
			if(type=="r"){
				animate(box,{marginLeft:-imgw},donghuashijian,function(){
					for(let i=0;i<n;i++){
						let first=box.firstElementChild;
						box.appendChild(first);
					}
					box.style.marginLeft=0;
					flag=true;
				});
			}else if(type=="l"){
				for(let i=0;i<n;i++){
					let last=box.lastElementChild;
					let first=box.firstElementChild;
					box.insertBefore(last,first);
				}
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuashijian,
				function(){
					flag=true;
				});
			}
			
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,1000);
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
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}	
	}

//解决scrollTop兼容性 
function scrollobj(){
		// let body=document.body;
		// let html=document.documentElement;
		// body.scrollTop=1;
		// html.scrollTop=1;
		// let obj;
		// if(body.scrollTop==0){
		// 	obj=html;
		// }else{
		// 	obj=body;
		// }
		// return obj;

		// 第二种方法
		document.body.scrollTop=1;
		document.documentElement.scrollTop=1;//赋不上值
		let obj=document.body.scrollTop?document.body:document.documentElement;

			return obj;

}

/*
鼠标滚轮事件
mouseWheel(object,shang,xia);

*/
function mouseWheel(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
		if(e.wheelDelta){
			//谷歌
			if(e.wheelDelta>0){
				shang();
				
			}else{
				xia();
				
			}
		}else{
			//火狐
			if(e.detail>0){
				shang();
				
			}else{
				xia();
				
			}
		}
	}
}





	//	楼层加载
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
	//dingbu	点击返回html顶部的块
function louceng(anniu,Section,anniukuai,daohang,dingbu,donghuaTime,num,chushise,colorArr,pic,picurl){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	const color=colorArr;
	const dibu=$(dingbu)[0];
	btn[0].style.background=chushise;
	let scroll= scrollobj();
	dibu.onclick=function(){
		animate(scroll,{scrollTop:0},donghuaTime);

	}
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){			
				for(let j=0;j<btn.length;j++){
					if(scroll.scrollTop+CH*0.5>=section[j].offsetTop){
					for(let k=0;k<btn.length;k++){
						btn[k].style.background=chushise;
					}
					btn[j].style.background=color[j];
				}else{
					btn[j].style.background=chushise;
				}				
			}
		btn[i].style.background=color[i];

		}
		btn[i].onmouseout=function(){
		 btn[i].style.background=chushise;			
				for(let j=0;j<btn.length;j++){
					if(scroll.scrollTop+CH*0.5>=section[j].offsetTop){
					for(let k=0;k<btn.length;k++){
						btn[k].style.background=chushise;
					}
					btn[j].style.background=color[j];
				}else{
					btn[j].style.background=chushise;
				}				
			}

		}
	}
	let flagx=true;
	let flags=true;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=color[i];
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
			// btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			// btnbox.style.display="none";

			}
		if(scroll.scrollTop+0.5*CH>=section[0].offsetTop){
			btnbox.style.display="block";
			animate(btnbox,{opacity:1},500)

		}else{
			btnbox.style.display="none";
			animate(btnbox,{opacity:0},500)


		}
	}
}


	//shijiany 事件源 				 ".box"
	//aa 		事件 				"click"
	// cx		事件处理程序		function(){alert(1)}
	function one(shijiany,aa,cx){
		// 添加第一个shijian类型事件，执行aa
		const sjy=document.querySelector(shijiany);
		// 添加第一个shijian类型事件，执行清除事件
		sjy.addEventListener(aa,cx,false);
		sjy.addEventListener(aa,function(){
			// 清除aa的事件程序
			sjy.removeEventListener(aa,cx,false);
		},false);
	}

	//拖拽
	//对象		  hezi		".box"

		function tuozhuai(hezi){
			const box=$(hezi)[0];
			const winw=document.documentElement.clientWidth;
			const winh=document.documentElement.clientHeight;
			const boxw=box.offsetWidth;
			const boxh=box.offsetHeight;
			box.style.position="absolute";
			let boxx;
			let boxy;
			let x;
			let y;
			box.addEventListener("mousedown",down,false);
			function down(e){ 
				x=e.clientX;
				y=e.clientY;
				boxx=box.offsetLeft;
				boxy=box.offsetTop;
				window.addEventListener("mousemove",move,false);
				window.addEventListener("mouseup",up,false);
			}
			function move(e){
				let mx=e.clientX;
				let my=e.clientY;
				let chax=mx-x;
				let chay=my-y;
				let lefts=boxx+chax;
				let tops=boxy+chay;
				if(lefts<0){
					lefts=0
				}else if(lefts>=winw-boxw){
					lefts=winw-boxw;
				}
				if(tops<0){
					tops=0
				}else if(tops>=winh-boxh){
					tops=winh-boxh;
				}

				box.style.left=lefts+"px";
				box.style.top=tops+"px";
			}
			function up(){
			window.removeEventListener("mousemove",move,false);
			window.removeEventListener("mouseup",up,false);}
			}

			/*
			获取一个元素的style(width,height)
				attr(obj,style);
				obj 类型DOM
				style string "height"
			*/
			function attr(obj,style){
				return window.getComputedStyle(obj,null)[style];
			}



		// cookie 添加 / 查看 / 删除
		// addcookie(key,val,[time]);


		//key 	键名       string    “info”
		// val  键值       string   “aaa”
		// [time] 过期时间  单位s
		// getCookie(key);

		//key 键名       string    “info”

		// delCookie(key);
		//key 键名       string    “info”



		// 添加
		function addcookie(key,val,time){
			val=escape(val);
			if(time){
				let date = new Date();
				time*=1000;
				date.setTime(date.getTime()+time);
				date=date.toGMTString();
				document.cookie=`${key}=${val};expires=${date}`;
			}else{
				document.cookie=`${key}=${val}`;//默认会话时间
			}
		}

		// 查看
		
		function getCookie(key){
			let cookie=document.cookie;
			let cookiearr=cookie.split("; ");
			let val;
			for (let i = 0; i < cookiearr.length; i++) {
			let arr=cookiearr[i].split("=");
			if(key==arr[0]){
				val=arr[1];
			}
			};
			return  unescape(val);
		}
		// 删除cookie
		function delCookie(key){
			let date = new Date();
			date.setTime(date.getTime()-1000000);
			date= date.toGMTString();
			document.cookie=`${key}=aa;expires=${date}`;

		}


	//多边形制作
	//cobj  画笔对象 cobj
	//side  边数     3
	//r     半径     100
	//color  颜色    "#000"
	//style 方式 填充与描边  "fill"

	//poly(cobj,5,200,'fill',"red")

	function poly(cobj,side,r,style,color){
		var side=side||3;
		var r=r||100;
		var style=style||"stroke"
		cobj.save();
		cobj.fillStyle=color||"#000";
		cobj.rotate(Math.PI/2)
		var angle=Math.PI/side; //Math.PI*2/side/2;
		var x=Math.cos(angle)*r;
		var y=Math.sin(angle)*r;
		//方法一
		// for(var i=0;i<side;i++){
		// 	cobj.beginPath();
		// 	cobj.moveTo(x,y);
		// 	cobj.lineTo(x,-y);
		// 	cobj.stroke();
		// 	cobj.rotate(angle*2)
		// }

		//方法二
		cobj.beginPath();
		cobj.moveTo(x,y);
		for(var i=0;i<side;i++){	
			
			cobj.lineTo(x,-y);			
			cobj.rotate(-angle*2)
		}
		cobj[style]();
		cobj.restore();
	}


//		下拉导航案例
// 		 item              鼠标放入的盒子          字符串的选择器  ".item"
// 		 ul            鼠标放入列表出来的块          字符串的选择器   ".item ul"
// 		需要函数	attr(obj,style)
// 		需要js 		hover.js

			function xiala(item,ul){
			const item=$(item);
			const ul=$(ul);

			for(let i=0;i<ul.length;i++){
				let h=parseInt(attr(ul[i],"height"));
				ul[i].setAttribute("h",h);
				ul[i].style.height=0;
			}

			for(let i=0;i<item.length;i++){


				//第一种方法

				// item[i].onmouseover=function(){
				// 	if(item[i].children[1]){
				// 		let ul=item[i].children[1];
				// 		animate(ul,{height:ul.getAttribute("h")},500);
				// 	}
				// }


				// item[i].onmouseout=function(){
				// 	if(item[i].children[1]){
				// 		let ul=item[i].children[1];
				// 		animate(ul,{height:0},500);
				// 	}
				// }



				//第二种hover方法

				hover (item[i],function(){
					if(item[i].children[1]){
						let ul=item[i].children[1];
						animate(ul,{height:ul.getAttribute("h")},500);
					}

					},function(){
					if(item[i].children[1]){
						let ul=item[i].children[1];
						animate(ul,{height:0},500);
					}

					})
				}
			}




			//ajax
			// url  data type asynch dataType  function
			
			function ajax(obj){
				var url=obj.url;
				var data=obj.data||"";
				var type=obj.type||"get"
				var asynch=obj.asynch==undefined?true:obj.asynch;
				var dataType=obj.dataType||"text";
				var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
				if(type=="get"){
					xhr.open("get",url+"?"+data,asynch);
					xhr.send();
				}else if(type=="post"){
					xhr.open("post",url,asynch);//MIME text/html text/javascript  text/css  image/png
					xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
					xhr.send(data);
				}
				xhr.responseType=dataType;
				xhr.onload=function(){
					var r=xhr.response;
					obj.success(r)
				}
			}




			// jsonp 
			//url必写  success必写
			 function jsonp(option) {
           	   var url=option.url;
               var data=option.data||"";
               var jsonp=option.jsonp||"callback";
               var jsonpCallback=option.jsonpCallback||"j"+new Date().getTime();

               if(data){
                   url+="?"+data+"&"+jsonp+"="+jsonpCallback;
               }else{
                   url+="?"+jsonp+"="+jsonpCallback;
               }
               var script=document.createElement("script");
               script.src=url;
               document.head.appendChild(script);
               window[jsonpCallback]=function(r){
                   option.success(r);
                   delete  window[jsonpCallback];
                   document.head.removeChild(script);
               }
           }


			