<?php
header("content-type:text/html;charset=utf-8");
session_start();
foreach ($_SESSION as $k=>$v){
    if($k=="userlogin") {
        unset($_SESSION[$k]);
        echo "ok";
        exit;
    }
}
echo "<script>alert('退出成功！');location.href='index.php'</script>";