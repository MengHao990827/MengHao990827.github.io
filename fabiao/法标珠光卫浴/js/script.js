$(function () {
    $('.right .icon li').not('.up,.down').mouseenter(function () {
        $('.right .info').addClass('hover');
        $('.right .info li').hide();
        $('.right .info li.' + $(this).attr('class')).show(); //.right .info li.qq
    });
    $('.right').mouseleave(function () {
        $('.right .info').removeClass('hover');
    });
});


 window._bd_share_config = {
    "common": {
        "bdSnsKey": {}
        , "bdText": ""
        , "bdMini": "2"
        , "bdMiniList": false
        , "bdPic": ""
        , "bdStyle": "0"
        , "bdSize": "16"
    }
    , "slide": {
        "type": "slide"
        , "bdImg": "0"
        , "bdPos": "left"
        , "bdTop": "199.5"
    }
//   
    , "selectShare": {
        "bdContainerClass": null
        , "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
    }
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];


