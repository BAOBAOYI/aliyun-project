/**
 * Created by 18965 on 2018/8/12.
 */
//解决方案js
//1.需求 鼠标移入移除事件   移入 显示另外一张图片同时隐藏原先的图片  同时li标签的边框变高亮
$(function(){
    $('.mian .plan>ul li').on('mouseenter',function(){
        $(this).find('.img').hide();
        $(this).find('.img2').show();
        $(this).css('border-color','#00c1de');
    });

    $('.mian .plan>ul li').on('mouseleave',function(){
        $(this).find('.img').show();
        $(this).find('.img2').hide();
        $(this).css('border-color','');
    });
})

/////////////////////////////////////////////////////////////

$(function(){
    $('.tab-content ul li').on('mouseenter',function(){
        $(this).find('.pic').hide();
        $(this).find('.pic2').show();
        $(this).css('border-color','#00c1de');
    });

    $('.tab-content ul li').on('mouseleave',function(){
        $(this).find('.pic').show();
        $(this).find('.pic2').hide();
        $(this).css('border-color','');
    });
})

//2.需求 切换导航栏
$(function(){
   $('.J_tab>ul>li').on('click',function(){
       $(this).addClass('active').siblings('li').removeClass('active');
       var idx=$(this).index();
       $('.tab-pannel').eq(idx).show().siblings('.tab-pannel').hide();
   });
});
//3.移入 点亮边框
$(function(){
    $('.item1').on('mouseenter',function(){
        $(this).css('border-color','#00c1de');
    });
    $('.item2').on('mouseenter',function(){
        $(this).css('border-color','#00c1de');
    });
    $('.right-gj').on('mouseenter',function(){
        $(this).css('border-color','#00c1de');
    });

    $('.item1').on('mouseleave',function(){
        $(this).css('border-color','');
    });

    $('.item2').on('mouseleave',function(){
        $(this).css('border-color','');
    });

    $('.right-gj').on('mouseleave',function(){
        $(this).css('border-color','');
    });
});

//切换架构
$(function(){
    $('.jgfw .right-gj ul>li').on('click',function(){
        $(this).addClass('cur').siblings('li').removeClass('cur');
        var idx=$(this).index();
        $('.jgfw .right-gj img').eq(idx).addClass('yuan').parent().siblings('li').children('img').removeClass('yuan');
        $('.jgfw .right-gj .intro').eq(idx).show().siblings('div').hide();
    });
});

//显示客户案例
$(function(){
    $('.kfal .customer li').on('mouseenter',function(){
        $(this).children('.word').show().siblings('img').hide();
    });
    $('.kfal .customer li').on('mouseleave',function(){
        $(this).children('.word').hide().siblings('img').show();
    });
});


//显示培训与支持
$(function(){
   $('.pxyzc .support li').on('mouseenter',function(){
       $(this).find('.pic2').show().siblings('.pic').hide();
       $(this).css('borderColor','#00c1de');
   });

    $('.pxyzc .support li').on('mouseleave',function(){
        $(this).find('.pic2').hide().siblings('.pic').show();
        $(this).css('borderColor','');
    });

});

//拉动滚动条
$(function(){
    var navTop=$('.nav').height();

    $(window).on('scroll',function(){
        var jC=$(this).scrollTop();
        if(jC>=navTop){
            $('.navtwo').css({
                position:"fixed",
                left:0,
                top:0,
                'z-index': 99,
                'background-color':'#fff',
            });
            $('.navtwo .mmm').show();
          $('.navtwo .hhh>li a').css('color','black');
            $('.navtwo .hhh>li a')[0].style.color='#00c1de';
            $($('.navtwo .hhh>li')[0]).addClass('dd').siblings('li').removeClass('dd');

            if(jC>=950){
                $('.navtwo .hhh>li a').css('color','black');
                $('.navtwo .hhh>li a')[1].style.color='#00c1de';
                $($('.navtwo .hhh>li ')[1]).addClass('dd').siblings('li').removeClass('dd');
            }
            if(jC>=1220){
                $('.navtwo .hhh>li a').css('color','black');
                $('.navtwo .hhh>li a')[2].style.color='#00c1de';
                $($('.navtwo .hhh>li')[2]).addClass('dd').siblings('li').removeClass('dd');
            }
            if(jC>=1800){
                $('.navtwo .hhh>li a').css('color','black');
                $('.navtwo .hhh>li a')[3].style.color='#00c1de';
                $($('.navtwo .hhh>li')[3]).addClass('dd').siblings('li').removeClass('dd');
            }
            if(jC>=2500){
                $('.navtwo .hhh>li a').css('color','black');
                $('.navtwo .hhh>li a')[4].style.color='#00c1de';
                $($('.navtwo .hhh>li')[4]).addClass('dd').siblings('li').removeClass('dd');
            }
            if(jC>=3000){
                $('.navtwo .hhh>li a').css('color','black');
                $('.navtwo .hhh>li a')[5].style.color='#00c1de';
                $($('.navtwo .hhh>li')[5]).addClass('dd').siblings('li').removeClass('dd');
            }

        } else{
            $('.navtwo .mmm').hide();
            $('.navtwo').css(
                {
                    position:'static',
                    'background-color':''
                }
            );
            $('.navtwo .hhh>li a').css('color','');
            $('.navtwo .hhh>li a')[0].style.color='';
            //$('.navtwo .hhh>li')[0].style.borderBottom='';
            $( $('.navtwo .hhh>li')[0]).removeClass('dd')
        }



    });
});
   /////////////////////////////////
$(function(){
    $('.navtwo .mmm').on('mouseenter',function(){
        $(this).addClass('pp');
        $('.navtwo .jj').show();
        $('.navtwo .ccc').show();
    });
    $('.navtwo .mmm').on('mouseleave',function(){

        $('.navtwo .jj').hide();

        $('.navtwo .mmm').removeClass('pp');

    });

    $('.navtwo .jj').on('mouseenter',function(){
        $(this).show();
        $('.navtwo .mmm').addClass('pp');
    });
    $('.navtwo .jj').on('mouseleave',function(){
        //$(this).hide();
        //$('.navtwo .mmm').removeClass('pp');
        //$('.navtwo .tuone').hide();
        //$('.navtwo .tutwo').hide();
        //$('.navtwo .tuthree').hide();
    });

    $('.navtwo .ccc').on('mouseleave',function(){
        $(this).hide();
        $('.navtwo .mmm').removeClass('pp');
        $('.navtwo .tuone').hide();
        $('.navtwo .tutwo').hide();
        $('.navtwo .tuthree').hide();
    });



    $('.navtwo .tuone').on('mouseleave',function(){
        $('.navtwo .jj').hide();
        $('.navtwo .mmm').removeClass('pp');
        $('.navtwo .tuone').hide().siblings('div').hide();
    });

    $('.navtwo .tutwo').on('mouseleave',function(){
        $('.navtwo .jj').hide();
        $('.navtwo .mmm').removeClass('pp');
        $('.navtwo .tutwo').hide().siblings('div').hide();
    });

    $('.navtwo .tuthree').on('mouseleave',function(){
        $('.navtwo .jj').hide();
        $('.navtwo .mmm').removeClass('pp');
        $('.navtwo .tuthree').hide().siblings('div').hide();
    });



//一
    $('.navtwo .jj>li.a1').on('mouseenter',function(){
            $(this).addClass('ic').siblings('li').removeClass('ic');
        $('.navtwo .tuone').show().siblings('div').hide();
    });
    $('.navtwo .jj>li.a1').on('mouseleave',function(){
        $(this).removeClass('ic');
        //$('.navtwo .tuone').hide();

    });
//二
    $('.navtwo .jj>li.a2').on('mouseenter',function(){
        $(this).addClass('ic').siblings('li').removeClass('ic');
        $('.navtwo .tutwo').show().siblings('div').hide();
    });
    $('.navtwo .jj>li.a2').on('mouseleave',function(){
        //$('.navtwo .tutwo').hide();
        $(this).removeClass('ic');
    });
//三
    $('.navtwo .jj>li.a3').on('mouseenter',function(){
        $(this).addClass('ic').siblings('li').removeClass('ic');
        $('.navtwo .tuthree').show().siblings('div').hide();
    });
    $('.navtwo .jj>li.a3').on('mouseleave',function(){
        //$('.navtwo .tuthree').hide();
        $(this).removeClass('ic');
    });

});

/////////////////////////////////////////////////////
$(function(){
    $('.right .body-right').on('mouseenter',function(){
        $('.right .right-img').show()
    })
    $('.right .body-right').on('mouseleave',function(){
        $('.right .right-img').hide()
    })
});



$(window).on('scroll',function(){
    var db=$(this).scrollTop();
    console.log(db);
    if(db>=1000){
        $('.b-return').show();
    }else{

        $('.b-return').hide();
    }

});


