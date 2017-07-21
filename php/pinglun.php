<?php
session_start();
$uid=$_SESSION['uid2'];
include "../../../5.27/admin/public/db.php";
$uname=$_GET['uname'];
$con=$_GET['con'];
$cid=$_GET['cid'];
$sql="insert into comment (uname,con,uid,cid) values ('{$uname}','{$con}',$uid,$cid)";
$result=$db->query($sql);
if($db->affected_rows>0){
    echo "ok";
}else{
    echo "0";
}