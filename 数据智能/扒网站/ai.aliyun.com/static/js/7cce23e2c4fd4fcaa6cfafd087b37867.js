!function(o){function t(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return o[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=o,t.c=n,t.p="",t(0)}([function(o,t,n){var e;(function(o){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};if("object"===i(o)&&o&&"object"===i(o.exports)){var a=function(o,t){var n,e=navigator.userAgent.toLocaleLowerCase();r(o);try{/(aliapp)+[\s]*(\([aliyun|tb|tm|ap]+\/[\d|\.]+\))+/.test(e)&&(n=!0)}catch(o){}n||window.isAliyunAppWebView?o.remove():o.find(".module-wrap").addClass("show").removeClass("hide")},r=function(o){o.find(".footer-share-weixin").on("click",function(){o.find(".wx-pop-wrapper").toggleClass("show").toggleClass("hide")}),o.find(".wx-pop-wrapper").on("click",function(){o.find(".wx-pop-wrapper").toggleClass("show").toggleClass("hide")})};n(3);var s=$(".aliyun-m-common-footer");s.each(function(){var o=$(this).find("textarea.schemaData"),t=o.val(),n=JSON.parse(t);n&&a($(this),n)}),o.exports=a}else e=function(o){function t(){this.init.apply(this,arguments)}return t.prototype={init:function(o,t){var n,e=this,i=navigator.userAgent.toLocaleLowerCase();e.$container=$(o);try{/(aliapp)+[\s]*(\([aliyun|tb|tm|ap]+\/[\d|\.]+\))+/.test(i)&&(n=!0)}catch(o){}return n||window.isAliyunAppWebView?void e.$container.remove():(e.$container.find(".module-wrap").addClass("show").removeClass("hide"),void(t?e.loadData(t):e.bindEvent()))},loadData:function(o){},bindEvent:function(){var o=this;this.$container.find(".footer-share-weixin").on("click",function(){o.$container.find(".wx-pop-wrapper").toggleClass("show").toggleClass("hide")}),this.$container.find(".wx-pop-wrapper").on("click",function(){o.$container.find(".wx-pop-wrapper").toggleClass("show").toggleClass("hide")})}},t}.call(t,n,t,o),!(void 0!==e&&(o.exports=e))}).call(t,n(2)(o))},,function(o,t){"use strict";o.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children=[],o.webpackPolyfill=1),o}},function(o,t){}]);