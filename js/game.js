
class Game{
  constructor(context) {
    this.ctx = context;
    this.player = new Player (20, 530, 70, 70);
    this.bird = new Bird (200, 20, 230, 100, );
    this.bird2 = new Bird (600, 200, 230, 100,);
    this.rock = new Rock (100, 530, 70, 70);
   //Sounds
   this.gameOverSound = new sound ('./sounds/gameOverSound.wav');
   this.youWin = new sound ('./sounds/newLevel.wav')
   this.backgroundMusic = new sound ('./sounds/backgroundMusic.mp3')
   //this.birdCall = new sound ('./sounds/wildEagle.wav')
  }
 
/*  
_birdDownEffect(){    
  if ( this.bird.direction == "down") {
    this.bird.y = (this.bird.y + 12) 
    this.birdCall.play();
  }

  if ( this.bird2.direction == "down") {
    this.bird2.y = (this.bird2.y + 12) 
    this.birdCall.play();
  }
}
*/
  
_collision(){
  const player = this.player;
  const bird = this.bird;
  //console.log(`Player postition is ${this.player.x + this.player.y}`)
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

        this.gameOverSound.play();
        this.gameOver();
        this.gameOverSound.pause();
      }    
    
}

_collision2(){
  const player = this.player;
  const bird2 = this.bird2;
  //console.log(`Player postition is ${this.player.x + this.player.y}`)
  //same with bird
  // pensar condicional que quan colisioni en les cantonades superiors cridarem this.bird.stop i farem un console.log de muerte

       if (
        (
          // Compruebo si mi player está dentro de la X + width del bird
          this.player.x >= bird2.x && this.player.x <= bird2.x + bird2.width ||
          this.player.x + this.player.width >= bird2.x && this.player.x + this.player.width <= bird2.x + bird2.width ||
          // Incluso si mi meatball es más grande que el droplet
           bird2.x >= this.player.x && bird2.x <= this.player.x + this.player.width
        ) &&
        (
          // Lo mismo con el eje Y
          this.player.y >= bird2.y && this.player.y <= bird2.y + bird2.height ||
          this.player.y + this.player.height >= bird2.y && this.player.y + this.player.height <= bird2.y + bird2.height ||
          bird2.y >= this.player.y && bird2.y <= this.player.y + this.player.height
        )
      ) {
        this.gameOverSound.play();
        this.gameOver();
        this.gameOverSound.pause();
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
  if (this.player.x > 930) {
    this.youWin.play();
    this._winner();
    this.youWin.pause();
    
  }
}
// check si player.x > canvas x
// cridem checkifwin desde update

_winner() {
  const winPage = document.getElementById('win-page');
  winPage.style = "display: flex";
  const canvas = document.getElementById('canvas');
  canvas.style = "display: none;"
  
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


  _drawPlayer(){
    //this.ctx.fillStyle = "red";
   // this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
   //console.log(this.player.width, this.player.height);
   this.ctx.drawImage(player,this.player.x, this.player.y, this.player.width, this.player.height);
  }

  _updatePlayer(){
    this._drawPlayer();
  }

  _drawBird(ctx){
    //this.ctx.fillStyle = "grey";
    //this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
    this.ctx.drawImage(bird,this.bird.x, this.bird.y, this.bird.width, this.bird.height)
    
  }

  _updateBird(){ 
    this._drawBird();
    this.bird._moveAround();
    //this._birdDownEffect();
 }


 _drawBird2(ctx){
  //this.ctx.fillStyle = "grey";
  //this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
  this.ctx.drawImage(bird2,this.bird2.x, this.bird2.y, this.bird2.width, this.bird2.height) 
}

_updateBird2(){ 
  this._drawBird2();
  this.bird2._moveAround();
  //this._birdDownEffect();
}

_drawRock(){
  this.ctx.fillStyle = "blue";
 this.ctx.fillRect(this.rock.x, this.rock.y, this.rock.width, this.rock.height);
 //console.log(this.player.width, this.player.height);
 //this.ctx.drawImage(player,this.player.x, this.player.y, this.player.width, this.player.height);
}


  _clean(){
    this.ctx.clearRect(0,0,1000,600);
  }

  _update() {
    this._clean();
    this._updatePlayer();
    this._updateBird();
    this._updateBird2();
    this._drawRock();
    this._collision(this.player,this.bird);
    this._collision2(this.player, this.bird2);
    this._checkIfwin();
    window.requestAnimationFrame(() => this._update())
  }

  start() {
    this._assignControls();
    this._update();
    this.backgroundMusic.play();
    
    
  }
  
}

