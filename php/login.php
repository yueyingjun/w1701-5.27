<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
<div class="j-login-box" id="j-login-box" style="position: static;margin: 0;border-radius: 0 ">
    <div class="login-box">
        <form action="login3.php" class="login-box-form" method="post">
            <input type="hidden" name="from" value="jm">
            <input type="hidden" name="backurl" value="">
            <ul>
                <li class="error-tips-view">
                    <p class="error-tips"></p>
                </li>
                <li>
                    <div>
                        <input type="text" name="zhanghao" class="input-text" id="email" placeholder="邮箱/手机号" autocomplete="off" maxlength="50" datatype="e|m" nullmsg="请填写帐号！" errormsg="帐号格式错误！" onblur="passport.sdk.checkAccount($(this).val())" >
                    </div>
                </li>
                <li>
                    <div>
                        <input type="password" name="pass" class="input-text" id="password" placeholder="密码" maxlength="16" autocomplete="off" plugin="passwordStrength" datatype="*6-16" nullmsg="请输入密码！" errormsg="请输入6-16个字符（英文、数字、特殊字符）" onblur="passport.sdk.checkPassword($(this).val())">
                    </div>
                </li>
                <li class="code">
                    <div>
                        <input type="text" id="verify_code" name="verify_code" class="input-text input-code" maxlength="5" autocomplete="off" datatype="s5" nullmsg="请输入验证码" errormsg="验证码错误">
                        <!--<img id="verify_img" class="code-img" src="/wapi/verifycode.json" title="看不清楚？点击此处刷新" onclick="this.src+='/?r='+Math.random();" />-->
                    </div>
                </li>
                <li class="check-view">
                    <span class="input-name"></span>
                    <div>
                        <p class="fl">
                            <input type="checkbox" name="remember" id="autologin" checked="true">
                            <label>两周内自动登录</label>
                        </p>
                        <p class="fr">
                            <a target="_blank" href="/user/fgpassword?from=jm&backurl=">忘记密码？</a>
                        </p>
                    </div>
                </li>
                <li>
                    <span class="input-name"></span>
<!--                    <button type="button" class="login-btn" onclick="passport.sdk.loginbox.logindo()">登录</button>-->
                    <input type="submit" class="login-btn" value="登录">
                </li>
            </ul>
        </form>
        <div class="login-sns">
            <h3>社交帐号登录</h3>
            <a target="_blank" href="https://passport.jiemian.com/oauth/login?oauth_from=wb&from=jm&backurl=&r=1814260874" class="login-weibo"><i class="ui-icon"></i></a>
            <a target="_blank" href="https://passport.jiemian.com/oauth/login?oauth_from=qq&from=jm&backurl=&r=1612080299" class="login-qq"><i class="ui-icon"></i></a>
            <a target="_blank" href="https://passport.jiemian.com/oauth/login?oauth_from=wx&from=jm&backurl=&r=1772817066" class="login-wx"><i class="ui-icon"></i></a>        </div>
        <div class="reg-link">
            <p>没有帐号?  <a target="_blank" href="zhuce.php">立即注册</a></p>
        </div>
    </div></div>
</body>
</html>