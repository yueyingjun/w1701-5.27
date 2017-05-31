<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2017/5/8
 * Time: 6:52
 */
header("Content-Type:text/html;charset=utf8");

$user=$_REQUEST['user'];
$pass=$_REQUEST['pass'];

$db=new mysqli('localhost','root','','onesql');
$sql="select zhanghao from user WHERE user='$user'";
$db->query("set names utf8");
$result=$db->query($sql);
//$row=$result->fetch_assoc();

if($result['user']){
    $message="用户名已存在，请重新注册";
    $src="zhuce.html";
    include("message.html");
    exit;
}
$sql="insert into user (zhanghao,pass) VALUES ('$user','$pass')";
$db->query("set names utf8");
$result=$db->query($sql);

if($result){
    $message="注册成功,请登录";
    $src="login.html";
    include("message.html");

}else{
    $message="注册失败，请重新注册";
    $src="zhuce.html";
    include("message.html");
}