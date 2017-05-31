window.onload=function(){
	let box=document.querySelector('.box');
	let ul=document.querySelector('.box>ul');
	let text=document.querySelector('.box>textarea');
	let btn=document.querySelector('.box>button');
	let warn=document.querySelector('.box>.warn');
	btn.onclick=function(){
		submit();
	}
	function submit(){
		let value=text.value;//获取textarea的输入值
		if(value){
			let li=document.createElement('li');//在ul下创建li标签，
			li.innerHTML=value;//并把获取的value值放到li中，
			ul.appendChild(li);//li放置在ul内尾部
			warn.innerHTML='一共可以输入40个字，您已输入0个，还可以输入40个';//把写的内容提交后warn中的内容变成初始的内容
			text.value='';//textarea内容清空
		}else{
			alert('输入的内容不能为空');
		}
	}
	document.onkeyup=function(e){
		e.preventDefault();
		let code=e.keyCode;
			console.log(code);
		if(e.shiftKey&&code==13){//如果按下ctrl并且按下enter，提交
			console.log(1);
			submit();
		}
		let value=text.value;//获取textarea的输入值
		let len=value.length;
		if(len<=40){//如果字数小于40个
			warn.innerHTML=`一共可以输入40个字，您已输入${len}个，还可以输入${40-len}个`;
		}else{
			text.value=value.substr(0,40);//截取40个字符
		}
	}	

}