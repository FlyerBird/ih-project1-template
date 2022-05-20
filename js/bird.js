
class Bird{
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      this.direction = "down"; 
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


    
    _moveAround2() {
      if ( this.direction == "down") {
        this.y = (this.y + 20) 
 
      } else if ( this.direction == "up") {
       this.y = this.y - 3
      }
      
      if (this.y > 480) {
        this.direction = "up";
      } else if (this.y < 0) {
        this.direction = "down"
      }
        
      }

      _moveAround3() {
        if ( this.direction == "down") {
          this.y = (this.y + 10)
   
        } 
        
        
        else if ( this.direction == "up") {
         this.y = this.y - 20
        }
        
        if (this.y > 530) {
          this.direction = "up";
        } else if (this.y < 0) {
          this.direction = "down"
        }
          
        }
      
    
 }
 
