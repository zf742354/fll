$(function(){

    //第三页面
    $(".index").click(function(){
        setTimeout(function(){
            window.location.href="../html/index4.html";
        },1000);

    });

    //显示弹窗
    $('#lijizhuanfa').click(function(){
        $(".tc").removeClass('d-none');
        $('.foot-box2-img2').addClass('zzz').removeClass('d-none');
    });
    //关闭弹窗
    $('.x').click(function(){
        $('.tc').addClass('d-none');
        $('.foot-box2-img2').removeClass('zzz').addClass('d-none');

    });
});