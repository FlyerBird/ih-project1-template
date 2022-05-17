class Player{
    constructor(x, y, width, height, floorBackgroundY ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
         // Jumping with gravity parameters 
      this.drag = 1;
      this.gravity = 0.3;
      this.speed = -11;
      this.onTheGround = true;
      this.jumpInterval = undefined;
      this.floorBackgroundY = 600;

 
      
    
  
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

    jump() {                            // This function is called on Game when user presses Space
      if (this.onTheGround) {           // Check if character is on the ground (so that I can't jump from the air)
          this.onTheGround = false;     // Not on the ground anymore because I'm jumping
          this.jumpInterval = setInterval(() => {
            this.speed += this.gravity; // Modify the speed according to my gravity and drag forces
            this.speed *= this.drag;    // then add the speed to the Y axis
            this.y += this.speed;       // This will go up and, in a few iterations, start going down on its own, and it won't stop going down
            this._checkIfOnFloor();
           
                 // So I have to check if I'm back on the floor
          }, 10);
        }
      }
  
    _checkIfOnFloor() {
      if (this.y > this.floorBackgroundY - this.height) { // If my character has reached the floor, reset parameters for next jump
        clearInterval(this.jumpInterval);
        this.jumpInterval = undefined;
        this.y = this.floorBackgroundY - this.height;     // The floor and Y parameters are different in each game ⚠️ mine change because my character increases when he collects a droplet
        this.drag = 1;
        this.gravity = 0.3;
        this.speed = -11;
        this.onTheGround = true;
      }
    }
    
  

 }



