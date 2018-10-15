/**
 * Created by DELL on 2018/8/11.
 */
$(function( ){
    //顶部点击换页
//点击时,对应的标识背景颜色改变,其他恢复
    var indexTop=0;
    //鼠标移入事件
    $('.top #list li').on('mouseenter', function () {
        //鼠标移入,该移入元素变色
        for (var i = 0; i < $('.top #list li').length; i++) {
            if(i != indexTop) {
                $($('.top #list li')[i]).children('a').css('background-color', 'hsla(0,0%,100%,.6)')
            }
        }
        var indexEnter = $(this).index();
        //排他思想  如果不是选中的那一个或者移入的这一个,变为默认色
        for (var i = 0; i < $('.top #list li').length; i++) {
            if (i != indexTop && i != indexEnter) {
                $($('.top #list li')[i]).children('a').css('background-color', 'hsla(0,0%,100%,.3)')
            }
        }

    })
    //鼠标离开事件
    $('.top #list li').on('mouseleave', function (){
        //遍历,如果不是选中那一个,颜色全部变成默认
        for (var i = 0; i < $('.top #list li').length; i++) {
            if (i != indexTop) {
                $($('.top #list li')[i]).children('a').css('background-color', 'hsla(0,0%,100%,.3)')
            }
        }
    })
    //鼠标点击事件
    $('.top #list li').on('click', function () {
        //console.log('鼠标点击');
        $(this).children('a').css('background-color','white').parent().siblings('li').children('a').css('background-color','hsla(0,0%,100%,.3)')
        indexTop=$(this).index();
        $('.top .top1:eq('+indexTop+')').css({'display':'block','margin-top':40}).stop(true,false).animate({'margin-top':0},300).siblings('.top1').css('display','none');
    })
    //中部点击事件
//导航栏点击
//鼠标移入li
    var indexMid=0;
    $('.mid #midul>li').on('mouseenter', function () {
        var indexyiru=$(this).index()
        //遍历如果不是点击那一个,则显示
        for (var i = 0; i < $('.mid #midul>li').length; i++) {
            if((i!=indexMid)&&(i==indexyiru)){
                var midcolor=$($('.mid .mid-top li')[i]).css('background-color')
                $($('.mid #midul>li')[i]).css('background-color','rgba(255,255,255,.1)')
            }
    }
        //鼠标移出li
        $('.mid .mid-top #midul>li').on('mouseleave', function () {
            //如果不是选中的那一个,则颜色全部为默认
            for (var i = 0; i < $('.mid .mid-top li').length; i++) {
                if(i!=indexMid){
                    $($('.mid .mid-top li')[i]).css('background-color',midcolor)
                }
            }
        })
        //鼠标点击
        $('.mid #midul>li').on('click', function (){
            $(this).css('background-color','#00c1de').siblings('li').css('background-color',midcolor)
            indexMid=$(this).index();
            console.log(indexMid);
            console.log($(this).parent().parent().parent().children('.zhongxin'));
            $(this).parent().parent().parent().children('.zhongxin').eq(indexMid).css('display','block').siblings('.zhongxin').css('display','none');
        })
    })
    //center1  动画
    //鼠标移入
    $('.mid .center1 .gif').on('mouseenter',function(){
        $(this).children('.img2').show();
        $(this).children('.img1').hide();
    })
    //鼠标移出
    $('.mid .center1 .gif').on('mouseleave',function(){
        $(this).children('.img2').hide();
        $(this).children('.img1').show();
    })
    //center2   动画
    //尾部二维码
    $('.foot .inner6 .right .li1t li').on('mouseenter',function(){
        $(this).children('img').show().parent().siblings().children('img').hide();
    })
    //顶部搜索框

    $(".head1 .search").on("mouseenter",function (  ) {
        $(".head1 input").stop(false,false).animate({width:"240px"},500).css('background-color','transparent');
        $(".head1 .search").css({"height":"48px",'background-color':'transparent'});
        $(this).css("border","1px solid #00C1DE");
    });

    $(".head1 .search").on("mouseleave",function (  ) {
        $(".head1 input").stop(false,false).animate({width:"150px"},500,function (  ) {
            $(".head1 .search").css("border","");
            $(".head1 .search").css("height","50px");
        }).css('background-color','rgb(56, 62, 65)').parent().css('background-color','rgb(56, 62, 65)');
    });
    //滑过顶部,下边框消失
    $('.top .head1').on('mouseenter',function(){
        $('.top .head2').css('border-bottom','none');
    })
    $('.top .head1').on('mouseleave',function(){
        $('.top .head2').css('border-bottom','1px solid rgba(255, 255, 255,0.3 )');
    })
    $('.top .head2').on('mouseenter',function(){
        $('.top .head2').css('border-bottom','none');
    })
    $('.top .head2').on('mouseleave',function(){
        $('.top .head2').css('border-bottom','1px solid rgba(255, 255, 255,0.3 )');
    })
    //固定栏
    $('.fixed').on('mouseenter', function () {

        $('.fixed .cao-zuo').stop(true,false).fadeIn(200)
    })
    $('.fixed').on('mouseleave', function () {

        $('.fixed .cao-zuo').stop(true,false).delay(300).fadeOut(200)
    })

})

