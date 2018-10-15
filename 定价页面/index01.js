$ ( function () {
    function clas () {
        console.log ( this );
        $ ( this ).addClass ( "c-class" ).siblings ( 'li' ).removeClass ( "c-class" );
    }

    $ ( window ).on ( "scroll ", function () {
        var scrollTop = $ ( this ).scrollTop ();
        var topScroll = $ ( "#top-p" ).height ();
        var innerAScroll = $ ( "#innerA" ).height ();
        var navBgScroll = $ ( ".navBg" ).height ();
        var innerScroll = $ ( ".inner" ).height ();
        var innerBBGScroll = $ ( ".innerBBG" ).height ();
        var colBgScroll = $ ( ".colBg" ).height ();
        var rowBgScroll = $ ( ".row-bg" ).height ();
        var costScroll = $ ( ".cost-bg" ).height ();
        var freeScroll = $ ( ".free" ).height ();
        if ( scrollTop > topScroll + innerAScroll ) {
            $ ( ".navBg " ).css ( {
                position : "fixed", top : 0, left : 0
            } )//.navBg css
            $ ( ".inner" ).css ( {
                marginTop : navBgScroll + "px"
            } )//inner css
        } else {
            $ ( ".navBg " ).css ( {
                position : "static"
            } )//navBg css
            $ ( ".inner" ).css ( {
                marginTop : 0 + "px"
            } )//inner css
        }//else
        if ( scrollTop <= topScroll + innerAScroll + innerScroll ) {
            $ ( ".nav-inner>ul>li" ).eq ( 0 ).find ( "a" ).css ( "color", "#00C1DE" )
            $ ( ".nav-inner>ul>li" ).eq ( 0 ).find ( "p" ).show ()
            $ ( ".nav-inner>ul>li" ).eq ( 0 ).siblings ( "li" ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 0 ).siblings ( "li" ).find ( "p" ).hide ()
        } else {
            $ ( ".nav-inner>ul>li" ).eq ( 0 ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 0 ).find ( "p" ).hide ()
        }
        if ( scrollTop >= topScroll + innerAScroll + innerScroll ) {
            $ ( ".nav-inner>ul>li" ).eq ( 1 ).find ( "a" ).css ( "color", "#00C1DE" )
            $ ( ".nav-inner>ul>li" ).eq ( 1 ).find ( "p" ).show ()
            $ ( ".nav-inner>ul>li" ).eq ( 1 ).siblings ( "li" ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 1 ).siblings ( "li" ).find ( "p" ).hide ()
        } else {
            $ ( ".nav-inner>ul>li" ).eq ( 1 ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 1 ).find ( "p" ).hide ()
        }
        if ( scrollTop >= topScroll + innerAScroll + innerScroll + innerBBGScroll ) {
            $ ( ".nav-inner>ul>li" ).eq ( 2 ).find ( "a" ).css ( "color", "#00C1DE" )
            $ ( ".nav-inner>ul>li" ).eq ( 2 ).find ( "p" ).show ()
            $ ( ".nav-inner>ul>li" ).eq ( 2 ).siblings ( "li" ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 2 ).siblings ( "li" ).find ( "p" ).hide ()
        } else {
            $ ( ".nav-inner>ul>li" ).eq ( 2 ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 2 ).find ( "p" ).hide ()
        }
        if ( scrollTop >= topScroll + innerAScroll + innerScroll + innerBBGScroll + colBgScroll ) {
            $ ( ".nav-inner>ul>li" ).eq ( 3 ).find ( "a" ).css ( "color", "#00C1DE" )
            $ ( ".nav-inner>ul>li" ).eq ( 3 ).find ( "p" ).show ()
            $ ( ".nav-inner>ul>li" ).eq ( 3 ).siblings ( "li" ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 3 ).siblings ( "li" ).find ( "p" ).hide ()
        } else {
            $ ( ".nav-inner>ul>li" ).eq ( 3 ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 3 ).find ( "p" ).hide ()
        }
        if ( scrollTop >= topScroll + innerAScroll + innerScroll + innerBBGScroll + colBgScroll + rowBgScroll ) {
            $ ( ".nav-inner>ul>li" ).eq ( 4 ).find ( "a" ).css ( "color", "#00C1DE" )
            $ ( ".nav-inner>ul>li" ).eq ( 4 ).find ( "p" ).show ()
            $ ( ".nav-inner>ul>li" ).eq ( 4 ).siblings ( "li" ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 4 ).siblings ( "li" ).find ( "p" ).hide ()
        } else {
            $ ( ".nav-inner>ul>li" ).eq ( 4 ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 4 ).find ( "p" ).hide ()
        }
        if ( scrollTop >= topScroll + innerAScroll + innerScroll + innerBBGScroll + colBgScroll + rowBgScroll + costScroll ) {
            $ ( ".nav-inner>ul>li" ).eq ( 5 ).find ( "a" ).css ( "color", "#00C1DE" )
            $ ( ".nav-inner>ul>li" ).eq ( 5 ).find ( "p" ).show ()
            $ ( ".nav-inner>ul>li" ).eq ( 5 ).siblings ( "li" ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 5 ).siblings ( "li" ).find ( "p" ).hide ()
        } else {
            $ ( ".nav-inner>ul>li" ).eq ( 5 ).find ( "a" ).css ( "color", "#000" )
            $ ( ".nav-inner>ul>li" ).eq ( 5 ).find ( "p" ).hide ()
        }

    } )//window.结束


    $ ( ".navBg>.nav-inner>ul>li" ).eq ( 0 ).on ( "click", function () {
        $ ( window ).scrollTop ( $ ( "#top-p" ).height () + $ ( "#innerA" ).height () )

    } );
    $ ( ".navBg>.nav-inner>ul>li" ).eq ( 1 ).on ( "click", function () {
        $ ( this ).find ( "a" ).css ( "color", "#00C1DE" )
        $ ( this ).find ( "p" ).show ()
        $ ( window ).scrollTop ( $ ( "#top-p" ).height () + $ ( "#innerA" ).height () + $ ( ".inner" ).height () + 1 );
    } );
    $ ( ".navBg>.nav-inner>ul>li" ).eq ( 2 ).on ( "click", function () {
        $ ( this ).find ( "a" ).css ( "color", "#00C1DE" )
        $ ( this ).find ( "p" ).show ()
        $ ( window ).scrollTop ( $ ( "#top-p" ).height () + $ ( "#innerA" ).height () + $ ( ".inner" ).height () + $ ( ".innerBBG" ).height () + 1 )
    } );
    $ ( ".navBg>.nav-inner>ul>li" ).eq ( 3 ).on ( "click", function () {
        $ ( this ).find ( "a" ).css ( "color", "#00C1DE" )
        $ ( this ).find ( "p" ).show ()
        $ ( window ).scrollTop ( $ ( "#top" ).height () + $ ( "#innerA" ).height () + $ ( ".inner" ).height () + $ ( ".innerBBG" ).height () + 370+ 1 )
    } );
    $ ( ".navBg>.nav-inner>ul>li" ).eq ( 4 ).on ( "click", function () {
        $ ( this ).find ( "a" ).css ( "color", "#00C1DE" )
        $ ( this ).find ( "p" ).show ()
        $ ( window ).scrollTop ( $ ( "#top" ).height () + $ ( "#innerA" ).height () + $ ( ".inner" ).height () + $ ( ".innerBBG" ).height () + 370+ $ ( ".row-bg" ).height () + 1 )
    } );//li标签的click结束

    $ ( ".innerBnav" ).on ( "click", function () {
        $ ( this ).css ( "color", "#00A2CA" ).siblings ( ".innerBnav" ).css ( "color", "#000" )
        var index = $ ( this ).index ();
        $ ( ".innerB .in-cn" ).eq ( index ).show ().siblings ( ".innerB .in-cn" ).hide ()
    } );//innerbanv结束


    $(".row-bg .row-nav div").on("click",function (  ) {
        var index=$(this).index()
        $ ( this ) .css({
            color:"#00C1DE",
            borderTopWidth:2,
            borderTopColor:"#00C1DE"
        }).siblings().css({
            color:"#000",
            borderWidth: "1px" ,
            borderStyle: "solid" ,
            borderColor: "#D7D8D9"
        });
        $(".row-bg .row-box .showW").eq(index).show().siblings().hide()
        $(".row-bg .explain").eq(index).show().siblings().hide();


    });//jieshu

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
    if($(window).scrollTop()>$ ( "#top-p" ).height ()+$ ( "#innerA" ).height ()){
        $(".get-back").css("display","block");
    }else {
        $(".get-back").css("display","none");
    }
});
