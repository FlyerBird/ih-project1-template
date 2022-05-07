class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player (10, 565, 35, 35);
  }


  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.meatball.moveLeft();
          break;
        case 'ArrowRight':
          this.meatball.moveRight();
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

  _update(  ) {
    this._drawPlayer();
    window.requestAnimationFrame(() => this._update());
 
  }

  start() {
    this._assignControls();
    this._update();
  }
}