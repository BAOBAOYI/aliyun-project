$(function () {
    var timeID=null;
    var numb=0;
    //鼠标移入选择的li,该li里面的a背景颜色变为白色,点击让上面对应的li显示
    $('.header .scroll .choose li').on('mouseenter',function () {
        $(this).children('a').css('backgroundColor','white').parent().siblings('li').children('a').css('backgroundColor','#a1a1a3');
    })

    $('.header .scroll').on('mouseenter',function () {
        clearInterval(timeID);
    })

    $('.header .scroll .choose li').on('click',function () {
        var idx = $(this).index();
        $('.header .lunbo li').eq(idx).fadeIn(1000).siblings('li').fadeOut(0);

    })

    timeID =  setInterval(function () {
        numb++;
        if(numb==3){
            numb=0;
        }
        $('.header .lunbo li').eq(numb).fadeIn(1000).siblings('li').fadeOut(0);
        $('.header .choose li').eq(numb).children('a').css('backgroundColor','white').parent().siblings('li').children('a').css('backgroundColor','#a1a1a3');
    },3000);


    $('.content1 .tubiao a>p').on('click',function () {
        $(this).css('color','#00c1de').parent().parent().siblings('li').find('p').css('color','black')
        var idx=$(this).parent().parent().index();
        $('.content2').children('div').eq(idx).stop(true, false).fadeIn(1000).siblings('div').stop(true, false).fadeOut(0);
        return false;
        // $('.moban2').hide();
        // $('.moban0').show();

    })


    //加一个px的外边框的时候 必须让盒子保持原本大小
    $('.content2 .inner>div').on('mouseenter',function () {
        $(this).css({
            border:'1px solid #e3e3e4',
             // boxShadow:'10px 0px 50px -15px black', 加了阴影 走的时候还在
            backgroundColor:'white',
            padding:'17px'
        })
        $(this).siblings('div').css({
            border:'none',
            backgroundColor:'#f5f5f6',
            padding:'18px'
        });
    })

    $('.content2 .inner>div').on('mouseleave',function () {
        $(this).css( {
            border:'none',
            backgroundColor:'#f5f5f6',
            padding:'18px'
        })
    })


    // $('.content3 .tubiao a>p').on('click',function () {
    //     $(this).css('color','#00c1de').parent().parent().siblings('li').find('p').css('color','black')
    //     var idx=$(this).parent().parent().index();
    //     // $('.content2').children('div').eq(idx).stop(true, false).fadeIn(1000).siblings('div').stop(true, false).fadeOut(0);
    //
    //     $('.moban0').hide();
    //     $('.moban2').show();
    //      return false;
    //
    // })


    //鼠标移入li,让里面的图片变大
    $('.content4 li').on('mouseenter',function () {
        $(this).find('.bg2').stop(true, false).animate({
            width: 440,
            height: 260,
            left: -30
        }, 300, 'linear');

        $(this).find('.bg1').stop(true, false).animate({
            width: 600,
            height: 400,
            left: -30
        }, 300, 'linear');
    })

    $('.content4 li').on('mouseleave',function () {
        $(this).find('.bg2').stop(true,false).animate({
            width:380,
            height:240,
            left:0
        },500,'linear');

        $(this).find('.bg1').stop(true, false).animate({
            width: 380,
            height: 240,
            left: 0
        }, 300, 'linear');
    })





    //鼠标移入让mask里面的图片透明度为0,移出复原
    $('.content5 li').on('mouseenter',function () {
        $(this).find('.mask').children('img').css('opacity','0');
        $(this).find('.neirong').stop(true,false).animate({
            top:'-170px'
        },300,'swing');
    })

    $('.content5 li').on('mouseleave',function () {
        $(this).find('.mask').children('img').css('opacity','0.7');
        $(this).find('.neirong').stop(true,false).animate({
            top:'-55px'
        });

    })




    //鼠标移入变背景色效果
    $('.content7 .dleft').on('mouseenter',function () {
        $(this).css('backgroundColor','#00c1de')
    })
    $('.content7 .dleft').on('mouseleave',function () {
        $(this).css('backgroundColor','#0c0840')
    })

    $('.content7 .dright').on('mouseenter',function () {
        $(this).css('backgroundColor','#00c1de')
    })
    $('.content7 .dright').on('mouseleave',function () {
        $(this).css('backgroundColor','#0c0840')
    })
})