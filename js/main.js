$(document).ready(function(){


//Intro FadeIn
/*---------------------------------------------------------*/

    $(".bg-zoom h1").fadeIn(1000);
    $("#pull").fadeIn(2000);
    

//pull intro to top (scrolldown or click button)
/*---------------------------------------------------------*/

    $("#pull").on("click",function(){
        $("#merchant").animate({top: "-120%"},1000);
    })
    $(".bg-zoom").on("scroll",function(e) {
        //console.log($(this).scrollTop());
        if($(this).scrollTop()>1){
            $('#merchant').animate({top: "-120%"},1000);
        }
    });

//Click either games to show items
/*---------------------------------------------------------*/

    $("#league-landing").on("click",function(){
        
        $("#wow-landing").css("z-index","6")
        .animate({left:"-100%",bottom:"-100%"},1000);

        $("#up").fadeIn(500)

        $(this)
        .animate({"opacity":"1"},500)
        .delay(1000)
        .removeClass("rightclip");

        $("#league-landing img").css("visibility","visible")
        .animate({opacity:1},2500);
    })

    $("#wow-landing").on("click",function(){

        $("#league-landing").css("z-index","6")
        .animate({top:"-100%",right:"-100%"},1000);

        $("#up").fadeIn(500)

        $(this)
        .animate({"opacity":"1"},500)
        .delay(1000)
        .removeClass("leftclip");
        $("#wow-landing img").css("visibility","visible")
        .animate({opacity:1},2500);
    })


/*-----------------Go back to the split screen-----------------*/

    $("#up").on("click",function(){
        $(this).fadeOut(500)

        $('#wow-landing')
        .animate({left:"0",bottom:"0"},500)
        .animate({opacity:.6})
        .css("z-index","5")
        .addClass("leftclip");

        $('#wow-landing img').css("visibility","hidden");


        $('#league-landing')
        .animate({top:"0",right:"0"},500)
        .animate({opacity:.6})
        .css("z-index","5")
        .addClass("rightclip");

        $('#league-landing img').css("visibility","hidden");
        $('#league-landing,#wow-landing').mouseenter(function(){
            $(this).css('opacity','1');
        })
        $('#league-landing,#wow-landing').mouseleave(function(){
            $(this).css('opacity','.3');
        })
        $(this).mouseenter(function(){
            $('#league-landing,#wow-landing').css('opacity','1');
        })
    })


/*----------------Getting Product Info---------------------*/

    let currentItemId;
    let currentItem;
    let index = 0;
    let next;
    let itemList;

    $.ajax({
        url: "../characters.json",
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            itemList = data;
        }            
    });

/*----------------Function to get the product object---------------*/
    function getItem(id,name){
        for(var i=0;i<itemList.length;i++){
            if(itemList[i].id == id){
                return itemList[i];
            }
            if(itemList[i].name == name){
                return itemList[i];
            }
        }
    }
/*----------------Function to switch to next object---------------*/

    function itemSwitch(obj){
        $(".describe h2").html(obj.name+" Figure");
        $(".describe p").html(obj.desc);
        $(".describe h3").html("$ "+ obj.price)
        if($(window).width()<=500){
            $('.size').attr('src', obj.front)  
        }
        else{
            $('.size').attr('src', '') 
            $(".front").css("opacity","0")
            .attr("src",obj.front)
            .animate({opacity: 1},1000);
            $(".title").css("opacity","0")
            .html(obj.name)
            .animate({opacity: 1},1000);
            $(".back").attr("src",obj.back);
            $("#panel-right").animate({"background-color":"#000"},500)
            .css("background-color",obj.bg); 
        }
        currentItemId= obj.id;
    };
/*----------------Browse Previous Product ---------------------*/
    $("#prev").on("click",function(){
        
        if(currentItem.game == "league"){
            if(currentItem.id == 1)
                index = 3;
            else
                index = currentItem.id - 1;
            next = getItem(index,'');
        }
        if(currentItem.game == "wow"){
            if(currentItem.id <= 4)
                index = 5;
            else
                index= currentItem.id - 1;
            next = getItem(index,'');
        }
        currentItem = next;
        itemSwitch(currentItem);
   
    });
/*----------------Browse Next Product---------------------*/
    $("#next").on("click",function(){
        
        if(currentItem.game == "league"){
            if(currentItem.id == 3)
                index = 1
            else
                index = currentItem.id + 1
            next = getItem(index,'');
        }
        if(currentItem.game == "wow"){
            if(currentItem.id == 5)
                index = 4
            else
                index= currentItem.id + 1
            next = getItem(index,'');
        }
        currentItem = next;
        itemSwitch(currentItem);
      
    });



// Click images to show up the item details
/*------------------------------------------------------------------------*/
    $("#league-landing img, #wow-landing img").on("click",function(e){
        currentItemId = this.alt;
        currentItem = getItem(currentItemId,'');
        $("#up").fadeOut(500)
        $("#nav").delay(2000).fadeIn(1000);
        $("#panel-left").fadeIn().animate({left:0},1000);
        $("#panel-right").fadeIn().animate({right:0},1000);
        $(".front").delay(2000).animate({opacity: 1},1000);

        $(".front").attr("src",currentItem.front);
        $(".title").html(currentItem.name+'<br>'+currentItem.nickname); 
        $(".describe h2").html(currentItem.name+" Figure");
        $(".describe p").html(currentItem.desc);
        $(".describe h3").html("$ "+currentItem.price);
        $("#panel-right").css("background-color",currentItem.bg);
        if($(window).width()<=500){
            itemSwitch(currentItem);
        }   
    });


    // Click images to show up the item details
    $("#league-landing img").on("click",function(e){
        $("#league-landing img").fadeOut(500); 
        $(".slider").css("visibility","visible");
        $("#front").addClass("show");
        $(".back").attr("src",currentItem.back);
        $(".title").delay(1200).animate({left:"-5%"},800);
    });
    $("#wow-landing img").on("click",function(e){
        $("#wow-landing img").fadeOut(500)
        $(".slider").css("visibility","hidden");

        $(".front").animate({"right":"-60%","top":"-10%"},1000);
        $(".back").attr('src','');
    })

// Click to go back to the split screen
/*---------------------------------------------------------*/

    $(".burger").on("click",function(e){
        $("#nav").fadeOut(500);
        $("#league-landing img").fadeIn(500); 
        $("#wow-landing img").fadeIn(500);  
        $(".title").animate({left:"0"},800);
        $(".front").animate({"right":"0","top":"-5%"},1000);
        $("#panel-left").animate({left:"-100%"},1000);
        $("#panel-right").animate({right:"-100%"},1000);
        $('#basket').fadeOut();
    })

//Image back and front pagination
/*---------------------------------------------------------*/

    $("#front").on("click",function(){
        $(".title").animate({"left":"-5%"},1800);
        $(".front").animate({right:"0%"},2000);
        $(".back").animate({right:"-100%"},2500);
        $(this).next().removeClass("show");
        $(this).addClass("show");
    })
    $("#back").on("click",function(){
        $(".title").animate({"left":"0"},1800);
        $(".front").animate({right:"100%"},2500);
        $(".back").animate({right:"0"},2000);
        $(this).prev().removeClass("show");
        $(this).addClass("show");
    })


//Add item to shopping cart
/*---------------------------------------------------------*/
    let total_itemcount = 0;
    let item_array = [];
    let single_itemcount;
    let total_money = 0

    $(".add-to-bag").on("click",function(){
        single_itemcount = 1;
        //total_itemcount +=1;

        for(var x = 0 ; x < item_array.length; x++)
        {
            if(item_array[x] == currentItemId)
                single_itemcount++;
        }
        item_array.push(currentItemId);
        if(single_itemcount > 1 ){
            $('.item-container tr').each(function(index)
            {
                if((index>0) && (this.children[0].innerHTML == currentItem.name)){
                    this.children[1].innerHTML = single_itemcount; 
                    this.children[2].innerHTML = single_itemcount * currentItem.price;
                }               
            })           
        }else{
            $('.item-container').append(`
                <tr>
                    <td>`+currentItem.name+`</td>
                    <td>`+single_itemcount+`</td> 
                    <td>`+currentItem.price+`</td>
                    <td><button class="del">-</button></td>
                </tr>
            `)  
        }
        calc_total();
    })

//Remove item from shopping cart
/*---------------------------------------------------------*/

    $(".item-container").on('click','.del',function(){
        if(this.closest('tr').children[1].innerHTML == 1){
            $(this).closest('tr').remove();
        }else{
            this.closest('tr').children[1].innerHTML--;
    
            this.closest('tr').children[2].innerHTML -= getItem(-1,this.closest('tr').children[0].innerHTML).price;
        }
        for(var x = 0 ; x < item_array.length; x++)
        {
            if(getItem(item_array[x],'').name == this.closest('tr').children[0].innerHTML )
            {
                item_array.splice(x,1);
                x = item_array.length;
            }
        }
        calc_total();
    })

/*----------------Function to get the final price---------------*/

    function calc_total(){
        total_money = 0;
        for(var i = 0; i < item_array.length;i++)
        {
            total_money += getItem(item_array[i],'').price;
        }
        $('.money').html(total_money);
    }


//Close shopping cart page
/*---------------------------------------------------------*/

    $('#bag, #continue',).on('click',function(){
        $('#basket').fadeToggle(1000);
    })
});