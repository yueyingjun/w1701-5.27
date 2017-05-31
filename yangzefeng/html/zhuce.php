    <?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/9
 * Time: 1:48
 */
header("content-type:text/html;charset=utf8");
session_start();
//验证验证码
$user=$_REQUEST['user'];
$pass1=$_REQUEST['pass1'];
$pass2=$_REQUEST['pass2'];
//var_dump($pass1);
//var_dump($pass2);
$db=new mysqli('localhost','root','','onesql');
$sql="select namess from admin WHERE namess='$user'";
$result=$db->query($sql);
$row=$result->fetch_assoc();
if($row['namess']){
    $message="用户名已存在，请重新注册";
    $src="zhuce.html";
    include ("success.php");
    exit;
}
if($pass1!==$pass2){
    $message="两次密码输入不一致，请重新注册";
    $src="sql.html";
    include ("success.php");
    exit;
}
$sql="insert into admin (namess,pass) VALUES ('$user','$pass1')";
$db->query("set names utf8");
$result=$db->query($sql);

if($result){
    $message="注册成功,立即登录";
    $src="sql.html";
    include ("success.php");

}else{
    $message="注册失败";
    $src="sql.html";
    include ("success.php");
}

