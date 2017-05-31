//当页面加载之后
window.onload=function (){
	//常量const
	const designWidth=750;//设计大小
	const fontSize=100;//计算比例
	function resizeFont(){
		//变量var
		var CW = document.documentElement.clientWidth;
		// 设备的一个大小
		var radio = CW/designWidth;
		// (0.5)

		var newFontSize = fontSize*radio;
		//百分比的换算
		document.querySelector("html").style.
			fontSize= newFontSize + "px";
	}
	//执行resizeFont
	resizeFont();
	//窗口大小改变时执行resizeFont
	window.onresize=resizeFont;

}