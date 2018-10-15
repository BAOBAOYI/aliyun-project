/*
** Create by Hoffy on 2018/7/20
*/
/**
 *通过id获取元素对象
 * @param idName
 * @return {HTMLElement | null}
 */
function id (idName  ) {
    return document.getElementById(idName);
}

/**
 *通过类名获取元素对象
 * @param oParent
 * @param sClass
 * @return {Array}
 */
function getByClass(oParent, sClass){
    var   oEle= oParent.getElementsByTagName('*');
    oResult=[];

    for(var i=0;i<oEle.length;i++){
        if(oEle[i].className.indexOf(sClass)!=-1){
            oResult.push(oEle[i]); }
    }

    return oResult;
}

/**
 *  IE8下获取上个兄弟元素
 * @param ele
 * @return {ActiveX.IXMLDOMNode | Node | SVGElementInstance | (() => Node)}
 */
function getPreviousSibling(ele){
    var node=ele.previousSibling;
    while(node!=null&&node.nodeType!=1){
        node=node.previousSibling;
    }
    return node;
}

/**
 * IE8下获取下个兄弟元素
 * @param ele
 * @return {Node | SVGElementInstance | ActiveX.IXMLDOMNode | (() => Node)}
 */
function getNextSibling(ele){
    var node=ele.nextSibling;
    while(node!=null&&node.nodeType!=1){
        node=node.nextSibling;
    }
    return node;
}

/**
 * IE8下获取第一个元素
 * @param ele
 * @return {(() => Node) | ActiveX.IXMLDOMNode | Node | SVGElementInstance}
 */
function getFirstChild(ele){
    var node=ele.firstChild;
    while(node!=null&&node.nodeType !=1){
        node=node.nextSibling;
    }
    return node;
}

/**
 * IE8下获取最后一个元素
 * @param ele
 * @return {ActiveX.IXMLDOMNode | Node | SVGElementInstance | (() => Node)}
 */
function getLastChild(ele){
    var node=ele.lastChild;
    while(node!=null&&node.nodeType!=1){
        node=node.previousSibling;
    }
    return node;
}

/**
 * 获取元素文本
 * @param ele
 * @return {*}
 */
function getText(ele) {
    if ( ele.innnerText == 'undefined' ) {
        return ele.textContent;
    } else {
        return ele.innerText;
    }
}

/**
 *设置元素文本
 * @param ele
 * @param text
 */
function	 setText(ele,text) {
    if ( ele.innnerText == 'undefined' ) {
        ele.textContent = text;
    } else {
        ele.innerText = text;
    }
}

/**
 * animationMove运动函数
 * @param obj
 * @param target
 */
function animationMove (obj,target  ) {
    var direction=(obj.offsetLeft>target);
    // var speed=(target-obj.offsetLeft)/10;
    clearInterval(obj.timeID);   //在运动开始前必须清除之前运动产生的定时器,不然本次运动无效
    var speed=direction?-100:100;
    obj.timeID=setInterval(function () {
        obj.style.left=obj.offsetLeft+speed+'px'
        if(direction?obj.offsetLeft<=target:obj.offsetLeft>=target){
            clearInterval(obj.timeID);
            obj.style.left=target+'px';
        }
    },100);
}

/**
 * 缓冲运动(初级版)
 * @param obj
 * @param target
 */
function animationSlow (obj,target) {
    clearInterval(obj.timeID);
    obj.timeID= setInterval(function () {
        var speed=(target-obj.offsetLeft)/10;   //移动的速度
        //速度大于0就向上取整,小于0就向下取整,主要是让最后一段速度不下1px
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        obj.style.left=obj.offsetLeft+speed+'px';  //进行一次位移
        if ( obj.offsetLeft==target){
            clearInterval(obj.timeID);   //到位置就清除定时器
        }
    },10);
}

/**
 * 获取非行内样式
 * @param obj
 * @param attr
 * @return {*}
 */
function getStyle (obj, attr ) {
    //能力检测
    if(obj.currentStyle){
        //IE8及之前的
        return obj.currentStyle[attr];
    }else{
        //由window调用,传入的参数attr为字符串所有只能用字符串方式获取
        return window.getComputedStyle(obj,null)[attr];
    }
}

/**
 * 缓动动画最终版,obj为要移动的对象,attrs为放移动数据的对象,callback为回调函数,用于多段的运动
 * @param obj
 * @param attrs
 * @param callback
 */
//缓动运动最终版重写
function animateSlow(obj,target,callback){
    //清除定时器
    clearInterval(obj.timeID);
    //设置定时器
    obj.timeID=setInterval(function (  ) {
        /*             定义开关    不能放在forin循环里面.因为如果给两个条件为left和top,在循环的最后一次中top(后者)先达到目标值,
                      此时left还未达到目标,由于在forin循环里开关被在经历top后已经为true,会直接关闭定时器*/
        var oswitch=true;
        for(var attr in target) {


            //添加透明度
            if (attr=='opacity'){
                //取得数据
                var opcurrent=parseFloat(getStyle(obj,attr))*100;
                //目标数据
                var opaAttr=target[attr];   //乘以100方便计算
                var step=(opaAttr*100-opcurrent)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                opcurrent+=step;
                obj.style[attr]=opcurrent/100;
                if (opcurrent/100!=opaAttr){
                    oswitch=false;
                }
            }
            //添加层级
            else if(attr=='zIndex'){
                obj.style[attr]=target[attr];
            }
            else {
                //获取当前的距离,需要转换为number类型
                var current = parseInt ( getStyle ( obj, attr ) );
                //获取目标的数据
                var attrs = target[ attr ];
                var speed = ( attrs - current ) / 10;

                //给移动速度取整
                speed=speed > 0 ? Math.ceil ( speed ) : Math.floor ( speed );
                current += speed;
                obj.style[ attr ] = current+'px';
                if ( current != attrs ) {
                    oswitch=false;
                }
            }
        }
        if (oswitch){
            clearInterval ( obj.timeID );
            if(typeof callback=='function'){
                callback();
            }
        }
    },50);
}

/**
 * 获取页面滚动距离
 * @return {{scrollLeft: number, scrollTop: number}}
 */
function getScroll (  ) {
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return {
        scrollLeft : scrollLeft,//左边是对象属性名，右边是属性值
        scrollTop : scrollTop
    }
}

/**
 * 获取可视区宽度高度
 * @return {{clientWidth: number, clientHeight: number}}
 */
  function getClientSize(  ) {
    return {
        clientWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        clientHeight : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
    }
}

/**
 * 获取页面左上角距离点击点X/Y
 * @param e
 * @return {{pageX: number, pageY: *}}
 */
function  getPagePoint(e) {
    return {
        pageX : e.pageX || e.clientX + getScroll ().scrollLeft,
        pageY : e.pageY || e.clientY + getScroll ().scrollTop
    }
}

/**
 * 添加多个事件的写法
 * @param obj
 * @param eventName
 * @param fn
 */
function addEvent(obj, eventName, fn) {

    //能力检测
    if (obj.addEventListener) {//非IE8

        obj.addEventListener(eventName, fn);

    } else if (obj.attachEvent) {//IE8

        obj.attachEvent("on" + eventName, fn);

    } else {//默认方式，部分浏览器两者都不支持

        obj["on" + eventName] = fn;
    }
}

/**
 * 移除添加的addEvent添加的事件
 * @param obj
 * @param type
 * @param listener
 */
function removeEvent(obj,type,listener){
    //能力检测
    if(obj.removeEventListener){
        obj.removeEventListener(type,listener,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,listener);
    }else {
        obj["on"+type] = null;
    }
}

/**
 * 阻止冒泡
 * @param e
 */
function stopPropagation( e) {
    e = e || window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

/**
 * 封装继承函数
 * @param method
 * @param target
 */
function extend (method,target  ) {
    for( var key in method){
        method.prototype[key]=target[key];
    }
    return target;
}
