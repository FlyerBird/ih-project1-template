
class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player (20, 565, 35, 35);
    this.bird = new Bird (500, 20, 100, 35);
   // this.intervalGame = undefined;
    //this.intervalFall = undefined;
    
  }
  
_collision(){
  const player = this.player;
  const bird = this.bird;

  //const playerLeftOfBird = ( player.x + player.width) < bird.x;
  //const playerRightOfBird = player.x > (bird.x + bird.width);
  //const playerAboveBird = (player.x + player.height) < bird.y;
  //const playerBelowBird = bird.y > ( bird.y + bird.height);

  console.log(`Player postition is ${this.player.x + this.player.y}`)

//same with bird
// pensar condicional que quan colisioni en les cantonades superiors cridarem this.bird.stop i farem un console.log de muerte

       if (
        (
          // Compruebo si mi player está dentro de la X + width del bird
          this.player.x >= bird.x && this.player.x <= bird.x + bird.width ||
          this.player.x + this.player.width >= bird.x && this.player.x + this.player.width <= bird.x + bird.width ||
          // Incluso si mi meatball es más grande que el droplet
           bird.x >= this.player.x && bird.x <= this.player.x + this.player.width
        ) &&
        (
          // Lo mismo con el eje Y
          this.player.y >= bird.y && this.player.y <= bird.y + bird.height ||
          this.player.y + this.player.height >= bird.y && this.player.y + this.player.height <= bird.y + bird.height ||
          bird.y >= this.player.y && bird.y <= this.player.y + this.player.height
        )
      ) {

        //alert ("GAME OVER");
        this.gameOver();
        //this._collision();
      }    
    
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
          //if !this.player.jumping
            this.player.jump();
            break;
        default:
        break;
        }

      });
          }

_checkIfwin() {
  if (this.player.x > 1000) {
    this._winner();
  }
}
// check si player.x > canvas x
// cridem checkifwin desde update
// if (fora del canvas) mostrar pantalla win i matar canvas

_winner() {
  const winPage = document.getElementById('win-page');
  winPage.style = "display: flex";
  const canvas = document.getElementById('canvas');
  canvas.style = "display: none;"
}


  _drawPlayer(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
   //console.log(this.player.width, this.player.height);
   //this.ctx.drawImage(player,35, 35);
  }

  _updatePlayer(){
    this._drawPlayer();
  }

  _drawBird(ctx){
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
    
  }

  _updateBird(){ 
    this._drawBird();
    this.bird._moveAround();

 }

 gameOver() {
  // Qué tiene que ocurrir cuando pierde
 // clearInterval(this.intervalFall);
 // clearInterval(this.intervalGame);
  const losePage = document.getElementById('lose-page');
  losePage.style = "display: flex";
  const canvas = document.getElementById('canvas');
  canvas.style = "display: none;"
}

  _clean(){
    this.ctx.clearRect(0,0,1000,600);
  }

  _update() {
    this._clean();
    this._updatePlayer();
    this._updateBird();
    this._collision(this.player,this.bird)
    this._checkIfwin();
    window.requestAnimationFrame(() => this._update())
  }

  start() {
    this._assignControls();
    this._update();
  }
  
}

