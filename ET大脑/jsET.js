/*
** Create by JJ on 2018/8/8
*/

$(function (  ) {
    //backg-------------------------------------

    $(".head1,.head2").on("mouseenter",function (  ) {
        $(".head1,.head2").css("background-color","#1C2327");
        $(".head1 .right input").css("background-color","#262C30");
        $(".head1 .search").css("background-color","#262C30");
    });

    $(".head1,.head2").on("mouseleave",function (  ) {
        $(".head1,.head2").css("background-color","");
        $(".head1 .right input").css("background-color","#484774");
        $(".head1 .search").css("background-color","#484774");
    });


    $(".head1 .search").on("mouseenter",function (  ) {
        $(".head1 input").stop(false,false) .animate({width:"240px"},500);
        $(".head1 .search").css("height","48px");
        $(this).css("border","1px solid #00C1DE");
    });

    $(".head1 .search").on("mouseleave",function (  ) {
        $(".head1 input").stop(false,false) .animate({width:"150px"},500,function (  ) {
            $(".head1 .search").css("border","");
            $(".head1 .search").css("height","50px");

        });
    });

    $(".open").on("click",function (  ) {
        $(".video").css("display","block");
            $('html,body').addClass('ovfHiden'); //使网页不可滚动
            $(".searchbox").show();
        return false;
    });

    $(".i").on("click",function (  ) {
        $(".video").css("display","none");
        $('html,body').removeClass('ovfHiden'); //使网页恢复可滚
        $(".searchbox").hide();
    });


    $('.language').on("mouseenter",function (  ) {
        $(".list_language").css("display","block");
        // $(".icon-shangla").css("display","none");
        // $(".icon-xiala").css("display","block");
    }).on("mouseleave",function (  ) {
        $(".list_language").css("display","none");
        // $(".icon-shangla").css("display","block")
        // $(".icon-xiala").css("display","none")
    })


    //grid------------------------------------------------
    //     $(".grid .sc").
    var timeNum=0;
        var time=setInterval(function (  ) {
            timeNum++;
            $(".grid .sc").css("transform",'rotate('+timeNum+'deg)')
    },10);


    //grid1------------------------------------------------
    var that =null;
    $(".inner1 .list .lister").on("mouseenter",function (  ) {
        clearInterval(this.timeID)
        var num=0;
        that=this;
        this.timeID= setInterval(function (  ) {
            num++;
            $(this).find("img").css("top",-100*num);
            if(num==14){
                clearInterval(this.timeID)
            }
        }.bind(that),40);
    });

    $(".inner1 .list .lister").on("mouseleave",function (  ) {
        var num=14;
        that=this;
        clearInterval(this.timeID)
        this.timeID= setInterval(function (  ) {
            num--;
            $(this).find("img").css("top",-100*num);
            if(num==0){
                clearInterval(this.timeID)
            }
        }.bind(that),40);
    });

    //grid2---------------------------------------------------
    $(".grid2 .inner2 a").on("mouseenter",function (  ) {
        $(this).find('.front').stop(false,false).animate(
            {left:"-20px",bottom:"-25px",width:"320px"},500);

        $(this).find('.bg').stop(true,true).animate( {left:"0px"},250,function (  ) {
            $(this).stop(true,true).animate({top:"0px"},250,function (  ) {
                $(this).stop(true,true).animate({left:"-20px"},250,function (  ) {
                    $(this).stop(true,true).animate({top:"-20px"},250)
                });
            });
        });

    });

    $(".grid2 .inner2 a").on("mouseleave",function (  ) {
        $(this).find('.front').stop(false,false).animate(
            {left:"0px",bottom:"-10px",width:"280px"},500);

        $(this).find('.bg').stop(true,true).animate( {left:"-20px"},0,function (  ) {
            $(this).stop(true,true).animate({top:"-20px"},0,function (  ) {
                $(this).stop(true,true).animate({left:"-20px"},0,function (  ) {
                    $(this).stop(true,true).animate({top:"-20px"},0)
                });
            });
        });

    });

    // grid4----------------------------------------------
    // var that =null;
    $(".inner4 .list .lister").on("mouseenter",function (  ) {
        clearInterval(this.timeID)
        var num=0;
        that=this;
         this.timeID= setInterval(function (  ) {
            num++;
            $(this).find("img").css("top",-100*num);
            if(num==14){
                clearInterval(this.timeID)
            }
        }.bind(that),40);
    });

    $(".inner4 .list .lister").on("mouseleave",function (  ) {
        var num=14;
        that=this;
        clearInterval(this.timeID)
        this.timeID= setInterval(function (  ) {
            num--;
            $(this).find("img").css("top",-100*num);
            if(num==0){
                clearInterval(this.timeID)
            }
        }.bind(that),40);
    });


    //foot------------------------------------------------
    $(".li1t a").on("mouseenter",function (  ) {
        $(this).siblings('img').css("display",'block');
        $(this).parent().siblings('li').find('img').css("display",'none')
    });
    //fixed------------------------------------------------------------------



    var height=($(window).height()-$(".zixun").height())/2;
    $(".fixed").css(
        {bottom:height,
         display:"block",
         opacity:1}
        );

    window.onresize = function (  ) {
        var height=($(window).height()-$(".zixun").height())/2;
        $(".fixed").css("bottom",height);
    }

    $(".fixed").on("mouseenter",function (  ) {
        $(".cao-zuo").css('display',"block");
    });

    $(".fixed").on("mouseleave",function (  ) {
        $(".cao-zuo").css('display',"none");
    });

    $(".cao-zuo img").on("click",function (  ) {
        $(".cao-zuo").css('display',"none");
    });


    //getback-------------------------------------------------

    $(".get-back").on("click",function (  ) {
        $(window).scrollTop(0);
        $(".get-back").css("display","none");
    });


});

$(window).on("scroll",function() {
    if($(window).scrollTop()>500){
        $(".get-back").css("display","block");
    }else {
        $(".get-back").css("display","none");
    }
});








