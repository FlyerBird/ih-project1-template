
class Bird{
    constructor(x, y, width, height, speed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;

      this.dx = 1 * this.speed;
      this.dy = 1 * this.speed;  
    }

    _moveAround() {
        if (this.x > 900) {
            this.dx = -this.dx;
        }

        if (this.x < 0 ) {
            this.dx = -this.dx;
        }

        if (this.y > 565 ) {
            this.dy = -this.dy;
        }

        if (this.y < 0 ) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
      }

 }
 
/*
 _moveAround() {
    this.x = this.x + 5;
    if (this.x > 1000) {
      this.x = 10-this.width;
    }
  }
  */