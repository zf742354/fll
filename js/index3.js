$(function(){

    //����ҳ��
    $(".index").click(function(){
        setTimeout(function(){
            window.location.href="../html/index4.html";
        },1000);

    });

    //��ʾ����
    $('#lijizhuanfa').click(function(){
        $(".tc").removeClass('d-none');
        $('.foot-box2-img2').addClass('zzz').removeClass('d-none');
    });
    //�رյ���
    $('.x').click(function(){
        $('.tc').addClass('d-none');
        $('.foot-box2-img2').removeClass('zzz').addClass('d-none');

    });
});