<?php
header("content-type:text/html;charset=utf-8");
session_start();

//$_SERVER  获取所在文件的一些东西
//strrpos();找有没有某些字符
//where ID like '%2%'  找ID中有2 的
//history.go(-1)  limit 0,3  限制取几行数据
//not id=8;
//关联查询
//select * from ceshi,lists where ceshi.id=1 and lists.cid=1
//as起别名
//把row放入数组
//用foreach循环数组
//svn checkout -http
//svn add *
//svn commit -m ""


$zhanghao=$_POST['zhanghao'];
$pass=$_POST['pass'];
$db=new mysqli("sqld.duapp.com","61b650e1fcab4f2ab16461f9bd94c1ee","faefa192cb56417ab8736ca10f4a32a3","EGrUZotrsLRwJgmlQsqu");
$db->query("set names utf8");
$sql="select * from users";
$result=$db->query($sql);
//$id=$_GET['id'];
$a=0;
while($row=$result->fetch_assoc()){
    if($row["zhanghao"]==$zhanghao and $row['pass']==$pass){
        $a=1;
            $_SESSION['userlogin']='yes';
            $_SESSION['uname2']=$row['name'];
            $_SESSION['uid2']=$row['id'];
            echo $row['name'];
            exit;
            if($_GET['id']!=0){
                echo "<script>alert('登录成功！');location.href='liebiao.php?id={$_GET['id']}'</script>";
            }
            echo "<script>alert('登录成功！');location.href='index.php'</script>";
    }
}
if($a==0){
    echo "no";
//    echo "<script>alert('登录失败！');location.href='index.php'</script>";
}