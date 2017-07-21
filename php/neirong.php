<?php include "header.php";
$id=$_GET['id'];
$sql="select * from lists where id=".$id;
$result=$db->query($sql);
$row=$result->fetch_assoc();
?>
<link rel="stylesheet" href="../css/yangshi.css">
<style>
    body{
        background: #f5f5f5;
        font-family: 微软雅黑;
    }
    .conbox{
        width: 700px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 60px;
        background: #fff;
    }
    .contitle{
        padding-bottom:10px;
    }
    .contitle h1{
        color: #141414;
        font-size: 26px;
        line-height: 34px;
        font-weight: 700;
        letter-spacing: -1px;
    }
    .concon{
        padding-top: 15px;
        border-top: 1px solid #CCC;
    }
    .conimg{
        margin-bottom: 30px;
        border-bottom: 1px solid #CCC;
        padding-bottom: 15px;
        overflow: hidden;
    }
    .conimg .author{
        float: left;
        line-height: 50px;
        font-size: 15px;
    }
    .conimg .time{
        float: right;
        line-height: 50px;
        font-size: 15px;
    }
    .conconcon{
        font-size: 17px;
    }
    .conconcon p{
        line-height: 1.8;
        font-family: 微软雅黑;
        color: rgb(14,14,14);
    }
    .pinglunbox{
        width: 70%;
        margin: 0 auto;
        border-top: 1px solid #666;
        border-bottom: 2px solid #666;
    }
    .pinglun{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .pingluncon{
        margin: 10px;
        background: #fff2ed;
        border: 1px solid #333;
        overflow: hidden;
    }
    .pinglunt{
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        font-weight: 600;
        margin-top: 10px;
    }
    #neirong{
        resize: none;
        width: 100%;
        padding: 10px;
        line-height: 20px;
        font-size: 15px;
    }
    .submit{
        width: 100px;
        height: 30px;
        margin-top: 10px;
        background: #f12b35;
        border: 0;
        color: #fff;
        font-size: 15px;
    }
    .pingl{
        width: 100px;
        height: 100%;
        float: left;
    }
    .pingr{
        float: left;
        width: 800px;
        height: 100%;
    }
    .pingl img{
        display: block;
        width: 80px;
        height: 80px;
        margin: 10px auto;
        border-radius: 50%;
    }
    .pingname{
        line-height: 20px;
        margin: 10px;
        font-size: 22px;
        color: #ee315c;
    }
    .pingcon{
        margin: 10px;
        border-left: 1px solid #666;
        padding: 10px;
    }
</style>
<div class="conbox">
    <div class="contitle">
        <h1><?php echo $row['title']?></h1>
    </div>
    <div class="concon">
        <div class="conimg">
            <img src='../../../5.27/upload/<?php echo $row['imageUrl']?>' alt="" width="100%">
            <div class="author">编纂人：<?php echo $row['author']?></div>
            <div class="time">时间：<?php echo $row['time']?></div>
        </div>
        <div class="conconcon">
            <?php echo $row['con']?>
        </div>
    </div>
</div>

<div class="pinglunbox">
    <div class="pinglunt">我要评论：</div>
    <textarea name="" id="neirong" cols="30" rows="10"></textarea>
    <button class="submit">评论</button>
    <ul class="pinglun">
        <?php
        $sql="select * from comment where cid=".$id;
        $result1=$db->query($sql);
        while($row1=$result1->fetch_assoc()){
        ?>
        <li class="pingluncon">
            <div class="pingl">
                <img src="../img/48.jpg" alt="">
            </div>
            <div class="pingr">
                <div class="pingname"><?php echo $row1['uname']?></div>
                <div class="pingcon"><?php echo $row1['con']?></div>
                <div class="message" style="margin: 10px;">
                    <i><?php echo $row1['time']?></i>
                </div>
            </div>
        </li>
        <?php }?>
    </ul>
</div>


<?php include "footer.html"?>
<?php include "login2.php"?>
<script src="../js/main.js"></script>
<script>
    console.log(new Date().getFullYear());
        $("body").delegate("#neirong","focus",function(){
           if($(".nav-login a").length==1){
               $(".loginbox").css("display", "block");
               $(this).blur();
               $("#email").focus();
           }
        });
        $(".submit").click(function () {
            if($(".nav-login a").length==1){
                $(".loginbox").css("display", "block");
            }else{
                console.log($("#neirong").val().length)
                if($("#neirong").val().length<10){
                    alert("评论少于10个字符，请重新输入！");
                }else {
                    var name=$(".nav-login a i").html();
                    var con=$("#neirong").val();
                    $.ajax({
                        url: "pinglun.php",
                        data: "uname="+name+"&con="+con+"&cid=<?php echo $id?>",
                        type:"GET",
                        success: function (data) {
                            if(data=="ok"){
                                $(".pinglun").append("<li class='pingluncon'> <div class='pingl'> <img src='../img/48.jpg' alt=''> </div> <div class='pingr'>"+
                                    "<div class='pingname'>"+name+"</div> <div class='pingcon'>"+con+"</div> <div class='message' style='margin: 10px;'> <i>"+(new Date().getMonth()+1)+"/"+new Date().getDate()+"</i> </div> </div> </li>");
                                $("#neirong").val("");
                            }else{
                                alert(2);
                            }
                        }
                    });
                }
            }
        })
</script>
</body>
</html>