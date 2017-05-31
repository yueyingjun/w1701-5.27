window.onload=function(){
	let logn=document.querySelector(".logn")
	let lognall=document.querySelector(".logn_all")
	console.log(logn)
	logn.onclick=function(){
		console.log(logn)
		lognall.style.display="block"
		if (document.addEventListener) {  
    document.addEventListener('DOMMouseScroll', scrollFunc, false);  
  }//W3C  
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome  
}  
function scrollFunc(evt) {  
  return false;
	}
}
