const gravity = 0.5;

class Player{
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.xVelocity = 0;
      this.yVelocity = 1;
    }

    moveRight() {
      this.x = this.x + 25;
    }

    moveLeft() {
      this.x = this.x - 25;
    }

    moveUp() {
      this.y = this.y - 50;
    }

    moveDown() {
      this.y = this.y + 50;
      if (this.height > canvas.height) {
        this.y = this.y
      }
    }
    /*
    animate() {
      requestAnimationFrame(this.animate)
      Player._updatePlayer()
    }
*/
 }



