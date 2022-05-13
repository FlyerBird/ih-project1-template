class Player{
    constructor(x, y, width, height ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.jumpHeight = 200;
      this.jumping = false;

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
     //  if (no estic fora del canvas)

     if (this.x > 0 ) {
      this.x = this.x - 25;
  }
      
    }

 }



