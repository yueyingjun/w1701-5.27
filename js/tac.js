$(function(){
	const textarea =$(".lybbox textarea")[0];
	const btn=$(".lybbox input[value='提交']")[0];
	const btn1=$(".lybbox input[value='重置']")[0];
	const con=$(".con ul")[0];
	const ys=$(".tishi span")[0];
	const ks=$(".tishi b")[0];
	var li;
	textarea.onkeydown=btn.onclick=function(e){
		if(e.type=="click"||(e.keyCode==13&&e.ctrlKey)){
			let  text=textarea.value;
			let reg=/傻|操|艹|fuck|日|SB|笨/g;
			if(text.match(reg)){
				text=text.replace(reg,"*");
			}else{
				text=text;
			}
		if(text.trim()==""){
			textarea.value="";
			return ;
		}
		if(text.length==100){
			alert("")
		}
		textarea.value="";//让vlaue值为空
		li=$("<li>");//创建li
		li.innerHTML=text;//在li内写内容
		con.appendChild(li);//把li放在ul中
		ys.innerHTML=0; //返回初始值
		ks.innerHTML=40;	
	}
}
	//输入键盘次数，触发onkeypress事件
	//textarea.onkeypress=textarea.onkeyup
	textarea.oninput=function(){
		let text=textarea.value;
		let len=text.length;
		if(len>40){
			text=text.substring(0,40);//截取text中长度大于40
			textarea.value=text;//将截取的text返回给textarea.value
			len=40;
			alert("你已超过40个数");
		}
		ys.innerHTML=len;
		ks.innerHTML=40-len;		
	}


	btn1.onclick=function(){
		con.removeChild(li);
	}


})
