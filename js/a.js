$(function(){



    $("#a1").click(function(){

        time=setInterval(function(){
            num--;
            console.log(num);
        },1000);
    });

    $('#a2').click(function(){
        clearInterval(time);
    });
    //$(function(){
    //    var time ;
    //    var num = 60;
    //$('.hq').click(function(){
    //    time=setInterval(function(){
    //        num--;
    //        console.log(num);
    //    },1000);
    //});
    //
    //    $('.dl').click(function(){
    //        clearInterval(time);
    //    });
    //});
    $(function(){

        var zz = /^[1][3,4,5,7,8][0-9]{9}$/;
        $('.phone').keyup(function(){
            var a = $(this).val();
            if(zz.test(a)){
                //通过验证
                $('.hq').attr("disabled",false);
            }{

                $('.hq').attr('disabled',true);
            }
        });
    });







});