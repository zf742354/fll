$(function(){
    setTimeout(function(){
        $('.diyiye').removeClass('d-none');
        $('.icon-cha').removeClass('d-none');
    },5000);


    //0页面跳转
    $('.icon-cha').click(function(){
        $('.diyiye').addClass('d-none');
        $(this).addClass('d-none');
        setTimeout(function(){
            $('.diyiye').removeClass('d-none');
            $('.icon-cha').removeClass('d-none');
        },5000);
    });
    $('.diyiye').click(function(){
       window.location.href='../html/index3.html';
    });
});