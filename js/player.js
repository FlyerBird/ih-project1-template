class Player{
    constructor(x, y, width, height ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.jumpHeight = 200;
      this.jumping = false;

      /*
      this.xVelocity = xVelocity;
      this.yVelocity = yVelocity;

      this.jump = false;

      this.gravity = 0.9;
      
      this.keyLeft = false;
      this.keyRight = false;
      this.keyUp = false;
      */
    }

    

    jump() {
      
      const jumpReference = this.y;
      
      const jumpUp = () => {
        
        if((this.y > jumpReference-this.jumpHeight) && (!this.jumping)) {
          this.y -= 20;
        } else {
          this.jumping = true;
          this.y+=20;
          if(this.y === jumpReference) {
            clearInterval(jumpId);
            this.jumping = false;
          }
        }
        
      }
      const jumpId = setInterval(jumpUp, 20)
    }

  
    moveRight() {
      this.x = this.x + 25;
    }

    moveLeft() {
      this.x = this.x - 25;
    }
/*
    moveUp() {
      this.y = this.y - 50;
    }
    */
  
    /*
moveLeft() {
if (this.keyLeft == true) {
  this.xVelocity = 6;
}
}


    animate() {
      requestAnimationFrame(this.animate)
      Player._updatePlayer()
    }
*/
 }



