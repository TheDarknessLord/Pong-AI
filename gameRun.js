 
    const pw = 10;
    const pl = 50;
    const bs = 10;
    const mxw = 500;
    const mxh = 300;
    const px = 10;
    const cx = 480;
    
    let x=250;//This is the ball x coordinate
    let y=150;//This is the ball y coordinate
    let yp=150;//y coordinate of the player
    let yc=150;//y coordinate of the computer
    let dy=4;//y velocity
    let dx=4;//x velocity (Initially going towards the Left)
    let sp;//Score of the player
    let sc;//Score of the Computer
    let pdy=0;
    
    let cdy=0;
    
    
 
    main();
    
    document.addEventListener("keydown", changedirection);  
    function main(){
    // if(has_game_ended()) return;//if the game end the function will return true which in turn shall stop everything
     changing_X = false;
        setTimeout(function onTick() {
      
       
      clear();
      p2.godAI(b.y);
       
        start();
        
          main();
      }, 40)
    }
   function changedirection(event){
        const UP_KEY = 40;
        const DOWN_KEY = 38;
        const keyPressed = event.keyCode;
      if(keyPressed===UP_KEY)
        p1.move(10);
      if(keyPressed===DOWN_KEY)
      p1.move(-10);

    }


   
    /*function has_game_ended(){
        if(x==0||x<0){sc=sc+1;return true;}//if the ball hits our side of the screen
        if(x==cx+10||x>cx+10){sp=sp+1;return true;}//if the ball hits computer side of the screen 
    }
     

   /* function change_direction(event)//For the event "Keypressed" call this function
    {
        const UP_KEY = 40;
        const DOWN_KEY = 38;
        const keyPressed = event.keyCode;

        if(keyPressed === UP_KEY)
        pdy=6;
        if (keyPressed === DOWN_KEY)
        pdy=-6;
        
    
    }


  
    
    /*ctx.clearRect(20,20,100,100);
    ctx.fillStyle = '#FFF';
    ctx.fillRect(10,150,10,50);
    ctx.fillStyle = '#FFF';
    ctx.fillRect(480,240,10,50);
    ctx.fillStyle = '#FFF';
    ctx.fillRect(250,250,10,10);*/










