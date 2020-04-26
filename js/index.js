$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });


    $(".navs span").each(function(index){
        $(this).click(function(){
            $(this).addClass('on').siblings('span').removeClass('on');
             $('.conb').hide().eq(index).fadeIn();
        })
    })
    $(".row").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('.row').removeClass('hover');
        })
    })
})