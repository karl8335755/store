$(document).ready(function(){

  	//intro

    if($(window).width()<=1100){
        $('.storename').css('display','none');
    //Click on ink to find out
    //intro wont play when screen too narrow
    }else{

    }
    $('#pull').animate({opacity: 1},2500)
   
    //Remove Video then show landing
    function intro(){

    }

    //arrow to projects
    $('#pull').on('click',function(){
        $(this).css('opacity','0');
        $('.bg-zoom').animate({height: '10vh', 'z-index': '-1', 'font-size': '4rem'},1000)
        .fadeOut()
    })
    let lastScroll = 0;

    $('#merchant').scroll(function(){
        let st = $(this).scrollTop();

        if(st >= lastScroll){
            $('#pull').css('opacity','0');
            $('.bg-zoom').animate({height: '10vh', 'z-index': '-1', 'font-size': '4rem'},1000)
            .fadeOut();

        }else{
        };
        lastScroll = st;
        
    })
    $('.storename').on('click',function(){
    })
    $('#league-landing').on('click',function(){
        $('.storename').css('transform','rotate(26deg)')
        .animate({height: '0%', 'font-size':'0'},500)
        .animate({top: '150%'}, 500)

        $('#wow-landing').css('z-index','6')
        .animate({'opacity':'1'},500)
        .animate({height:'0',width:'0','opacity':0},500);

        $(this)
        .animate({'opacity':'1'},500)
        .delay(1000)
        .removeClass('rightclip');
        $('#league-landing img').css('visibility','visible');
        $('#league-landing img:nth-child(4)').animate({opacity:1},2000);
        $('#league-landing img:nth-child(3)').animate({opacity:1},3000);
        $('#league-landing img:nth-child(2)').animate({opacity:1},4000);
        $('#league-landing img:nth-child(1)').animate({opacity:1},5000);
    })
    $('#wow-landing img').on('click',function(e){
        $('#wow-landing').fadeOut(500)
    })
    $('#wow-landing').on('click',function(){
        $('.storename').css('transform','rotate(26deg)')
        .animate({height: '0%', 'font-size':'0'},500)
        .animate({bottom: '150%'}, 500)

        $('#league-landing').css('z-index','6')
        .animate({'opacity':'1'},500)
        .animate({height:'0',width:'0','opacity':0},500);

        $(this)
        .animate({'opacity':'1'},500)
        .delay(1000)
        .removeClass('leftclip');
        $('#wow-landing img').css('visibility','visible');
        $('#wow-landing img:nth-child(2)').animate({opacity:1},2000);
        $('#wow-landing img:nth-child(1)').animate({opacity:1},2000);
    })
    $('#league-landing img').on('click',function(e){
        $('#league-landing').fadeOut(500)
    })


    $('.slider ul li').on('mouseenter',function(){
        $(this).siblings().removeClass('show').addClass('hide');
        $(this).addClass('show').removeClass('hide');
    })
    $('.slider ul li').on('mouseleave',function(){
        $(this).siblings().removeClass('show').addClass('hide');
        $(this).addClass('show').removeClass('hide');
    })
    $('.slider ul li:first-child').on('click',function(){
        $('.title').animate({'left':'0'},1800);
        $('.front').animate({right:'100%'},2500);
        $('.back').animate({right:'0'},2000);
        $(this).next().removeClass('show').addClass('hide');
        $(this).addClass('show').removeClass('hide');
    })
    $('.slider ul li:last-child').on('click',function(){
        $('.title').animate({'left':'-5%'},1800);
        $('.front').animate({right:'0%'},2000);
        $('.back').animate({right:'-100%'},2500);
        $(this).prev().removeClass('show').addClass('hide');
        $(this).addClass('show').removeClass('hide');
    })








});