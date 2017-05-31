$(function () {
    var reg=/^[0-9]{11}$/
    var reg2=/^[0-9a-zA-Z]{6,16}$/
    $(".text").blur(function () {
        var value=$(".text").val();
        if(reg.test(value)){
            $(".tex .true").css("display","block")
            $(".tex1").css("display","none")
        }
        else{
            $(".tex .false").css("display","block")
            $(".tex1").css("display","none")
        }
    })
    $(".password").blur(function () {
        var value=$(".text").val();
        if(reg2.test(value)){
            $(".pass .true").css("display","block")
            $(".tex2").css("display","none")
        }
        else{
            $(".pass .false").css("display","block")
            $(".tex2").css("display","none")
        }
    })
})