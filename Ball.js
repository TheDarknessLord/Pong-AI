class Ball{
    constructor(x,y,vx,vy,s){
        this.x=x;
        this.y=y;
        this.s=s;
        this.vx=vx;
        this.vy=vy;
    }
    moveBall(){//contains the bounce WALL HAVE TO ADD PLAYER BOUNCE
        if(this.x>=0&&this.x<=490)
       this.x=this.x+this.vx;
       else
        this.vx=-this.vx;this.x=this.x+this.vx;
        if(this.y>=0&&this.y<=290)
        this.y=this.y+this.vy;
        else
        {this.vy=-this.vy;this.y=this.y+this.vy;}
        if(((this.x==p1.x+5)&&((this.y+5>=p1.y)&&(this.y+5<=p1.y+p1.h))))
        {this.vx=-this.vx;}
        if(((this.x==p2.x)&&((this.y+5>=p2.y)&&(this.y+5<=p2.y+p2.h))))
        {this.vx=-this.vx;}
    }
}
var b = new Ball(250,150,4,4,10);