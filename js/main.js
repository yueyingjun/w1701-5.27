$(function () {


//banner
    zjlunbo(".owl-item", ".owl-carousel", ".owl-dot span", ".owl-prev", ".owl-next", ["#fff"], 2, "#a50034", 3000, 1, "#d6d6d6");
//选项卡
    var btn = $("#RealTimeNav li");
    var con = $(".tab-content .animated");
    xuanxiangka1(btn, con);
    function xuanxiangka1(btn, con) {
        for (var i = 0; i < btn.length; i++) {   //for里let不能改成var

            (function(i){

            btn[i].onclick = function () {
                for (var j = 0; j < con.length; j++) {
                    con[j].style.display = "none";
                    btn[j].classList.remove("active");

                }

                con[i].style.display = "block";
                btn[i].classList.add("active");
            }
            })(i)
        }
    }
})
