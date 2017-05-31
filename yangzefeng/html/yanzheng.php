<?php
header("content-type:image/png");
$img=imagecreate(100,50);
$letter='QWERTYUIOPASDFGHJKLZXCVBNMabcdefghigklmnopqrstuvwxyz1234567890';
imagefill($img,0,0,getcolor($img));
//画点
for($i=0;$i<20;$i++){
    imagesetpixel($img,mt_rand(5,95),mt_rand(2,48),getcolor($img,'s'));
}
//   画线
for($i=0;$i<4;$i++){
    imageline($img,mt_rand(0,100),mt_rand(0,50),mt_rand(0,100),mt_rand(0,50),getcolor($img,'s'));
}
$str="";
for($i=0;$i<4;$i++){
    $char=substr($letter,mt_rand(0,strlen($letter)-1),1);
    $str.=$char;
    imagettftext($img,mt_rand(25,30),mt_rand(-10,10),mt_rand($i*20+10,($i+1)*20),mt_rand(30,40),getcolor($img,'s'),'../static/font/georgiai.ttf',$char);
}
session_start();
$_SESSION['str']=$str;
//颜色函数
function getcolor($img,$cc="q"){
    if($cc=="q"){
        $min=130;
        $max=240;
    }else if($cc=="s"){
        $min=10;
        $max=120;
    }
    return imagecolorallocate($img,mt_rand($min,$max),mt_rand($min,$max),mt_rand($min,$max));
}
imagepng($img);
imagedestroy($img);