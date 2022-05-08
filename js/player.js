

class Player{
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    
    }

    moveRight() {
      this.x = this.x + 25;
    }

    moveLeft() {
      this.x = this.x - 25;
    }
 }

/*
class Gravity extends Player {
   constructor(jump, direction, velocity, jumpPower, fallingSpeed) {
     super(x, y, width, height);
      this.jump = jump;
      this.direction = direction;
      this.velocity = velocity;
      this.jumpPower = jumpPower;
      this.fallingSpeed = fallingSpeed;
      this.minHeight = minHeight; 

  }

  gravityOn(){
    if (this.y >= this.minHeight && jump == false){
      this.y = this.y;
    } else {
      this.y = this.y + (this.direction*this.velocity);
    }

    if (this.jump == true){
      this.velocity = -this.jumpPower;
    } else {
      this.velocity = this.fallingSpeed;
    }
  

  }
  

  }
  */


