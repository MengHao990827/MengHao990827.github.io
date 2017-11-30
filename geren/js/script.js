
window.onscroll=function(){
    var c = document.getElementById("div");
    var c1 = document.getElementById("div1");
    var c2 = document.getElementById("div2");
    var scrollTop = document.body.scrollTop;
    var jjj = document.getElementById("jjj");
    var dw = document.getElementById("dw") 
    if(scrollTop > 1180){
    c.style.width="75%"
    c1.style.width="65%"
    c2.style.width="70%"
    }
    if(scrollTop > 1470){
    dw.style.display="block"
    dw.style.animation="a 1.3s";
    }
}

   