
function start()
{
    display(p1.x,p1.y,p1.w,p1.h);
    display(p2.x,p2.y,p2.w,p2.h);
    display(b.x,b.y,b.s,b.s);
    b.moveBall();
}
function clear()
{
    
    ctx.clearRect(0,0,500,300);
}