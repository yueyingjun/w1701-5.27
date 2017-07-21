<?php include "header.php" ?>
<?php
$db=new mysqli("localhost","root","","w1701");
$db->query("set names utf8");
$id=$_GET['id'];
$lid=$_GET['lid'];
$sql="select * from lists where cid=".$id;
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
</style>
<div class="container">
    <div class="mokuai1 clear" id="<?php echo 'mo'.$lid?>">
        <div class="mokuai1-1" style="height:auto;background:transparent">
            <div class="mokuai1-1-1">
                <?php
                $sql="select * from ceshi where id=".$id;
                $result1=$db->query($sql);
                $jieguo=$result1->fetch_assoc();
                $sql1="select * from ceshi where id=".$jieguo['pid'];
                $result2=$db->query($sql1);
                $jieguo2=$result2->fetch_assoc();
                ?>
                <h2><a href="liebiao.php?id=<?php echo $jieguo2['id']?>"><?php echo $jieguo2['fenlei']?></a></h2>
                <ul>
                    <?php
                    $sql1="select * from ceshi where pid=".$jieguo['pid'];
                    $result3=$db->query($sql1);
                    while ($row1=$result3->fetch_assoc()){
                        if($row1['id']==$id){
                           ?>
                            <li><a style="background-color: rgba(0, 0, 0, .2);border-bottom: 0;border-top-color: rgba(0, 0, 0, .35);" href="jutifen.php?id=<?php echo $row1['id']?>&lid=<?php echo $lid?>" class="fenlei"><?php echo $row1['fenlei']?></a></li>
                        <?php }else{
                        ?>
                        <li><a href="jutifen.php?id=<?php echo $row1['id']?>&lid=<?php echo $lid?>" class="fenlei"><?php echo $row1['fenlei']?></a></li>

                        <?php }?>
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
<!--            <div class="mokuai1-2-1"></div>-->
            <div class="mokuai1-2-2 clear">
                <?php
                $sql1="select * from lists where cid=".$id;
                $result4=$db->query($sql1);
                while ($row2=$result4->fetch_assoc()){
                        ?>
                        <div class="news-view">
                            <div class="news-img"><a target="_blank" href="neirong.php?id=<?php echo $row2['id']?>"><img src="../../../5.27/upload/<?php echo $row2['imageUrl']?>" alt=""></a></div>
                            <div class="news-con">
                                <div class="mokuai1-2-3"><a href="">热点关注</a></div>
                                <div class="mokuai1-2-4"><h3><a target="_blank" href="neirong.php?id=<?php echo $row2['id']?>"><?php echo $row2['title']?></a></h3></div>
                                <div class="mokuai1-2-5"><p><span><a href=""><?php echo $row2['author']?></a><i>·</i></span><span><?php echo $row2['time']?></span></p></div>
                            </div>
                        </div>
                <?php }?>
            </div>
        </div>
    </div>
</div>

<div class="jt">
    <a href="../index.html" class="jtl">
        <i></i>
        <span>首页</span>
    </a>
    <a href="liebiao.php?id=2" class="jtr">
        <span>娱乐</span>
        <i></i>
    </a>
</div>
<?php include "login2.php"?>
<?php include "footer.html"?>
<script src="../js/jquery.js"></script>
<script src="../js/main.js"></script>
<script>
    $(".jtl").hover(function(){
        $(this).css("background","#f12b35");
    },function(){ $(this).css("background","");});
    $(".jtr").hover(function(){
        $(this).css("background","#741884");
    },function(){ $(this).css("background","");})
</script>
</body>
</html>