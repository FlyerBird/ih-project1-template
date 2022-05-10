
class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player (20, 565, 35, 35);
    this.bird = new Bird (500, 20, 100, 35);
    
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
/*
  if (this.player.y >= this.bird.y && this.player.y <= this.bird.y + this.bird.height) {
    console.log("MUERTEEEEEEEEEE!")
  } else (this.player.x >= this.bird.x &&  this.player.x <= this.bird.x + this.bird.width) 
       console.log ("MUERTEEEEE!")
  */
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
        /*
        // Aplico efectos después de colisión
        if (droplet.role === 'food') {
          this.meatball._increase();
          this.points++;
        } else if (droplet.role === 'poison') {
          this.meatball._decrease();
          this.points--;
        }
        if (this.points < 0) {
          console.log('You lose!');
          this.gameOver();
        }
        // Elimino elementos de mi array cuando ya han colisionado
        let index = this.droplets.indexOf(droplet);
        this.droplets.splice(index, 1);
        */


        console.log ("BIRD CATCHED YOU");
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
            this.player.jump();
            break;
        default:
        break;
        }

      });
          }

 /*
  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
         
        case 'ArrowLeft':
          this.player.moveLeft();
          break;
        case 'ArrowRight':
          this.player.move() = true;
          break;
        case 'ArrowUp':
            this.player.keyUp = true;
            break;
        default:
        break;
        }

      });


    }
  */
     
/*
      _assignControls2() {
        // Controles del teclado
        document.addEventListener('keyup', (event) => {
          switch (event.code) {
               
            case 'ArrowLeft':
              this.player.keyLeft = false;
              break;
            case 'ArrowRight':
              this.player.keyRight = false;
              break;
            case 'ArrowUp':
                this.player.keyUp = false;
                break;
            default:
            break;
            }
      
            });
    */



  _drawPlayer(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height)
    
  }

  _updatePlayer(){
    this._drawPlayer();
    //this.y += this.yVelocity
    //this.floor();
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
    this._updateBird();
    this._collision(this.player,this.bird)
    window.requestAnimationFrame(() => this._update())
  }

  start() {
    this._assignControls();
    this._update();
  }
  
}

