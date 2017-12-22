   var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       navigation:{
       nextEl:".swiper-button-next"
   } ,on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });
var music = document.querySelector(".music");
var off = document.querySelector(".off");
var gif = document.querySelector(".gif");
var audio = document.querySelector("audio");
var num = 1;
music.onclick = function(){
    if(num == 1){
        off.style.animation="none";
        gif.style.display="none";
        audio.pause();
        num = 0;
    }else {
        off.style.animation="mus 2s linear infinite";
        gif.style.display="block";
        audio.play();
        num = 1;
    }
}