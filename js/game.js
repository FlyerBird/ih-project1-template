class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player (20, 350, 35, 35, 0, 10);
    this.bird = new Bird (500, 20, 100, 35, 5);
    
  }

  
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
         
        case 'ArrowLeft':
          this.player.moveLeft();
          break;
        case 'ArrowRight':
          this.player.moveRight();
          break;
        case 'ArrowUp':
            this.player.moveUp();
            break;
        case 'ArrowDown':
              this.player.moveDown();
              break;
        default:
        break;
        }

      });
      }


  _drawPlayer(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height)
    
  }

  _updatePlayer(){
    this._drawPlayer();
    this.y += this.yVelocity
    
    if (this.y + this.height + this.yVelocity <= innerHeight) {
      this.yVelocity += gravity
    } else { 
    this.yVelocity += gravity;
  }
  }


 /*
  animate() {
    requestAnimationFrame(this.animate)
    Player._updatePlayer()
  }
  */

  _drawBird(ctx){
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
    
  }

  _updateBird(){ 
    this._drawBird();
    this.bird._moveAround();

 }


  _clean(){
    this.ctx.clearRect(0,0,1000,600);
  }

  _update() {
    this._clean()
    this._updatePlayer();
    this._updateBird(this.ctx);
    window.requestAnimationFrame(() => this._update());
   
    
  }

  start() {
    this._assignControls();
    this._update();
  }
  
}

