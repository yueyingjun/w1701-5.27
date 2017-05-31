<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/8
 * Time: 18:14
 */
    header("content-type:text/html;charset=utf8");
    session_start();
    //验证验证码
    $yanzheng=$_REQUEST['yanzheng'];
    var_dump($yanzheng);
    var_dump($_SESSION['str']);

    if(strtoupper($_SESSION['str'])!==strtoupper($yanzheng)){
//        var_dump(1);
//        var_dump(strtoupper($_SESSION['str'])==strtoupper($yanzheng));
        $message='验证码错误';
        $src='sql.html';
        include('success.php');
        exit;
    }


    $user=$_REQUEST['user'];
    $pass=$_REQUEST['pass'];
    $db=new mysqli('localhost','root','','onesql');
    $sql="select namess,pass from admin WHERE namess='$user'";
    $result=$db->query($sql);
    $row=$result->fetch_assoc();
    if($row){
        if($row['pass']==$pass){
            $_SESSION['user']=$user;
            $_SESSION['pass']=$pass;
            $message='登陆成功';
            $src='index.html';
            include 'success.php';
        }else{
            $message='登陆失败，密码错误';
            $src='sql.html';
            include 'success.php';
        }
    }else{
        $message='登陆失败，账号不存在';
        $src='sql.html';
        include 'success.php';
    }
