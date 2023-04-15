var canva=document.getElementById("canva");
var ctx=canva.getContext("2d");
var color="aquamarine";
var mouseE="";
var lastx="";
var lasty="";
var gros=1;
var figures="";
canva.addEventListener("mousedown", inicio);
function inicio (e){
    mouseE="mousedown";
    color=document.getElementById("color").value;
    gros=document.getElementById("grosor").value;
    figures=document.getElementById("figura").value;
}
canva.addEventListener("mousemove", movement);
function movement (e){
    var actx=e.clientX-canva.offsetLeft;
    var acty=e.clientY-canva.offsetTop;
    if(mouseE=="mousedown"){
        if(figures==""){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=gros;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(actx, acty);
        ctx.stroke();
        }
    }
    lastx=actx;
    lasty=acty;
}
canva.addEventListener("mouseup", arriba);
function arriba (e){
    mouseE="mouseup";
}
canva.addEventListener("mouseleave", fuera);
function fuera (e){
    mouseE="mouseleave";
}
canva.addEventListener("mousedown",circled);
function circled (e){
    posx=e.clientX-canva.offsetLeft;
    posy=e.clientY-canva.offsetTop;
    dibujar(posx,posy);
    }
    function dibujar(){
        if(figures=="circulo"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=gros;
            ctx.arc(posx,posy,40,0,2*Math.PI);
            ctx.stroke();
        }
        if(figures=="cuadrado"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=gros;
            ctx.rect(posx,posy,50,50);
            ctx.stroke();
        }
    }

function boton(){
    ctx.clearRect(0,0,canva.width, canva.height);
}
