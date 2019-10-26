
//各パーツの形状変更
var img = document.getElementById(".hair_b");
var src = hair_b.getAttribute("src");
var n=1;
function hair_b_change(){
    if(n<=1){
        n++;
        var img = document.getElementById(".hair_b");
        hair_b.setAttribute("src","png/hair_b/0"+n+"/01.png");
    }else{
        var img = document.getElementById(".hair_b");
        hair_b.setAttribute("src","png/hair_b/01/01.png");
        n=1;
    }
}
var img = document.getElementById(".eb");
var src = eb.getAttribute("src");
var n=1;
function eb_change(){
    if(n<=3){
        n++;
        var img = document.getElementById(".eb");
        eb.setAttribute("src","png/eb/0"+n+".png");
    }else{
        var img = document.getElementById(".eb");
        eb.setAttribute("src","png/eb/01.png");
        n=1;
    }
}

var img = document.getElementById(".mouth");
var src = mouth.getAttribute("src");
var n=1;
function mouth_change(){
    if(n<=4){
        n++;
        var img = document.getElementById(".mouth");
        mouth.setAttribute("src","png/mouth/0"+n+".png");
    }else{
        var img = document.getElementById(".mouth");
        mouth.setAttribute("src","png/mouth/01.png");
        n=1;
    }
}

var img = document.getElementById(".eye");
var src = eye.getAttribute("src");
var n=1;
function eye_change(){
    if(n<=2){
        n++;
        var img = document.getElementById(".eye");
        eye.setAttribute("src","png/eye/0"+n+"/01.png");
    }else{
        var img = document.getElementById(".eye");
        eye.setAttribute("src","png/eye/01/01.png");
        n=1;
    }
}
var img = document.getElementById(".cheek");
var src = cheek.getAttribute("src");
var n=1;
function cheek_change(){
    if(n<=3){
        n++;
        var img = document.getElementById(".cheek");
        cheek.setAttribute("src","png/cheek/0"+n+".png");
    }else{
        var img = document.getElementById(".cheek");
        cheek.setAttribute("src","png/cheek/01.png");
        n=1;
    }
}