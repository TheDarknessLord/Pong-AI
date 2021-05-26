
class Player
{
  constructor(x,y,w,h)
  {  this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     this.v=0;
  }
   move(vel)
  {   
    if(this.y>=0&&this.y<=500)
    {
      this.v=vel;
      this.y=this.y+vel;
    } 
    else
{this.v=0;this.y=this.y+0;} }
godAI(y){
  
  
  
  this.y=y-20;
 
}
}
var p1 =new Player(10,125,10,50);//Player 1 human
var p2 =new Player(480,125,10,50);//God AI player