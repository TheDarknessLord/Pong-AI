let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
function display(x,y,w,h)
{
    ctx.fillStyle='#FFF';
    ctx.fillRect(x,y,w,h);
}