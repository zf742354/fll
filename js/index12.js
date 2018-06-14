$(function(){

    //第12页
    var zzbds = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    var time;
    var num= 6;
    $(".phone").keyup(function(){
        var aaa = $(this).val();
        if(zzbds.test(aaa)){
            $(".hqyzm").attr("disabled",false);
            if($('.yzm').val().length===6){
                $('.ljjh').attr('disabled',false)
            }else{
                $('.ljjh').attr('disabled',true)
            }
        }else{
            //激活按钮置灰
            $('.hqyzm').attr('disabled',true);
            $(".ljjh").attr("disabled",true);
        }

    });

    //获取手机验证码
    $(".hqyzm").click(function(){
        //锁定号码输入框
        $('.icon-msnui-lock').removeClass('d-none');
        $('#ddd').attr('disabled',true);
        num--;
        $('.hqyzm').text(num+'s后'+"可再次获取").attr('disabled',true);
        //开始倒计时
        time=setInterval(function(){
            //计时到0时
            num--;
            if(num<=0){
                //解锁提示
                $('.icon-msnui-lock').addClass('d-none');
                $('.icon-jiesuo').removeClass('d-none');
                setTimeout(function(){
                    $('.icon-jiesuo').addClass('d-none')
                },300);
                //停止计时
                clearInterval(time);
                //输入手机号码高亮，更改验证码按钮内文字
                $('.hqyzm').text('获取验证码').attr("disabled",false);
                $('#ddd').attr('disabled',false);
                num = 6;
            }else{
                $('.hqyzm').text(num+'s后'+"可再次获取").attr('disabled',true);
            }
        },1000);


        $('.yzm').attr("disabled",false);
    });

    $('.yzm').keyup(function(){
        if(zzbds.test($('.phone').val())){
            if($(this).val().length===6){
                $('.ljjh').attr('disabled',false)
            }else{
                $('.ljjh').attr('disabled',true)
            }
        }else{
            $('.ljjh').attr('disabled',true)
        }

    });

//12页跳转

    //弹出弹窗
    $("#ljjh2").click(function(){
        $('.tc').removeClass('d-none');
        $('.foot-box2-img2').addClass('zzz').removeClass('d-none');
    });

    //关闭弹窗
    $('.x').click(function(){
        $('.tc').addClass('d-none');
        $('.foot-box2-img2').removeClass('zzz').addClass('d-none');

    });

    //跳转页面
    $('.ewm').click(function(){
       window.location.href='../html/index15.html';
    });

});