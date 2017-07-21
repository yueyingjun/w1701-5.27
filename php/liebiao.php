<?php include "header.php" ?>
<?php
$db=new mysqli("localhost","root","","w1701");
$db->query("set names utf8");
$id=$_GET['id'];
$sql="select * from ceshi where id=".$id;
$result=$db->query($sql);
$row=$result->fetch_assoc();
?>
<link rel="stylesheet" href="../css/liebiao.css">
<link rel="stylesheet" href="../css/yangshi.css">
<style>
    .mokuai1-1-1 ul li{
        width: 100%;
    }
    .mokuai1-1,.mokuai1-1-1{
        height: auto;
    }
    .bannerbox{
        padding: 0 190px 0 189px;
        position: relative;
        height: 350px;
        overflow: hidden;
        max-width: 700px;
        margin: 0px auto;
    }
    .bannerboxs{
        width: 100%;
        position: relative;
        height: 350px;
    }
    .bannerboxs ul{
        width: 600%;
        height: 100%;
        position: absolute;
        left: -700px;
        /*transition: all 1.5s linear;*/
    }
    .bannerboxs ul li{
        width: 700px;
        height: 100%;
        float: left;
    }
    .bannerboxs ul li a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .zhegai a{
        position: absolute;
        top: 0;
        width: 190px;
        background: rgba(0, 0, 0, .5);
        height: 350px;
        text-align: center;
        font: 700 60px/350px leeter;
        color: #222;
    }
    .zhel{
        left: 0;
        border-right: 1px solid #FFF;
    }
    .zher{
        right: 0;
        border-left: 1px solid #fff;
    }
</style>
<div class="container">
    <div class="mokuai1 clear" id="<?php echo 'mo'.$id?>">
        <div class="mokuai1-1" style="background:transparent">
            <div class="mokuai1-1-1">
                <h2><a href=""><?php echo $row['fenlei']?></a></h2>
                <ul>
                    <?php
                    $sql1="select * from ceshi where pid=".$id;
                    $result1=$db->query($sql1);
                    while ($row1=$result1->fetch_assoc()){
                    ?>
                    <li><a href="jutifen.php?id=<?php echo $row1['id']?>&lid=<?php echo $id?>" class="fenlei"><?php echo $row1['fenlei']?></a></li>
                    <?php }?>
<!--                    <li><a href="">社会民生</a></li>-->
<!--                    <li><a href="">深度报道</a></li>-->
                    <script>
                        $(".fenlei").click(function () {
                            $(this).css({"background-color": "rgba(0, 0, 0, .2)","border-bottom": 0,"border-top-color": "rgba(0, 0, 0, .35)"});
                        })
                    </script>
                </ul>
            </div>
        </div>
        <div class="mokuai1-2">
            <div class="mokuai1-2-1">
                <div class="bannerbox">
                    <div class="bannerboxs">
                        <ul>
                            <li><a href=""><img src="../img/banner11.jpg" alt=""></a></li>
                            <li><a href=""><img src="../img/banner12.jpg" alt=""></a></li>
                            <li><a href=""><img src="../img/banner13.jpg" alt=""></a></li>
                            <li><a href=""><img src="../img/banner11.jpg" alt=""></a></li>
                            <li><a href=""><img src="../img/banner12.jpg" alt=""></a></li>
                            <li><a href=""><img src="../img/banner13.jpg" alt=""></a></li>
                        </ul>
                    </div>
                    <div class="zhegai">
                        <a href="" class="zhel"></a>
                        <a href="" class="zher"></a>
                    </div>
                </div>
            </div>
            <script>
                var box=$(".bannerboxs ul");
                setInterval(function () {
                    box.animate({left:-1400},1000,"linear",function () {
                        $(".bannerboxs ul li").eq(0).appendTo(box);
                        box.css("left",-700);
                    })
                },3100);
            </script>
            <div class="mokuai1-2-2 clear">
                <?php
                $sql1="select * from ceshi where pid=".$id;
                $result2=$db->query($sql1);
                while ($row2=$result2->fetch_assoc()){
                    $sql="select * from lists where cid=".$row2['id'];
                    $result3=$db->query($sql);
                    while($row3=$result3->fetch_assoc()){
                ?>
                <div class="news-view">
                    <div class="news-img"><a target="_blank" href="neirong.php?id=<?php echo $row3['id']?>"><img src="../../../5.27/upload/<?php echo $row3['imageUrl']?>" alt=""></a></div>
                    <div class="news-con">
                        <div class="mokuai1-2-3"><a href="">热点关注</a></div>
                        <div class="mokuai1-2-4"><h3><a target="_blank" href="neirong.php?id=<?php echo $row3['id']?>"><?php echo $row3['title']?></a></h3></div>
                        <div class="mokuai1-2-5"><p><span><a href=""><?php echo $row3['author']?></a><i>·</i></span><span><?php echo $row3['time']?></span></p></div>
                    </div>
                </div>
                        <?php }?>
                <?php }?>
<!--                <div class="news-view">-->
<!--                    <div class="news-img"><a href=""><img src="../img/7.jpg" alt=""></a></div>-->
<!--                    <div class="news-con">-->
<!--                        <div class="mokuai1-2-3"><a href="">热点关注</a></div>-->
<!--                        <div class="mokuai1-2-4"><h3><a href="">石家庄一奥迪车主殴打礼让斑马线司机 已被刑拘</a></h3></div>-->
<!--                        <div class="mokuai1-2-5"><p><span><a href="">石家庄公安交警</a><i>·</i></span><span>35分钟前</span></p></div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</div>

<div class="jt">
    <?php
    $lei=$id-1;
    if($lei==0){
        ?>
    <a href="index.php" class="jtl">
        <i></i>
        <span>首页</span>
    </a>
    <?php }else{
        $sql2="select * from ceshi where id=".$lei;
        $result4=$db->query($sql2);
        $row4=$result4->fetch_assoc();
        ?>
        <a href="liebiao.php?id=<?php echo $id-1?>" class="jtl">
            <i></i>
            <span><?php echo $row4['fenlei']?></span>
        </a>
    <?php }?>
    <?php
    if($id+1>7){
    ?>
        <a href="index.php" class="jtr">
            <span>首页</span>
            <i></i>
        </a>
    <?php }else{
        $sql3="select * from ceshi where id=".($id+1);
        $result5=$db->query($sql3);
        $row5=$result5->fetch_assoc();
        ?>
    <a href="liebiao.php?id=<?php echo $id+1?>" class="jtr">
        <span><?php echo $row5['fenlei']?></span>
        <i></i>
    </a>
    <?php }?>
</div>
<?php include "login2.php"?>
<?php include "footer.html"?>
<script src="../js/jquery.js"></script>
<script src="../js/main.js"></script>
<script>
//    $(".jtl").hover(function(){
//            $(this).css("background","#f12b35");
//    },function(){ $(this).css("background","");});
//    $(".jtr").hover(function(){
//        $(this).css("background","#741884");
//    },function(){ $(this).css("background","");})
</script>
</body>
</html>