$(function(){

    //��12ҳ
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
            //���ť�û�
            $('.hqyzm').attr('disabled',true);
            $(".ljjh").attr("disabled",true);
        }

    });

    //��ȡ�ֻ���֤��
    $(".hqyzm").click(function(){
        //�������������
        $('#ddd').attr('disabled',true);
        num--;
        $('.hqyzm').text("�ٴλ�ȡ"+num+'s').attr('disabled',true);
        //��ʼ����ʱ
        time=setInterval(function(){
            //��ʱ��0ʱ
            num--;
            if(num<=0){
                //ֹͣ��ʱ
                clearInterval(time);
                //�����ֻ����������������֤�밴ť������
                $('.hqyzm').text('��ȡ��֤��').attr("disabled",false);
                $('#ddd').attr('disabled',false);
                num = 6;
            }else{
                $('.hqyzm').text("�ٴλ�ȡ"+num+'s').attr('disabled',true);
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

//12ҳ��ת

    //��������
    $("#ljjh2").click(function(){
        $('.tc').removeClass('d-none');
        $('.foot-box2-img2').addClass('zzz').removeClass('d-none');
    });

    //�رյ���
    $('.x').click(function(){
        $('.tc').addClass('d-none');
        $('.foot-box2-img2').removeClass('zzz').addClass('d-none');

    });

    //��תҳ��
    $('.ewm').click(function(){
       window.location.href='../html/index15.html';
    });

});