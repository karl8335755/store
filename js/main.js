$(document).ready(function(){

  	//intro

    if($(window).width()<=1100){
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

    //2 Games Landing
    $('#league-landing').on('click',function(){

        $('#wow-landing').css('z-index','6')
        .animate({left:'-100%',bottom:'-100%'},1500);

        $(this)
        .animate({'opacity':'1'},500)
        .delay(1000)
        .removeClass('rightclip');
        $('#league-landing img').css('visibility','visible');
        $('#league-landing img:nth-child(3)').animate({opacity:1},1500);
        $('#league-landing img:nth-child(2)').animate({opacity:1},2000);
        $('#league-landing img:nth-child(1)').animate({opacity:1},2500);
    })
    $('#wow-landing').on('click',function(){

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

    let leagueItems = 
    [
        {
            'name': 'Veigar    <br>The Final Boss',
            'front': 'image/veig.png',
            'back': 'image/veig1.png',
            'desc':"Don't forget to save before entering! Final Boss Veigar descends into the Series 2 figure line. Our most leveled up Limited Edition figure to date to rule your collection.",
            'bg':'#D9EAF9'
        },
        {
            'name': 'Diana     <br>Lunar Goddness',
            'front': 'image/diana.png',
            'back': 'image/diana1.png',
            'desc':"The Scorn of the Moon in her goddess form. Special Edition Lunar Goddess Diana is ready to swing her blade in the Series 2 figure line.",
            'bg':'#DBB3AE'
        },
        {
            'name': 'Thresh    <br>The Warden',
            'front': 'image/thresh.png',
            'back': 'image/thresh1.png',
            'desc':"This time Thresh is the one in The Box. Thresh hooks his way into the Series 2 figure line.",
            'bg':'#8160AC'
        }
    ];
    let currentItem = '';
    let index = 0;

    $('#prev').on('click',function(){
        for(var x = 0; x<leagueItems.length ;x++){
            if(leagueItems[x].name == currentItem){
                if(x==0){
                    index = 2;
                }
                else{
                    index = x - 1; 
                }
                itemSwitch(leagueItems[index]);
                currentItem = leagueItems[index].name;
                return;
            };
        };      
    });
    $('#next').on('click',function(){
        for(var y = 0; y<leagueItems.length ;y++){
            if(leagueItems[y].name == currentItem){
               
                if(y==2)
                    index = 0;
                else 
                    index = y + 1;
                itemSwitch(leagueItems[index]);
                currentItem = leagueItems[index].name;
                return;
            }
        }           
    });
    function itemSwitch(obj){
        $('.front').css('opacity','0')
        .attr('src',obj.front)
        .animate({opacity: 1},1000);
        $('.title').css('opacity','0')
        .html(obj.name)
        .animate({opacity: 1},1000);
        $('.back').attr('src',obj.back);
        $('.describe h2')
        .html(obj.name.slice(0,10)+' Figure');
        $('.describe p')
        .html(obj.desc);
        $('#panel-right').animate({'background-color':'#000'},500)
        .css('background-color',obj.bg); 
    };
    // Click images to show up the item details
    $('#league-landing img').on('click',function(e){
        currentItem = this.alt;

        $('#nav').fadeIn(1000);
        $('#league-landing img').fadeOut(500);    
        $('#panel-left').fadeIn().animate({left:0},2000);
        $('#panel-right').fadeIn().animate({right:0},2000);
        $('.slider').css('visibility','visible');
        $('.slider ul li:first-child').addClass('show');
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
        $('#nav').fadeIn(1000);
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
        $('#nav').fadeOut(500);
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
        $(this).next().removeClass('show');
        $(this).addClass('show');
    })
    $('.slider ul li:last-child').on('click',function(){
        $('.title').animate({'left':'0'},1800);
        $('.front').animate({right:'100%'},2500);
        $('.back').animate({right:'0'},2000);
        $(this).prev().removeClass('show');
        $(this).addClass('show');
    })



    let itemcount = 0;
    $('.add-to-bag a').on('click',function(){
        itemcount +=1;

    })




});