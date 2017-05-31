<?php
	
?>
<!doctype html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
    <script src="../static/js/jquery.min.js"></script>
    <style>
        html,body{
            width:100%;
            height:100%;
            background-image: url(../static/img/banner02.jpg);
            background-position: center;
        }
        #box{
            width:500px;
            height:270px;
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            margin:auto;
            box-shadow: 0 0 55px 0px #fff;
            background:#323335;
            color:#fff;
            border-radius:20px;
            padding-top:20px;
            text-align: center;
        }
        #box h4{
            margin:0 auto;
            font-size:24px;
        }
        #box h4 span{
            font-size:30px;
        }
        #box a{
            width:60px;
            height:60px;
            display: block;
            margin:50px auto;
            color:#0079C8;
            text-decoration: none;
            font-size:20px;
            line-height:60px;
            border-radius:50%;
            background:#fff;
            font-weight: blod;
        }
    </style>
</head>
<body>
    <div id="box">
        <h4><?php echo $message?>
            <span>3</span>秒后跳转
        </h4>
        <h3>若3秒后没有跳转，请点击以下链接</h3>
        <a href="<?php echo $src?>">链接</a>
    </div>
<script>
	var span=document.querySelector('span');
	var a=document.querySelector('a');
	var url=a.href;
	//console.log(url);
//	console.log(span);
	var i=3;


	$('a').on('click',function(e){
	    e.preventdefault();
    })



	var t=setInterval(function(){
		i--;
		if(i==0){
		    if(url=="http://localhost/5.2phpyufa/Mycms/admin/sql.html"){
		        top.location.href=url;
            }else{
                location.href=url;
                //console.log(url);
            }

		}
		span.innerHTML=i;
	},1000);



</script>
</body>
</html>