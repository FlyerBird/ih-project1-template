class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player (20, 565, 35, 35);
    this.bird = new Bird (500, 20, 100, 35);
    //this.gravity = new Gravity (false, 1, 2, 10,)
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
    
        default:
          break;
      }
    });
  }

  _drawPlayer(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height)
  }

  _drawBird(){
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
  }

  _clean(){
    this.ctx.clearRect(0,0,1000,600);
  }

  _update() {
    this._clean()
    this._drawPlayer();
    this._drawBird();
    window.requestAnimationFrame(() => this._update());
 
  }

  start() {
    this._assignControls();
    this._update();
  }
}