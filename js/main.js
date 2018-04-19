$(document).ready(function(){

  	//intro

    if($(window).width()<=1100){
        $('.storename').css('display','none');
    //Click on ink to find out
    //intro wont play when screen too narrow
    }else{

    }
    //Intro FadeIn
    $('.bg-zoom h1').fadeIn(1000);
    $('#pull').fadeIn(2000);
   

    //pull intro to top (scrolldown or click button)
    $('#pull').on('click',function(){
       $('#merchant').animate({top: '-120%'},1000);
    })
    $('#merchant').on('scroll',function(e) {
        if($(this).scrollTop()>1)
            $(this).animate({top: '-120%'},1000);
    });


    // animate the second title/logo
    $('.storename').on('click',function(){
    })



    $('#league-landing').on('click',function(){
        // $('.storename')
        // .css('transform','rotate(26deg)')
        // .animate({width:'1500px'},1000)
        // .delay(500)
        // .animate({height: '0%', 'font-size':'0'},1000)
        // .delay(500)
        // .animate({top: '150%'}, 500)

        $('#wow-landing').css('z-index','6')
        .animate({left:'-100%',bottom:'-100%'},1500);

        $(this)
        .animate({'opacity':'1'},500)
        .delay(1000)
        .removeClass('rightclip');
        $('#league-landing img').css('visibility','visible');
        $('#league-landing img:nth-child(4)').delay(500).animate({opacity:1},2000);
        $('#league-landing img:nth-child(3)').delay(500).animate({opacity:1},3000);
        $('#league-landing img:nth-child(2)').delay(500).animate({opacity:1},4000);
        $('#league-landing img:nth-child(1)').delay(500).animate({opacity:1},5000);
    })
    $('#wow-landing').on('click',function(){
        // $('.storename').css('transform','rotate(26deg)')
        // .delay(500)
        // .animate({height: '0%', 'font-size':'0'},100)
        // .delay(500)
        // .animate({bottom: '150%'}, 500)

        $('#league-landing').css('z-index','6')
        .animate({top:'-100%',right:'-100%'},1500);

        $(this)
        .animate({'opacity':'1'},500)
        .delay(1000)
        .removeClass('leftclip');
        $('#wow-landing img').css('visibility','visible');
        $('#wow-landing img:nth-child(2)').delay(500).animate({opacity:1},2000);
        $('#wow-landing img:nth-child(1)').delay(500).animate({opacity:1},2000);
    })
    // Click images to show up the item details
    $('#league-landing img').on('click',function(e){
        $('#league-landing img').fadeOut(500);    
        $('#panel-left').fadeIn().animate({left:0},2000);
        $('#panel-right').fadeIn().animate({right:0},2000);
        $('.slider').css('visibility','visible');
        $('.front').delay(2000).animate({opacity: 1},1000);
        $('.front').attr('src',this.src);
        $('.back').attr('src',this.src.slice(0,-4)+'1.png');
        $('.title').delay(1200).animate({left:'-5%'},800);
        $('.title').html(this.alt); 
        $('.describe h2').html(this.alt.slice(0,10)+' Figure');
        $('.describe p').html($(this).attr('longdesc').slice(0,-8));
        $('#panel-right').css('background-color',$(this).attr('longdesc').slice(-8,-1));
    })
    $('#wow-landing img').on('click',function(e){
        $('#wow-landing img').fadeOut(500)
        $('#panel-left').fadeIn().animate({left:0},2000);
        $('#panel-right').fadeIn().animate({right:0},2000);
        $('.front').delay(2000).animate({opacity: 1},1000);
        $('.front').attr('src',this.src.slice(0,-4)+'1.png');
        $('.front').animate({'right':'-70%','top':'-10%'},1000);
        $('.title').delay(1200).animate({left:'-5%'},800);
        $('.title').html(this.alt); 
        $('.describe h2').html(this.alt.slice(0,10)+' Figure');
        $('.describe p').html($(this).attr('longdesc').slice(0,-8));
        $('#panel-right').css('background-color',$(this).attr('longdesc').slice(-8,-1));
    })

    // Click to go back to the map
    $('.burger').on('click',function(e){
        $('#league-landing img').fadeIn(500); 
        $('#wow-landing img').fadeIn(500);  
        $('.title').animate({left:'0'},800);
        $('.front').animate({'right':'0','top':'-5%'},1000);
        $('#panel-left').animate({left:'-30%'},2000);
        $('#panel-right').animate({right:'-70%'},2000);
    })






    //Image back and front pagination

    $('.slider ul li:first-child').on('click',function(){
        $('.title').animate({'left':'-5%'},1800);
        $('.front').animate({right:'0%'},2000);
        $('.back').animate({right:'-100%'},2500);
        $(this).next().removeClass('show').addClass('hide');
        $(this).addClass('show').removeClass('hide');
    })
    $('.slider ul li:last-child').on('click',function(){
        $('.title').animate({'left':'0'},1800);
        $('.front').animate({right:'100%'},2500);
        $('.back').animate({right:'0'},2000);
        $(this).prev().removeClass('show').addClass('hide');
        $(this).addClass('show').removeClass('hide');
    })






});