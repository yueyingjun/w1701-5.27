/**
 * Created by lenovo on 2017/5/30.
 */
$(function(){
    //留言板
    //1.写入留言
    var ulhad=$('ul.had');
    console.log(ulhad);
    for(var i=0;i<4;i++){
        var lin=$('<li>');
        lin.html(`<div class="content">
								<div class="num">
									<div class="cir">0${4-i}</div>
								</div>
								<div class="name">
									<p>代用名</p>
									<p>2017-5-31</p>
									<p><span class='del'>删除留言</span>&nbsp;/&nbsp;回复留言</p>
								</div>
								<div class="words">
									<p>带回家光临凡客尽快地方噶几节课开发</p>
								</div>
							</div>`)
        lin.appendTo(ulhad);
    }



    var clear=$('button.null');//清空按钮
    var sub=$('button.sub');//提交按钮
    var inp=$('form input,textarea');
    console.log(sub);
//	inp.each(function(){
//		if($(this).val()){
//			console.log(false) ;
//		}else{
//			console.log(true);
//		}
//	})

//2.清空功能
    clear.click(function(e){
        // alert("qingk");
        e.preventDefault();
        inp.val('');
        $('form div.error').remove();
    })
//3.提交功能
    var j=4;
    sub.click(function(e){
        // alert(1);
        e.preventDefault();

        if(inp.eq(0).val()&&inp.eq(1).val()&&inp.eq(2).val()&&inp.eq(3).val()){
            j++;
            var linn=$('<li>');
            linn.html(`<div class="content">
									<div class="num">
										<div class="cir">0${j++}</div>
									</div>
									<div class="name">
										<p>${inp.eq(0).val()}</p>
										<p>2016-8-31</p>
										<p><span class='del'>删除留言</span>&nbsp;/&nbsp;回复留言</p>
									</div>
									<div class="words">
										<p>${inp.eq(3).val()}</p>
									</div>
								</div>`)

            linn.prependTo(ulhad);
            inp.val('');
        }else{

                alert('请输入内容');


        }
    })
//4.删除功能
    var del=ulhad.find('span.del');
    del.hover(function(){
        $(this).css('color','red');
    },function(){
        $(this).css('color','#333');
    })
    del.click(function(){
        $(this).parentsUntil('ul').remove();
    })
})

