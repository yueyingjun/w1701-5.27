$(".gotop").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 500);
});

$(window).scroll(function() {
	var st = $(this).scrollTop();
	if(st > 300) {
		$(".gotop").show();
	} else {
		$(".gotop").hide();
	}
});