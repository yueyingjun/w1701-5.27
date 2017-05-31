window.onload=function(){
	let ul=document.querySelector(".lyq ul")
	let li=document.querySelectorAll(".lyq ul li")
	let text=document.querySelector("textarea")
	let btn=document.querySelector("button")
	let zi=document.querySelector(".zii")

	btn.onclick=function(){
		let value=text.value;
		if(value){
			text.value=""
			let li=document.createElement("li")
			li.innerHTML=value;
			ul.appendChild(li);
			zi.innerHTML="一共能输入144个，已经输入了0还能输144";
		}else{
			alert("内容不能为空")
		}
	}
	document.onkeyup=function(e){
		let value=text.value;
		let len=value.length;
		if(len<=144){
			zi.innerHTML=`一共能输入144个，已经输入了${len}还能输${140-len}`;
		}else if(len>144){
			let str=value.substr(0,144);
				text.value=str;
		}	
		let code=e.keyCode
		console.log(code)




}
















}