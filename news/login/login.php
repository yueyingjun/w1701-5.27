<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/5/10
 * Time: 1:37
 */

header("content-type:text/html;charset=utf8");
session_start();

//验证验证码
//$yanzheng=$_REQUEST['yanzheng'];
//if(strtoupper($_SESSION['str'])!=strtoupper($yanzheng)){
//    $message='验证码错误';
//    $src='login.html';
//    include('message.html');
//    exit;
//}

//验证用户名 密码
$user=$_REQUEST['username'];
$pass=$_REQUEST['password'];
var_dump($user);
$db=new mysqli('localhost','root','','onesql');
$sql="select * from user where zhanghao='$user'";
$db->query("set names utf8");
$result=$db->query($sql);
$row=$result->fetch_assoc();
//var_dump($row);
if($row){
    if($row['pass']==$pass){

        $_SESSION['zhanghao']=$user;
        $message="登录成功";
        $src="../table.php";
        include("message.html");
    }else{
        $message="密码错误";
        $src="login.html";
        include("message.html");
    }

}else{
    $message="用户名不存在,请注册";
    $src="zhuce.html";
    include("message.html");
}