<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>天下_界面新闻</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="icon" href="../img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../css/login.css">
    <script src="../js/jquery.js"></script>
    <style>
        .nav1:nth-child(2) a{
            border-top-color: #009bff;
        }
        .quna{
            float: right;
            color: #fff;
            line-height: 30px;
            margin-left: 15px;
        }
        .quna:hover{
            color: #f12b35;
        }
    </style>
</head>
<body>
<header>
    <div class="header-inner">
        <div class="header-container">
            <nav class="header-top clear">
                <div class="site-logo">
                    <h1 class="logo">
                        <a href="">
                            <img src="../img/logo.png" alt="" height="40">
                        </a>
                    </h1>
                    <p>只服务于独立思考的人群</p>
                </div>
                <div class="site-top-search">
                    <input type="text" placeholder="搜索">
                    <button>
                        <i class="header-search"></i>
                    </button>
                    <a class="quna" href="../../../5.27/admin/main.php" style="float: right">登录管理系统</a>
                </div>
            </nav>
            <nav class="nav">
                <ul class="nav1">
                    <li class="navlist">
                        <a href="index.php" style="background: #f12b35;border-top-color: #f12b35;">首页</a>
                    </li>
                    <?php
                    header("content-type:text/html;charset=utf-8");
                    session_start();
                    $db=new mysqli("localhost","root","","w1701");
                    $db->query("set names utf8");
                    $sql="select * from ceshi where pid=0 and isshow=0";
                    $result=$db->query($sql);
                    while($row=$result->fetch_assoc()){
                    ?>
                    <li class="navlist">
                        <a href="liebiao.php?id=<?php echo $row['id']?>" style=""><?php echo $row['fenlei']?></a>
                    </li>
                    <?php }?>
                    <!--<li class="navlist">-->
                        <!--<a href="lists/yule.html" style="border-top-color: #741884;">娱乐</a>-->
                    <!--</li>-->
                    <!--<li class="navlist">-->
                        <!--<a href="lists/tiyu.html" style="border-top-color: #3B900E;">体育</a>-->
                    <!--</li>-->
                    <!--<li class="navlist">-->
                        <!--<a href="lists/shishang.html" style="border-top-color: #fff;">时尚</a>-->
                    <!--</li>-->
                    <!--<li class="navlist">-->
                        <!--<a href="lists/wenhua.html" style="border-top-color: #8A9FB3;">文化</a>-->
                    <!--</li>-->
                    <!--<li class="navlist">-->
                        <!--<a href="lists/lvxing.html" style="border-top-color: #FFA300;">旅行</a>-->
                    <!--</li>-->
                    <!--<li class="navlist">-->
                        <!--<a href="lists/junshi.html" style="border-top-color: #4B7126;">军事</a>-->
                    <!--</li>-->
                    <li style="float: right">
                        <div class="xiala">
                            <span>APP <i class="zhuandong"> <s><></s></i></span>
                            <div class="yincang">
                                <ul>
                                    <li><a href=""><i class="tubiao1" style="background-position: -30px -60px;margin-right: 5px;"></i>iPhone</a></li>
                                    <li><a href=""><i class="tubiao1" style="background-position: -30px -30px;margin-right: 5px;"></i>Android</a></li>
                                    <li><p><img src="../img/7.png" alt="" width="120" height="120"></p></li>
                                </ul>
                            </div>
                        </div>
                        <div class="xiala">
                            <span>关注 <i class="zhuandong"> <s><></s></i></span>
                            <div class="yincang">
                                <ul>
                                    <li>
                                        <a href=""><i class="tubiao1" style="background-position: 0 -30px;"></i><span>RSS</span></a>
                                    </li>
                                    <li>
                                        <a href=""><i class="tubiao1" style="background-position: 0 0;"></i><span>微博</span></a>
                                    </li>
                                    <li>
                                        <a href=""><i class="tubiao1" style="background-position: 0 -60px;"></i><span>微信</span></a>
                                        <p><img src="../img/7.png" alt="" width="120" height="120"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="xiala">
                            <span>互动 <i class="zhuandong"> <s><></s></i></span>
                            <div class="yincang">
                                <ul>
                                    <li><a href=""><span>吐槽</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="nav-login" style="overflow: hidden">
                            <?php
                            if(!isset($_SESSION["userlogin"])){?>
                                <a href="javascript:;">登录</a>
                            <?php }else{?>
                                <a href="javascript:;">欢迎 <i><?php echo $_SESSION['uname2']?></i>！</a>
                                <a href="javascript:;" class="tuichu">退出</a>
                            <?php }?>
                        </div>
                        <a href="../../../5.27/mobile/1.php" style="    color: #fff;line-height: 38px;margin-left: 20px;">去新闻移动端>></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>