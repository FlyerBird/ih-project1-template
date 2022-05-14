
class Bird{
    constructor(x, y, width, height, speed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.direction = "down";
      //this.speed = speed;

      //this.dx = 1 * this.speed;
      //this.dy = 1 * this.speed;  
    }

   
   _moveAround (){
//console.log( this.direction, this.y);
     if ( this.direction == "down") {
       this.y = (this.y + 12) 

     } else if ( this.direction == "up") {
      this.y = this.y - 3
     }
     
     if (this.y > 480) {
       this.direction = "up";
     } else if (this.y < 0) {
       this.direction = "down"
     }
   }


    /*
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
      
      //_stop parar
*/
 }
 
