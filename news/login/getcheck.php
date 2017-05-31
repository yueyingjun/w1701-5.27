<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/5/6
 * Time: 17:39
 */
header("content-type:image/png");
$img=imagecreatetruecolor(100,40);
$letter='qwertyuiopasdfghjklzxcvbnm1234567890';

imagefill($img,0,0,getcolor($img));
//imagepng($img);
//imagedestroy($img);
//画干扰点
for($i=0;$i<30;$i++){
    imagesetpixel($img,mt_rand(5,100),mt_rand(5,50),getcolor($img,$type="s"));
};
//画干扰线
for($i=0;$i<mt_rand(1,5);$i++){
    imageline($img,mt_rand(5,50),mt_rand(5,50),mt_rand(5,100),mt_rand(5,100),getcolor($img,$type="q"));
};
//画文字
for($i=0;$i<4;$i++){
    $char=substr($letter,mt_rand(0,strlen($letter)-1),1);
//    $char=mt_rand(0,1)? strtoupper($char):$char;
//    array_push($arr,$char);
//    imagettftext($img,mt_rand(20,30),mt_rand(-20,20),mt_rand(10+$i*20,10+($i+1)*20),mt_rand(35,45),getcolor($img,'s'),'ARCENA.ttf',$char);
    imagettftext($img,mt_rand(25,30),mt_rand(-20,20),mt_rand(10+$i*20,10+($i+1)*20),mt_rand(35,45),getcolor($img,$type="q"),'ARCENA.ttf',$char);
};

imagepng($img); //输出图片
imagedestroy($img); // 销毁图片资源
function getcolor($img,$type="q"){
    if($type=="q"){
        $min=130;
        $max=250;
    }else if($type=='s'){
        $min=10;
        $max=120;
    }
   return  imagecolorallocate($img,mt_rand($min,$max),mt_rand($min,$max),mt_rand($min,$max));

}