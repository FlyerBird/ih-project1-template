
class Game{
  constructor(context, context2) {
    this.ctx = context;
    this.ctx2 = context2;
    this.player = new Player (20, 530, 70, 70);
    this.bird = new Bird (200, 20, 230, 100, );
    this.bird2 = new Bird (600, 200, 230, 100,);
    this.bird3 = new Bird (400, 20, 100, 70,);
    this.level = 1;
    
    //this.rock = new Rock (100, 530, 70, 70);
   //Sounds
   this.gameOverSound = new sound ('./sounds/gameOverSound.wav');
   this.youWin = new sound ('./sounds/newLevel.wav');
   
   this.jumpingSound = new sound ('./sounds/jumping.wav');
   this.dramaticBackground = new sound ('./sounds/dramaticBackground.mp3');
   this.succesVoice = new sound ('./sounds/succesVoice.wav')

   this.wildBirdSound = new sound ('./sounds/wildBirdSound.wav')
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
             this.jumpingSound.play();
            break;
        default:
        break;
        }

      });
          }
          
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
          // Incluso si mi player es más grande que el bird
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
          // Compruebo si mi player está dentro de la X + width del bird2
          this.player.x >= bird2.x && this.player.x <= bird2.x + bird2.width ||
          this.player.x + this.player.width >= bird2.x && this.player.x + this.player.width <= bird2.x + bird2.width ||
          // Incluso si mi player es más grande que el bird2
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

_collision3(){
  const player = this.player;
  const bird3 = this.bird3;
  //console.log(`Player postition is ${this.player.x + this.player.y}`)
  //same with bird
  // pensar condicional que quan colisioni en les cantonades superiors cridarem this.bird.stop i farem un console.log de muerte

       if (
        (
          // Compruebo si mi player está dentro de la X + width del bird2
          this.player.x >= bird3.x && this.player.x <= bird3.x + bird3.width ||
          this.player.x + this.player.width >= bird3.x && this.player.x + this.player.width <= bird3.x + bird3.width ||
          // Incluso si mi player es más grande que el bird2
           bird2.x >= this.player.x && bird2.x <= this.player.x + this.player.width
        ) &&
        (
          // Lo mismo con el eje Y
          this.player.y >= bird3.y && this.player.y <= bird3.y + bird3.height ||
          this.player.y + this.player.height >= bird3.y && this.player.y + this.player.height <= bird3.y + bird3.height ||
          bird3.y >= this.player.y && bird3.y <= this.player.y + this.player.height
        )
      ) {
        this.gameOverSound.play();
        this.gameOver();
        this.gameOverSound.pause();
      }    
    
}

/*
_rockCollision(){

  if (
    this.player.y + this.player.height <= this.rock.y && this.player.y + this.player.height + this.player.floorBackgroundY >= 
    this.rock.y && this.player.x + this.player.width >= this.rock.x && this.player.x <= this.rock.x + this.rock.width
  ) {
    this.player.floorBackgroundY = 530;
  } else {
    this.player.floorBackgroundY = 600;
  }
  */

   /*
  if (
    (
      // Compruebo si mi player está dentro de la X + width del bird
      this.player.x >= this.rock.x && this.player.x <= this.rock.x + this.rock.width ||
      this.player.x + this.player.width >= this.rock.x && this.player.x + this.player.width <= this.rock.x + this.rock.width ||
      // Incluso si mi meatball es más grande que el droplet
       this.rock.x >= this.player.x && this.rock.x <= this.player.x + this.player.width
    ) &&
    (
      // Lo mismo con el eje Y
      this.player.y >= this.rock.y && this.player.y <= this.rock.y + this.rock.height ||
      this.player.y + this.player.height >= this.rock.y && this.player.y + this.player.height <= this.rock.y + this.rock.height ||
      this.rock.y >= this.player.y && this.rock.y <= this.player.y + this.player.height
    )
  ) {
    this.player.floorBackgroundY = 530;
  }    
 
}
 */



  _drawPlayer(){
    //this.ctx.fillStyle = "red";
   // this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
   //console.log(this.player.width, this.player.height);
   this.ctx.drawImage(player,this.player.x, this.player.y, this.player.width, this.player.height);
   
   if (this.level === 2){
  // this.ctx.clearRect(0,0,1000,600);
     this.ctx2.drawImage(player,this.player.x, this.player.y, this.player.width, this.player.height);
   }
   
  }
  

  _updatePlayer(){
    this._drawPlayer();
  }

  _drawBird(){
    //this.ctx.fillStyle = "grey";
    //this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
    this.ctx.drawImage(bird,this.bird.x, this.bird.y, this.bird.width, this.bird.height)
   
    if (this.level === 2){
     // this.ctx.clearRect(0,0,1000,600);
      this.ctx2.drawImage(bird,this.bird.x, this.bird.y, this.bird.width, this.bird.height)
    }
  
  }

  _updateBird(){ 
    this._drawBird();
    this.bird._moveAround(); 
    
 }


 _drawBird2(){
  //this.ctx.fillStyle = "grey";
  //this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
  this.ctx.drawImage(bird2,this.bird2.x, this.bird2.y, this.bird2.width, this.bird2.height) 
  
  if (this.level === 2){
    this.ctx2.drawImage(bird2,this.bird2.x, this.bird2.y, this.bird2.width, this.bird2.height)
  } 
  
}

_updateBird2(){ 
  this._drawBird2();
  this.bird2._moveAround2();
}

_drawBird3(){
  //this.ctx.fillStyle = "grey";
  //this.ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height)
  this.ctx2.drawImage(bird3,this.bird3.x, this.bird3.y, this.bird3.width, this.bird3.height) 
  /*
  if (this.level === 2){
    this.ctx2.drawImage(bird3,this.bird3.x, this.bird3.y, this.bird3.width, this.bird3.height) 
    
  }
  */
}

_updateBird3(){ 
  this._drawBird3();
  this.bird3._moveAround3();
  this.wildBirdSound.play();
}




/*
_drawRock(){
  this.ctx.fillStyle = "blue";
 this.ctx.fillRect(this.rock.x, this.rock.y, this.rock.width, this.rock.height);
 //console.log(this.player.width, this.player.height);
 //this.ctx.drawImage(player,this.player.x, this.player.y, this.player.width, this.player.height);
}

*/

_checkIfwin() {
  if (this.player.x > 930 && this.level === 1) {
    this._winner();
    this.level = 2;
    this.player.x = 20;
    document.getElementsByTagName('canvas')[0].remove();
    document.getElementsByTagName('canvas')[0].classList.remove('hidden');
    document.getElementsByTagName('canvas')[0].classList.add('level2');
    document.getElementsByTagName('canvas')[0].style="display:block";
    
    //this.youWin.play();
    //this.youWin.pause();
    //if this.level 1 {this.ctx.remove()
                       //this.level 2}
    
  } else if (this.player.x > 930 && this.level === 2) {
    this._winnerNext();
    document.getElementsByTagName('canvas')[0].remove();
    //this.ctx2.clearRect(0,0,1000,600);
  }
  
}
/*
_checkIfwin() {
  if (this.player.x > 930 && this.level) {
    this._winner();
    this.level = 2;
    this.player.x = 20;

    //error this.ctx.remove();

    //this.youWin.play();
    //this.youWin.pause();
    //if this.level 1 {this.ctx.remove()
                       //this.level 2}
    
  }
  if (this.level = 1) {
    //this.ctx.remove(); ERROR
  }
}
// check si player.x > canvas x
// cridem checkifwin desde update
*/
_winner() {

  const canvas = document.getElementById('canvas2');
  canvas.style = "display: none;"
  this.succesVoice.play();
  this.bird.x = 100;
  this.bird2.x = 700;
  this.bird3.x = 450;
  //error not a function :S mp3?¿ this.backgroundMusic.pause();
  //this.dramaticBackground.play();
}

_winnerNext(){
    const winPage = document.getElementById('win-page');
     winPage.style = "display: flex";
     this.succesVoice.play();
     this.youWin.play();
     //this.youWin.pause();
}

gameOver() {
  // Qué tiene que ocurrir cuando pierde
  const losePage = document.getElementById('lose-page');
  losePage.style = "display: flex";
  let canvas = document.getElementsByTagName('canvas');
   canvas = [...canvas]
  canvas.forEach(element => {
    element.remove();
  });
  
}



  _clean(){
    this.ctx.clearRect(0,0,1000,600);
    if (this.level === 2){
      this.ctx2.clearRect(0,0,1000,600);
    } //if this.level === 2 {this.ctx2.clearRect}
  }

  _update() {
    this._clean();
    this._updatePlayer();
    this._updateBird(); 
    if (this.level === 2){
      this._updateBird();
    }

    this._updateBird2();
    if (this.level === 2){
      this._updateBird3();
    }
    //this._drawRock();
    this._collision(this.player,this.bird);
    this._collision2(this.player, this.bird2);
    this._collision3(this.player, this.bird3);
    this._checkIfwin();

    this.dramaticBackground.play();
    if (this.level === 2){
      //this.backgroundMusic.remove();
    }
    //this._rockCollision();
    window.requestAnimationFrame(() => this._update())
  }

  start() {
    this._assignControls();
    this._update();
    
   
  }

}

