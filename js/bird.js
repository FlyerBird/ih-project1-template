class Bird{
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.goLeft = false;
    
    }

    /*
    moveAround(){
        if (this.goLeft == true ){
            this.x=this.x -3;
        }
        if (this.x > 965 ) {
            this.goLeft=true;
        }
        if (this.x < 35){
            this.goLeft = false
        }
    }
    */

    _moveAround() {
        this.x = this.x + 5;
        if (this.x > 1000) {
          this.x = 10-this.width;
        }
      }

 }

