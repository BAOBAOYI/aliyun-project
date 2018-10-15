/*
** Create by Hoffy on 2018/8/9
*/

    /*******************************目录列表************************************************************/
$ ( function () {
    ( function () {
        //创建数组
        var date = []
//标签数据
        date[ 2 ] = {
            "通用解决方案" : [ "网站", "IPv6解决方案", "一站式移动研发", "企业互联网架构", "企业级云上网络", "混合云", "云存储", "数据传输", "数据库灾备", "央企采购电商" ],
            "行业解决方案" : [ "新零售", "新金融", "新制造", "新能源", "新技术", "大游戏", "大视频", "大传媒", "大政务", "大健康", "交通物流", "教育", "房地产", "汽车" ],
            "企业服务解决方案" : [ "区块链", "SAP 云", "Cloud Foundry 部署", "移动APP", "企加云CRM", "SAAS云", "AIOps故障管理", "钉钉E应用", "LinkedMall商城解决方案" ],
            " 安全解决方案" : [ "等保合规安全", "政务云安全", "新零售安全", "混合云态势感知", "互联网金融安全", "游戏安全", "社交/媒体spam", "企业预防勒索" ],
            "大数据解决方案" : [ "智慧场馆解决方案", "智能设备搜索", "大数据仓库", "云上数据集成", "台风路径分析", "工业大数据服务", "企业数据服务", "智能旅游", "智能配送调度", "手机数据", "VR应用开发" ],
            "DevOps解决方案" : [ "企业效能", "开源自动化运维工具", "容器服务-Kubernetes", "容器服务深度学习", "企业数据库DevOps", "DevOps闭环整体架构" ]
        }
        date[ 4 ] = {
            " ET大脑 " : [ "ET城市大脑", "ET工业大脑", "ET农业大脑", "ET环境大脑", "ET医疗大脑", "ET航空大脑" ],
            "工业智能解决方案" : [ "图像自动外检", "工艺参数优化", "“见远”视觉智能诊断方案", "工业大数据服务解决方案", "智能配送调度解决方案" ],
            "城市智能解决方案" : [ "城市交通态势评价", "特种车辆优化通行方案", "大规模网格AI信号优化" ],
            " 通用智能解决方案" : [ "门禁/闸机人脸识别", "刷脸认证服务解决方案", "智慧场馆解决方案", "智能设备搜索解决方案", "大数据线索优化解决方案", "智能旅游解决方案" ]
        }
        date[ 5 ] = {
            "智能语音交互" : [ "录音文件识别", "实时语音识别", "一句话识别", "语音识别模型优化工具", "语音合成", "语音对话平台" ],
            "机器视觉" : [ "图像搜索", "图像打标", "场景识别", "图像鉴黄", "人脸检测定位", "人脸属性识别", "人脸比对", "人脸查找", "通用型卡证类", "行业文档类识别", "行业票据识别", "视频类文字识别" ],
            "自然语言处理" : [ "自然语言处理", "商品评价解析", "地址解析", "机器翻译" ],
            " 视频智能" : [ "视频审核", "视频DNA", "视频多模态内容理解", "智能封面" ],
            "数据分析与应用" : [ "DataV数据可视化", "QuickBI", "Opensearch开放搜索", "Elasticsearch", "关系网络分析", "企业图谱", "营销引擎" ],
            "大数据基础服务" : [ "MaxCompute（原ODPS）", "分析型数据库", "E-MapReduce", "流计算", "DataWorks", "数据集成", "Data Lake Analytics", "机器学习PAI" ]
        }
        date[ 6 ] = {
            "安全产品 · 云盾" : [ "DDoS高防IP", "Web应用防火墙", "游戏盾", "安骑士", "态势感知", "SSL 证书", "内容安全", "安全管家", "堡垒机", "加密服务", "数据库审计", "云防火墙", "实人认证", "安全加速 SCDN", "混合云" ],
            "安全解决方案" : [ "等保合规安全解决方案", "政务云安全解决方案", "新零售安全解决方案", "混合云态势感知解决方案", "互联网金融安全解决方案", "游戏安全解决方案", "社交/媒体spam解决方案", "企业预防勒索解决方案" ],
            "安全服务 · 先知" : [ "安全众测", "等保测评", "应急响应", "漏洞扫描服务", "安全培训", "安全评估", "代码审计", "网站安全监测服务", "安全加固", "安全保障服务", "现场值守服务", "安全通告服务", "安全应急演练服务", "PCI DSS合规咨询" ],
            " 安全公益" : [ "产业安全扶助计划" ]
        }
        date[ 7 ] = {
            "基础软件市场" : [ "预装操作系统", "预装开发语言环境", "预装建站系统", "数据库镜像软件", "运维工具", "应用开发工具" ],
            "网站建设" : [ "企业官网定制", "电商网站定制", "精美网站模板", "推广与营销", "手机网站定制", "APP定制开发" ],
            "企业应用" : [ "公司/商标注册等服务", "视频直播", "销售管理", "财务管理", "协同办公", "人事管理" ],
            " 服务与培训" : [ "环境配置", "培训与认证", "服务器代维", "数据迁移", "故障排查", "行业解决方案" ]
        }
        date[ 8 ] = {
            "帮助文档" : [ "文档", "新手学堂", "自助工具", "专家分享" ],
            "支持" : [ "支持计划", "智能顾问", "联系客服", "公告" ],
            "服务" : [ "咨询与设计", "迁移与部署", "运维与管理", "优化与提升", "服务案例" ]
        }
        date[ 9 ] = {
            "合作计划" : [ "渠道分销计划", "云市场计划", "云安全合作计划", "SaaS合作计划", "智能生活物联网合作计划", "区域服务计划", "城市服务商计划", "天池众智数据智能合作计划" ],
            "技术与赋能" : [ "生态技术联盟", "合作伙伴赋能平" ],
            "云大使" : [ "推荐返利计划", "返利任务平台", "云大使赋能平台" ]
        }


        /*创建一个生成列表的函数*/
        function createDl ( date ) {
            var dls = []
            for ( var key in date ) {
                var dl = document.createElement ( "dl" )
                var dt = document.createElement ( "dt" )
                dt.innerText = key
                dl.appendChild ( dt )
                for ( var i = 0 ; i < date[ key ].length ; i ++ ) {
                    var dd = document.createElement ( "dd" )
                    var a = document.createElement ( "a" )
                    a.innerText = date[ key ][ i ]
                    dd.appendChild ( a )
                    dl.appendChild ( dd )
                }
                dls.push ( dl )
            }
            return dls
        }

        /*把创建的dl数组放入HTML中的函数*/
        function setDl ( obj, dls ) {
            obj.empty ()
            for ( var i = 0 ; i < dls.length ; i ++ ) {
                obj.append ( dls[ i ] )
            }
        }

        /*移入动画*/

        var timeID = null
        //获取所有的li标签
        var $li2 = $ ( "#menu-list" ).children ( "li" )
        $li2.mouseenter ( function () {
            //清除定时器
            clearTimeout ( timeID )
            //其中有几个没有列表的需要排除
            if ( $ ( this ).index () != 0 && $ ( this ).index () != 1 && $ ( this ).index () != 3 ) {

                setDl ( $ ( "#list" ), createDl ( date[ $ ( this ).index () ] ) )
                //加入下拉动画
                $ ( "#list" ).stop ( true, true ).slideDown ( "normal" )
                //根据元素的offset位置计算箭头到li标签中心的距离
                var focLeft = $ ( this ).position ().left + $ ( this ).innerWidth () / 2 - 10
                //箭头移动动画
                $ ( "#foc" ).show ().stop ( true, false ).animate ( {
                    "left" : focLeft
                }, 100 )
            } else {
                $ ( "#list" ).stop ( true, true ).slideUp ( "normal" )
                //移动到其他需要将列表收起箭头也要隐藏
                $ ( "#foc" ).hide ()
            }
            //判断显示列表的位置
            if ( $ ( this ).index () >= 6 ) {
                $ ( "#list" ).css ( {
                    left : 165
                } )
            } else {
                $ ( "#list" ).css ( {
                    left : 0
                } )
            }
            //设置移出事件
            $ ( this )[ 0 ].onmouseleave = $ ( "#list" )[ 0 ].onmouseleave = function () {
                //需要设置定时器,来防止移除立刻隐藏
                timeID = setTimeout ( function () {
                    $ ( "#list" ).stop ( true, false ).slideUp ( "normal" )
                    //移出时将箭头隐藏
                    $ ( "#foc" ).hide ()
                }, 500 )
            }
        } )
        $ ( "#list" ).mouseenter ( function () {
            //如果有移入事件,清理定时器移除立刻隐藏
            clearTimeout ( timeID )
            //$ ( this ).show ()
        } )
    } () );
    /*********************************中国站移入********************************************************/
    ( function () {
        //背景只要鼠标移入就变深
        $ ( "#top-p" ).mouseenter ( function () {
            $ ( "#top-p" ).css ( "backgroundColor", "rgba(55,61,65,1)" )
        } )
        $ ( "#top-p" ).mouseleave ( function () {
            $ ( "#top-p" ).css ( "backgroundColor", "rgba(55,61,65,0.5)" )
        } )



        //移入移除时修改iconfont标签的类名
        $ ( ".station" ).mouseenter ( function () {
            $ ( ".station ul" ).show ()
            $ ( ".station i" ).removeClass ( "icon-jiantouarrow483" )
            $ ( ".station i" ).addClass ( "icon-jiantou-copy-copy-copy" )
        } )
        $ ( ".station" ).mouseleave ( function () {
            $ ( ".station ul" ).hide ()
            $ ( ".station i" ).removeClass ( "icon-jiantou-copy-copy-copy" )
            $ ( ".station i" ).addClass ( "icon-jiantouarrow483" )
        } )
    } () );
    /*********************************输入框变化********************************************************/
     ( function () {
        //移入时候变长
        var $input = $ ( ".input" )
        $input.mouseenter ( function () {
            $ ( this ).stop ( true, false ).animate ( { "width" : 300 }, 500 )
            $ ( this ).css ( "border", "1px solid #00c1de" )
        } )
        $input.mouseleave ( function () {
            //判断输入框是否处于焦点,等同于原生中的:元素==document.activeElement
            if ( $ ( ".input input" ).is ( ":focus" ) ) {
                return
            } else {
                $input.stop ( true, false ).animate ( { "width" : 200 }, 500 )
                $ ( this ).css ( "border", "1px null" )
            }
        } )
        //失去焦点需要再次判断
        $ ( ".input input" ).blur ( function () {
            $input.animate ( { "width" : 200 }, 500 )
            $input.css ( "border", "1px null" )
        } )
        //没输入内容时提示文字
        if ( $ ( ".input input" )[ 0 ].value == "" ) {
            $ ( ".input input" )[ 0 ].placeholder = "短信服务"
        } else {
            $ ( ".input input" )[ 0 ].placeholder = ""
        }
    } () );
    /*********************************左列表*************************************************************/
    ( function () {
        //定时器ID
        var timeID
        //记录是否是第一次进入一级列表的变量
        var sw = 0
        //左侧按钮变化
        //移入时下拉一级菜单，按钮部分变色
        $ ( ".topleft" ).mouseenter ( function () {
            clearTimeout ( timeID )
            $ ( ".listLeft" ).stop ( true, true ).stop ( true, true ).animate ( { "left" : 0 } )
            $ ( ".topleft .listbg" ).css ( "backgroundColor", "#00c1de" )
        } )
        $ ( ".topleft" ).mouseleave ( function () {
            sw = 0
            timeID = setTimeout ( function () {
                $ ( ".listLeft" ).stop ( true, true ).animate ( { "left" : - 255 } )
                $ ( ".topleft .listbg" ).css ( "backgroundColor", "" )
            }, 300 )

            $ ( ".sec-list" ).stop ( true, true ).animate ( { "width" : 0 }, 300 )

        } )


        //移入一级列表li选项，对应的二级列表出现  ！！！
        $ ( ".clearfix>li" ).mouseenter ( function () {
            clearTimeout ( timeID )
            //不同序号的列表宽度不同用一个变量进行记录
            /*            var listWith=0;
                        switch($(this).index()){
                            case 1: case 2: case 3: case 4: case 6:
                            listWith=240;
                            break;
                            default:*/
            listWith = 320
            /*             break;
                 };*/
            sw ++
            //如果是第一次进入标签则执行推出动画
            if ( sw == 1 ) {
                $ ( ".sec-list" ).eq ( $ ( this ).index () ).stop ( true, true ).animate ( { "width" : listWith } ).siblings ( ".sec-list" ).css ( "width", 0 )
            } else {
                //否则直接让对应二级列表出现，不执行动画
                $ ( ".sec-list" ).eq ( $ ( this ).index () ).css ( { "width" : listWith } ).siblings ( ".sec-list" ).css ( "width", 0 )
            }
        } )
        //二级列表移入时候清除定时器
        $ ( ".sec-list" ).on ( "mouseenter", function () {
            clearTimeout ( timeID )
        } )
        //当从二级列表移出
        $ ( ".sec-list" ).on ( "mouseleave", function () {
            timeID = setTimeout ( function () {
                $ ( this ).stop ( true, true ).animate ( { "width" : 0 } )
                $ ( ".listLeft" ).stop ( true, true ).animate ( { "left" : - 255 } )
                sw = 0
            }, 500 )
        } )
    } () );
    /*********************************轮播图*************************************************************/
    ( function () {
        //获取屏幕的宽度给通栏
        var winWidth = $ ( window ).width ()
        $ ( "#top-p" ).css ( "width", winWidth )
        //按键点定位
        $ ( ".dic " ).css ( {
            left : winWidth / 2 - $ ( ".dic " ).width () / 2
        } )
        //轮播文字定位
        $ ( ".innerWord" ).css ( {
            left : winWidth / 9
        } )
        //设置轮播下面文字的定位
        $ ( ".pic-bottom>ul" ).css ( {
            "left" : winWidth / 2 - $ ( ".pic-bottom>ul " ).width () / 2
        } )



//定时器部分
        //先给每个按键条设置点击事件
        $ ( ".dic li" ).on ( "click", function () {
            //给时钟重新添加
            clearInterval ( timer )
            timer = setInterval ( fn1, 5000 )

            //清除按键条的动画效果
            $ ( ".dic li" ).children ( "i" ).stop ( true, false )
            $ ( ".dic li" ).children ( "i" ).css ( "width", 0 )


            //获取对应按钮条
            var $i = $ ( this ).find ( "i" )
            //对应的按键条开始动画变化
            $i.stop ( true, true ).animate ( {
                width : $ ( ".dic li" ).width ()
            }, 5000 )


            //获取对应的图片盒子
            var $pic = $ ( ".top-pic .pic" ).eq ( $ ( this ).index () )
            //添加激活class,会在CSS中有一次闪烁动画
            $pic.addClass ( "active" ).siblings ().removeClass ( "active" )

            //给里面的图片一个透明度变化动画
            $pic.find ( ".img" ).animate ( {
                opacity : 1
            }, 2000, "swing" ).parent ().siblings ( ".pic" ).find ( ".img" ).css ( "opacity", 0 )
            //给图片盒子一个高度变化动画
            $pic.animate ( {
                height : 600
            }, 600, "swing" ).siblings ( ".pic" ).css ( "height", 0 )

        } )


        //一刷新就是给执行一次
        $ ( ".dic li" ).eq ( 0 ).click ()


        //定时器设置变化函数
        var fn1 = function () {
            //变量获取现在激活的图片
            var act = $ ( ".top-pic .active" ).index ()
            //判断等于最后一张就跳到第一张
            act ++
            if ( act == 5 ) {
                act = 0
            }
            //触发下一张的点击事件
            $ ( ".dic li" ).eq ( act ).trigger ( "click" )
        }

        var timer = setInterval ( fn1, 5000 )

//下文文字hover效果
        $ ( ".pic-bottom li" ).on ( "mouseenter", function () {
            $ ( this ).css ( {
                "backgroundColor" : "#40434b", opacity : 0.8
            } )
        } )
        $ ( ".pic-bottom li" ).on ( "mouseleave", function () {
            $ ( this ).css ( {
                "backgroundColor" : "", opacity : 1
            } )
        } )
    } () );
    /********************************切换模块************************************************************/
    ( function () {
        //点击凸起变色
        $ ( ".tagInner a" ).on ( "mouseenter", function () {
            $ ( this ).stop ( true, true ).animate ( {
                backgroundColor : "#ffffff"
            } ).find ( "i" ).show ()
            $ ( this ).css ( {
                boxShadow : "inset 0 0 5px #CCC"
            } )
        } )
        $ ( ".tagInner a" ).on ( "mouseleave", function () {
            $ ( this ).stop ( true, true ).css ( {
                backgroundColor : ""
            } ).find ( "i" ).hide ()
            $ ( this ).css ( {
                boxShadow : ""
            } )
        } )
        //点击切换的点击事件
        $ ( ".taglist li" ).on ( "click", function () {
            $ ( ".taglistInner>div" ).eq ( $ ( this ).index () ).addClass ( "selected" ).siblings ( "div" ).removeClass ( "selected" )

            //其他图片,变白色
            $ ( ".taglist li" ).each ( function ( index, ele ) {
                var num = index + 1
                $ ( ele ).find ( "a" ).children ( "div" ).css ( { "background-image" : "url(imgs/m" + num + ".png)" } )
            } )
            //让对应的图片变青色
            var num = $ ( this ).index () + 1
            $ ( this ).find ( "a" ).children ( "div" ).css ( { "background-image" : "url(imgs/m" + num + "-1.png)" } )
            //清除其余字体颜色
            $ ( ".taglist li" ).each ( function ( index, ele ) {
                $ ( ele ).find ( "a" ).children ( "" ).css ( { "color" : "" } )
            } )
            //直接移除类名,让第一个p标签的颜色样式移除
            $ ( ".firstword" ).removeClass ( "firstword" )
            //把下面的字改颜色
            $ ( this ).find ( "a" ).children ( "p" ).css ( { "color" : "#00c1de" } )
            //箭头变化
            //需要移动的距离
            var leng = $ ( this ).position ( "ul" ).left + 120 - 10
            $ ( ".tagjiantou" ).stop ( true, true ).animate ( {
                left : leng
            } )
            //图片链接切换

            return false
        } )
    } () );
    /*********************************产品部分***********************************************************/
    (function (  ) {
        $ ( ".product-btn a" ).on ( "click", function () {

            if ( $ ( ".product-bottom" ).height () == 0 ) {
                $ ( ".product-bottom" ).find ( "a" ).show ()
                $ ( ".product-bottom" ).stop ( true, true ).animate ( { height : 130 } )
            } else {
                $ ( ".product-bottom" ).find ( "a" ).hide ()
                $ ( ".product-bottom" ).stop ( true, true ).animate ( { height : 0 } )
            }
            return false
        } );
    }());
    /*********************************滑动表部分*********************************************************/
    (function (  ) {
        //给滑动栏一个根据父元素的宽度
        var Width = $ ( ".wrapMod-inner" ).width () - 100
        $ ( ".wrap-body" ).css ( "width", Width )
//给ul一个根据父元素的宽度
        $ ( ".wrap-body ul" ).css ( "width", Width * 3 )
        //给li一个根据可视盒子的宽
        var liWidth = $ ( ".wrap-body" ).innerWidth () / 5
        $ ( ".wrap-body li" ).css ( "width", liWidth )
        $('.mask .bg').css("width", liWidth);
//点击滑动
        var index=0;
        //左点击
        $('.wrap-leftbtn').on('click',function () {
            index--;
            //判断边界
            if(index<0){
                index=1;
            }
            //瞬间移动到最后一张
            $('.wrap-body ul').css({
                left: -$('.wrap-body').width()*(index+1)
            });
            $('.wrap-body ul').stop(true,true).animate({
                left:-$('.wrap-body').width()*index
            });
        });
        //右点击
        $('.wrap-rightbtn').on('click',function(){
            index++;
            $('.wrap-body ul').stop(true,true).animate({
                left:-$('.wrap-body').width()*index
            },function(){
                if(index==2) {
                    index = 0;
                    $ ( '.wrap-body ul' ).css ( {
                        left : - $ ( '.wrap-body' ).width () * index
                    } );
                }
            });
        });
        //按键移入显示
        $('.wrapMod-inner').on('mouseenter',function(){
            $('.wrap-rightbtn').stop(true,true).animate({
                opacity:0.2
            })
            $('.wrap-leftbtn').stop(true,true).animate({
                opacity:0.2
            })
            return false;
        });
        //移出隐藏
        $('.wrapMod-inner').on('mouseleave',function(){
            $('.wrap-rightbtn').stop(true,true).animate({
                opacity:0
            })
            $('.wrap-leftbtn').stop(true,true).animate({
                opacity:0
            })
            return false;
        });



        //内容变化
        $('.wrap-body li').on('mouseenter',function(){
            //改遮罩层改颜色
            $(this).find('.bg').stop(true,true).animate({'backgroundColor':'#00c1de'});
            //线消失
            $(this).find('.wrapLine').animate({
                height:0
            });
            $(this).find('.wrapLine').find('i').animate({
                opacity:0
            });
            //内容上移动
            $(this).find('.wrap-content').stop(true,true).animate({
                top:50
            });
            $(this).find('.wrap-content').find('.wrapword-hover').stop(true,true).animate({
                opacity:1,
            },800);
            $(this).find('.wrap-content').find('.wrapbtn-hover').stop(true,true).animate({
                opacity:1
            },800);
            $(this).find('.wrap-content').find('.wrapbtn-hover').on('mouseenter',function () {
                $(this).css({
                    'backgroundColor':'#ffffff',
                    'color':'#00c1de',
                    'opacity':'0.8'
                });
            });
            //还原
            $(this).find('.wrap-content').find('.wrapbtn-hover').on('mouseenter',function () {
                $(this).css({
                    'backgroundColor':'',
                    'color':'#fff',
                    'opacity':'0'
                });
            });

        });

        //移除还原位置
        $('.wrap-body li').on('mouseleave',function() {

            //还原位置
            $ ( '.wrap-content' ).stop ( true, true ).animate ( {
                top : 100
            } );
            $ ( '.wrap-content .wrapword-hover' ).stop ( true, true ).animate ( {
                opacity : 0
            }, 800 );
            $ ( '.wrapbtn-hover' ).stop ( true, true ).animate ( {
                opacity : 0
            }, 800 );
            //改遮罩层还原颜色
            $('.mask .bg').stop(true,true).animate({'backgroundColor':'#161a1d'});
            //线出现
            $('.wrap-content .wrapLine').animate({
                height:20
            });
            $('.wrap-content .wrapLine i').animate({
                opacity:2
            });

        });
    }());
    /*********************************动画变化部分*******************************************************/
    (function (  ) {
        $('.service-pic').on('mouseenter',function(){
            $('.service-pic').removeClass('changeBack');
            $('.service-pic').removeClass('change');
            $(this).addClass('change');
        });
        $('.service-pic').on('mouseleave',function(){
            $('.service-pic').removeClass('changeBack');
            $('.service-pic').removeClass('change');
            $(this).addClass('changeBack');
        });
    }());
    /*********************************图片放大部分*******************************************************/
    (function (  ) {
        $('.pic-inner img').on('mouseenter',function(){
            $(this).css({
                transform:'scale(1.2)'
            })
        });
        $('.pic-inner img').on('mouseleave',function(){
            $(this).css({
                transform:'scale(1)'
            })
        });
        //最后一个按钮
        $('.freeuse a').on('mouseenter',function(){
            $(this).animate({
                backgroundColor:'#fff'
            }).css({
                color:'#00cdec'
            });
        });
        $('.freeuse a').on('mouseleave',function(){
            $(this).animate({
                backgroundColor:'transparent'
            }).css({
                color:'#fff'
            });
        });
    }());
    /*********************************固定左导航*********************************************************/
    var timer=null
    $('#chat').on('mouseenter',function(){
        clearTimeout(timer);
        $('.chat-chat').show();
    });
    $('#chat').on('mouseleave',function(){
         timer=setTimeout(function(){
            $('.chat-chat').hide();
        },500);
    });
    $('.chat-chat').on('mouseenter',function() {
        clearTimeout(timer);
    });
    $('.chat-chat').on('mouseleave',function() {
        timer=setTimeout(function(){
            $('.chat-chat').hide();
        },500);
    });

    } )
