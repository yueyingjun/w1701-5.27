window.onload=function(){
	let sign=$('.sign');
	let zhuce=$('.zhuce');
	let body=$('.body');
	$('.a-sign').click(function(){
		sign.css('display','block');
		body.css('opacity','0.3');
	})
	$('.a-zhuce').click(function(){	
		body.css('opacity','0.3');
		zhuce.css('display','block');
	})
	$('.submit').click(function(){
		zhuce.css('display','none');
		sign.css('display','none');
		body.css('opacity','1');	
	})
	$('.sign-zhuce').click(function(){
		body.css('opacity','0.3');
		zhuce.css('display','block');
		sign.css('display','none');
	})
}
