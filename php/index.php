<?php include "header.php" ?>
<?php
$id=0;
?>
<div class="jt">
    <a href="liebiao.php?id=7" class="jtl">
        <i></i>
        <span>军事</span>
    </a>
    <a href="liebiao.php?id=1" class="jtr">
        <span>中国</span>
        <i></i>
    </a>
</div>
<?php include "login2.php";?>
<style>
    .mokuai1-1{
        background: #000;
    }
</style>
<div class="mokuai1">
    <div class="neirong">
        <div class="content clear">
            <div class="index-left">
                <div class="mokuai1-1">
                    <div class="mokuai1-1-1">
                        <ul style="width: 600%;position: absolute;left: 0;" class="clear">
                            <?php
                            $sql4="select * from lists";
                            $result3=$db->query($sql4);
                            for($w=0;$w<18;$w++){
                                $row4=$result3->fetch_assoc();
                                if($row4['id']%3==0) {
                                    ?>
                                    <li>
                                        <div class="slider-page">
                                            <div class="page-img" style="position: relative">
                                                <a target="_blank" href="neirong.php?id=<?php echo $row4['id']?>"><img src="../../../5.27/upload/<?php echo $row4['imageUrl']?>" alt=""></a>
                                                <div class="tags"><a href="">中国时政</a></div>
                                            </div>
                                            <div class="page-header">
                                                <h3><a target="_blank" href="neirong.php?id=<?php echo $row4['id']?>"><?php echo $row4['title']?></a></h3>
                                            </div>
                                            <div class="page-footer">
                                                <p>
                                                    <span class="author"><a href=""><?php echo $row4['author']?></a></span>
                                                    <span><?php echo $row4['time']?></span>
                                                    <span class="collect"><i></i><em>13.8W</em></span>
                                                    <span class="comment"><i></i><em>10</em></span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <?php
                                }
                                }?>
                        </ul>
                    </div>
                    <div class="mokuai1-1-2">
                        <div class="mokuai1-1-3">
                            <a href="javascript:;" class="bigjtl"></a>
                            <a href="javascript:;" class="bigjtr"></a>
                        </div>
                        <div class="mokuai1-1-4">
                            <div class="biaoji"><a href="" class="active" ></a></div>
                            <div class="biaoji"><a href=""></a></div>
                            <div class="biaoji"><a href=""></a></div>
                            <div class="biaoji"><a href=""></a></div>
                            <div class="biaoji"><a href=""></a></div>
                            <div class="biaoji"><a href=""></a></div>
                        </div>
                    </div>
                    <script>
                        var box=$(".mokuai1-1-1 ul");
                        $(".bigjtr").click(function () {
                            box.animate({left:-470},400,"linear",function () {
                                $(".mokuai1-1-1 ul li").eq(0).appendTo(box);
                                box.css("left",0);
                            })
                        });
                        $(".bigjtl").click(function () {
                            $(".mokuai1-1-1 ul li").eq($(".mokuai1-1-1 ul li").length-1).prependTo(box);
                            box.css("left",-470);
                            box.animate({left:0},400,"linear",function () {
                            })
                        });
                    </script>
                </div>
                <!--快讯开始-->
                <div class="mokuai1-2">
                    <div class="mokuai1-2-1">
                        <span>快讯</span>
                        <a href=""></a>
                    </div>
                    <div class="mokuai1-2-2">
                        <div class="mokuai1-2item">
                            <div class="mokuai1-2time">22:13</div>
                            <div class="mokuai1-2title">
                                <h3><a href="">万科监事廖绮云辞职 华润集团还剩3名高管任职万科</a></h3>
                            </div>
                        </div>
                        <div class="mokuai1-2item">
                            <div class="mokuai1-2time">22:13</div>
                            <div class="mokuai1-2title">
                                <h3><a href="">光大银行拟定向增发不超过310亿元</a></h3>
                            </div>
                        </div>
                        <div class="mokuai1-2item">
                            <div class="mokuai1-2time">22:13</div>
                            <div class="mokuai1-2title">
                                <h3><a href="">中央候补委员、中国科大校长万立骏任中国侨联党组书记</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!--快讯结束-->
                <div class="mokuai1-3">
                    <?php
                    $sql3="select * from lists";
                    $result2=$db->query($sql3);
                    for($k=0;$k<10;$k++){
                        $row3=$result2->fetch_assoc();
                        if($row3['id']%2==0){
                    ?>
                    <div class="mokuai1-3-1">
                        <div class="mokuai1-3-2">
                            <a target="_blank" href="neirong.php?id=<?php echo $row3['id']?>"><img src="../../../5.27/upload/<?php echo $row3['imageUrl']?>" alt=""></a>
                        </div>
                        <div class="mokuai1-3-3">
                            <h3><a target="_blank" href="neirong.php?id=<?php echo $row3['id']?>"><?php echo $row3['title']?></a></h3>
                        </div>
                        <div class="mokuai1-3-4">
                            <p>党的十八大以来，以习近平同志为核心的党中央，带领全党全国各族人民开启了改革开放和现代化建设的新征程，...</p>
                        </div>
                        <div class="mokuai1-3-5">
                            <p><span><?php echo $row3['time']?></span></p>
                        </div>
                    </div>
                        <?php }?>
                    <?php }?>
<!--                    <div class="mokuai1-3-1">-->
<!--                        <div class="mokuai1-3-2">-->
<!--                            <a href=""><img src="img/4.jpg" alt=""></a>-->
<!--                        </div>-->
<!--                        <div class="mokuai1-3-3">-->
<!--                            <h3><a href="">砥砺奋进的五年</a></h3>-->
<!--                        </div>-->
<!--                        <div class="mokuai1-3-4">-->
<!--                            <p>党的十八大以来，以习近平同志为核心的党中央，带领全党全国各族人民开启了改革开放和现代化建设的新征程，...</p>-->
<!--                        </div>-->
<!--                        <div class="mokuai1-3-5">-->
<!--                            <p><span>05/17 16:26</span></p>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
            <div class="index-center">
                <!--天下开始-->
                <?php
                $sql="select * from ceshi where pid=0";
                $result=$db->query($sql);
                for($i=0;$i<2;$i++){
                    $row=$result->fetch_assoc();
                ?>
                <div class="center-title">
                    <h3><a href=""><?php echo $row['fenlei']?></a></h3>
                </div>
                <div class="center-con">
                    <?php
                    $sql1="select * from ceshi where pid=".$row['id'];
                    $jieguo=$db->query($sql1);
                    $row1=$jieguo->fetch_assoc();
                    $sql2="select * from lists where cid=".$row1['id'];
                    $result1=$db->query($sql2);
                    for($j=0;$j<4;$j++){
                        $row2=$result1->fetch_assoc();
                    ?>
                    <div class="news-view">
                        <div class="news-img">
                            <a target="_blank" href="neirong.php?id=<?php echo $row2['id']?>"><img src="../../../5.27/upload/<?php echo $row2['imageUrl']?>" alt=""></a>
                        </div>
                        <div class="news-header">
                            <h3><a target="_blank" href="neirong.php?id=<?php echo $row2['id']?>"><?php echo $row2['title']?></a></h3>
                        </div>
                        <div class="news-footer">
                            <p>
                                <span class="author"><a href=""><?php echo $row2['author']?></a><i>·</i></span>
                                <span>37分钟前</span>
                                <span class="comment"><i></i><em>2</em></span>
                            </p>
                        </div>
                    </div>
                    <?php }?>
                </div>
                    <?php }?>
                </div>
                <!--中国开始-->
            <div class="index-right">
                <div class="mokuai2">
                    <div class="mokuai2-1">
                        <h3><span><a href="">体育这里有</a></span><i></i></h3>
                    </div>
                    <div class="mokuai2-2">
                        <div class="mokuai2-3"><a href=""><img src="../img/5.jpg" alt=""></a></div>
                        <div class="mokuai2-4"><h3><a href="">国务院批复长江三角洲城市群发展规划 生态保护将成发展新支撑</a></h3></div>
                        <ul class="mokuai2-5">
                            <li><a href="">西安厕所革命获奖 将新建改扩建公厕1000座</a></li>
                            <li><a href="">龙舟串起城市新乡情</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mokuai2">
                    <div class="mokuai2-1">
                        <h3><span><a href="">时尚不错过</a></span><i></i></h3>
                    </div>
                    <div class="mokuai2-2">
                        <div class="mokuai2-3"><a href=""><img src="../img/5.jpg" alt=""></a></div>
                        <div class="mokuai2-4"><h3><a href="">国务院批复长江三角洲城市群发展规划 生态保护将成发展新支撑</a></h3></div>
                        <ul class="mokuai2-5">
                            <li><a href="">西安厕所革命获奖 将新建改扩建公厕1000座</a></li>
                            <li><a href="">龙舟串起城市新乡情</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mokuai2">
                    <div class="mokuai2-1">
                        <h3><span><a href="">文化生活</a></span><i></i></h3>
                    </div>
                    <div class="mokuai2-2">
                        <div class="mokuai2-3"><a href=""><img src="../img/5.jpg" alt=""></a></div>
                        <div class="mokuai2-4"><h3><a href="">国务院批复长江三角洲城市群发展规划 生态保护将成发展新支撑</a></h3></div>
                        <ul class="mokuai2-5">
                            <li><a href="">西安厕所革命获奖 将新建改扩建公厕1000座</a></li>
                            <li><a href="">龙舟串起城市新乡情</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mokuai2">
                    <div class="mokuai2-1">
                        <h3><span><a href="">去旅行</a></span><i></i></h3>
                    </div>
                    <div class="mokuai2-2">
                        <div class="mokuai2-3"><a href=""><img src="../img/5.jpg" alt=""></a></div>
                        <div class="mokuai2-4"><h3><a href="">国务院批复长江三角洲城市群发展规划 生态保护将成发展新支撑</a></h3></div>
                        <ul class="mokuai2-5">
                            <li><a href="">西安厕所革命获奖 将新建改扩建公厕1000座</a></li>
                            <li><a href="">龙舟串起城市新乡情</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mokuai2">
                    <div class="mokuai2-1">
                        <h3><span><a href="">军事</a></span><i></i></h3>
                    </div>
                    <div class="mokuai2-2">
                        <div class="mokuai2-3"><a href=""><img src="../img/5.jpg" alt=""></a></div>
                        <div class="mokuai2-4"><h3><a href="">国务院批复长江三角洲城市群发展规划 生态保护将成发展新支撑</a></h3></div>
                        <ul class="mokuai2-5">
                            <li><a href="">西安厕所革命获奖 将新建改扩建公厕1000座</a></li>
                            <li><a href="">龙舟串起城市新乡情</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mokuai2">
                    <div class="mokuai2-1">
                        <h3><span><a href="">娱乐不错过</a></span><i></i></h3>
                    </div>
                    <div class="mokuai2-2">
                        <div class="mokuai2-3"><a href=""><img src="../img/5.jpg" alt=""></a></div>
                        <div class="mokuai2-4"><h3><a href="">国务院批复长江三角洲城市群发展规划 生态保护将成发展新支撑</a></h3></div>
                        <ul class="mokuai2-5">
                            <li><a href="">西安厕所革命获奖 将新建改扩建公厕1000座</a></li>
                            <li><a href="">龙舟串起城市新乡情</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-1">
            <div class="footer-title">
                <h3><span>合作伙伴</span></h3>
            </div>
            <div class="footer-2">
                <p>
                    <a href="">新华社</a>
                    &nbsp;|&nbsp; The New York Times &nbsp;|&nbsp;
                    <a href="">FT中文网</a>
                    &nbsp;|&nbsp;
                    <a href="">中国企业家</a>
                    &nbsp;|&nbsp;
                    <a href="">21世纪经济报道</a>
                    &nbsp;|&nbsp;
                    <a href="">中国新闻周刊</a>
                    &nbsp;|&nbsp;
                    <a href="">财经天下周刊</a>
                    &nbsp;|&nbsp;
                    <a href="">华尔街见闻</a>
                </p>
                <p>
                    <a href="">虎嗅</a>
                    &nbsp;|&nbsp;
                    <a href="">观察者网</a>
                    &nbsp;|&nbsp;
                    <a href="">标准财经</a>
                    &nbsp;|&nbsp;
                    <a href="">北京商报</a>
                    &nbsp;|&nbsp;
                    <a href="">极客公园</a>
                    &nbsp;|&nbsp;
                    <a href="">温哥华乐活网</a>
                    &nbsp;|&nbsp;
                    <a href="">新三板在线</a>
                </p>
                <p>
                    <a href="">新浪微博</a>
                    &nbsp;|&nbsp;
                    <a href="">今日头条</a>
                    &nbsp;|&nbsp;
                    <a href="">UC</a>
                    &nbsp;|&nbsp;
                    <a href="">一点资讯</a>
                    &nbsp;|&nbsp;
                    <a href="">凤凰网</a>
                    &nbsp;|&nbsp;
                    <a href="">知乎</a>
                    &nbsp;|&nbsp;
                    <a href="">抽屉</a>
                    &nbsp;|&nbsp;
                    <a href="">360</a>
                </p>
            </div>
        </div>
    </div>
</div>
<?php include "footer.html"?>
<script src="../js/jquery.js"></script>
<script src="../js/main.js"></script>
<script>
    $(".jtl").hover(function(){
        $(this).css("background","#4B7126");
    },function(){ $(this).css("background","");});
    $(".jtr").hover(function(){
        $(this).css("background","#009bff");
    },function(){ $(this).css("background","");})
</script>
</body>
</html>