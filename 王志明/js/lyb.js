$(function(){
	const textarea=$('.lybBox textarea')[0];
	const btn=$('.lybBox input[type=button]')[0];
	const con=$('.con ul')[0];
	let ys=$('.tishi span')[0];
	let ks=$('.tishi b')[0];
	console.log(ys);
	var znum=40;
	textarea.onkeydown=btn.onclick=function(e){
		if(e.type=='click'||(e.keyCode==13&&e.ctrlKey)){
		let text=textarea.value;
		if(text.trim()==''){
			textarea.value='';
			return;
		}
		textarea.value='';
		let li=$('<li>');
		li.innerHTML=text;
		con.appendChild(li);
		ys.innerHTML=0;
		ks.innerHTML=znum;
		}
		
	}
	textarea.oninput=textarea.onkeyup=function(){
		let a=textarea.value;
		let b=a.length;
		if(b>znum){
			a=a.substr(0,40);
			textarea.value=a;
			b=znum;
		}
		ys.innerHTML=b;
		ks.innerHTML=znum-b;

	}
})